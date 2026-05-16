document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('closed-model-detail');
  const dataNode = document.getElementById('closed-model-data');
  if (!root || !dataNode) return;

  const baseUrl = root.dataset.baseurl || '';
  let models = [];
  try {
    models = JSON.parse(dataNode.textContent || '[]');
  } catch (error) {
    root.innerHTML = '<div class="bench-card modelpk-warning-card">Closed dataset model data failed to load.</div>';
    return;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function percent(value) {
    return (toNumber(value) * 100).toFixed(1);
  }

  function fixed(value, digits) {
    return toNumber(value).toFixed(digits);
  }

  function integer(value) {
    return Math.round(toNumber(value)).toLocaleString('en-US');
  }

  function logo(model) {
    if (model.logo) {
      return '<img class="bench-model-logo" src="' + baseUrl + '/assets/images/bench/' + escapeHtml(model.logo) + '" alt="' + escapeHtml(model.provider_key || model.model_name || 'model') + ' logo" />';
    }
    return '<div class="bench-model-logo bench-model-logo-placeholder-small">' + escapeHtml(String(model.model_name || '?').slice(0, 1).toUpperCase()) + '</div>';
  }

  function bar(label, value) {
    return '<div class="bench-bar-row"><span>' + escapeHtml(label) + '</span><div class="bench-inline-bar"><span style="width: ' + percent(value) + '%"></span></div><strong>' + percent(value) + '</strong></div>';
  }

  function metric(label, value) {
    return '<div><span>' + escapeHtml(label) + '</span><strong>' + value + '</strong></div>';
  }

  function findModel() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || params.get('source_id') || params.get('slug');
    return models.find(function (model) {
      return model.id === id || model.source_id === id || model.slug === id;
    }) || models[0];
  }

  function render(model) {
    if (!model) {
      root.innerHTML = '<div class="bench-card modelpk-warning-card">No closed dataset model profile is available.</div>';
      return;
    }

    document.title = model.model_name + ' Closed Dataset - ClawProBench';
    const openDetail = model.has_public_row && model.slug
      ? '<a class="bench-ghost-link" href="' + baseUrl + '/bench/models/' + escapeHtml(model.slug) + '/">Open Dataset Detail</a>'
      : '';

    root.innerHTML = [
      '<div class="bench-detail-hero bench-detail-hero-wide">',
      '  <div class="bench-detail-title-block">',
      '    <p class="bench-kicker">Closed Dataset Model Profile</p>',
      '    <div class="bench-model-cell bench-model-cell-rich">' + logo(model) + '<div><h1>' + escapeHtml(model.model_name) + '</h1><p class="bench-intro">Platform: ' + escapeHtml(model.platform || '') + ' · Provider key: ' + escapeHtml(model.provider_key || '') + ' · Closed Rank #' + escapeHtml(model.rank || 'NA') + ' · Updated: ' + escapeHtml(String(model.updated_at || '').slice(0, 10)) + '</p></div></div>',
      '  </div>',
      '  <div class="bench-stat-grid bench-stat-grid-wide">',
      '    <div class="bench-stat-card"><span>Closed Final Score</span><strong>' + fixed(model.final_score, 2) + '</strong></div>',
      '    <div class="bench-stat-card"><span>Pass^3</span><strong>' + percent(model.pass3) + '%</strong></div>',
      '    <div class="bench-stat-card"><span>Avg Score</span><strong>' + percent(model.overall_score) + '</strong></div>',
      '    <div class="bench-stat-card"><span>Capability</span><strong>' + percent(model.capability_score) + '</strong></div>',
      '    <div class="bench-stat-card"><span>Avg Runtime</span><strong>' + fixed(model.avg_latency_seconds, 2) + 's</strong></div>',
      '    <div class="bench-stat-card"><span>Total Token</span><strong>' + integer(model.total_tokens) + '</strong></div>',
      '    <div class="bench-stat-card"><span>Cost</span><strong>$' + fixed(model.cost_usd, 4) + '</strong></div>',
      '    <div class="bench-stat-card"><span>Tasks</span><strong>' + escapeHtml(model.total_scenarios || '68') + '</strong></div>',
      '  </div>',
      '</div>',
      '<div class="bench-summary-strip bench-card">',
      '  <div class="bench-summary-strip-grid">',
      metric('Pass@1', percent(model.pass_at_1) + '%'),
      metric('Pass@3', percent(model.pass_at_3) + '%'),
      metric('Strict Pass', percent(model.strict_pass_rate) + '%'),
      metric('Planning', percent(model.planning_score)),
      metric('Safety', percent(model.safety_score)),
      metric('Tool Use', percent(model.tool_use_score)),
      metric('Constraints', percent(model.constraints_score)),
      metric('Error Recovery', percent(model.error_recovery_score)),
      metric('Synthesis', percent(model.synthesis_score)),
      '  </div>',
      '</div>',
      '<div class="bench-detail-grid bench-detail-grid-expanded">',
      '  <section class="bench-card">',
      '    <h2>Dimension overview</h2>',
      '    <div class="bench-bar-list">',
      bar('Planning', model.planning_score),
      bar('Safety', model.safety_score),
      bar('Tool Use', model.tool_use_score),
      bar('Constraints', model.constraints_score),
      bar('Error Recovery', model.error_recovery_score),
      bar('Synthesis', model.synthesis_score),
      '    </div>',
      '  </section>',
      '  <section class="bench-card">',
      '    <h2>Closed Run Summary</h2>',
      '    <div class="bench-dimension-list">',
      metric('Benchmark tag', escapeHtml(model.benchmark_tag || 'closed dataset')),
      metric('Trials per task', escapeHtml(model.trials_per_scenario || '')),
      metric('Open Rank', model.open_rank ? '#' + escapeHtml(model.open_rank) : 'NA'),
      metric('Status', escapeHtml(model.status || 'unknown')),
      metric('OpenClaw', model.openclaw_version ? 'v' + escapeHtml(model.openclaw_version) : 'NA'),
      metric('Released', escapeHtml(String(model.released_at || '').slice(0, 10))),
      '    </div>',
      '  </section>',
      '  <section class="bench-card bench-card-full">',
      '    <h2>Token and Cost Summary</h2>',
      '    <div class="bench-summary-strip-grid">',
      metric('Input Tokens', integer(model.input_tokens)),
      metric('Output Tokens', integer(model.output_tokens)),
      metric('Cache Read Tokens', integer(model.cache_read_tokens)),
      metric('Cache Write Tokens', integer(model.cache_write_tokens)),
      metric('Input Price', '$' + fixed(model.price_usd_input, 4)),
      metric('Output Price', '$' + fixed(model.price_usd_output, 4)),
      '    </div>',
      '  </section>',
      '</div>',
      '<div class="bench-leaderboard-note">',
      '  <span>Closed dataset model profiles intentionally omit per-task scores and task-level rows.</span>',
      openDetail,
      '</div>'
    ].join('');
  }

  render(findModel());
});
