#!/usr/bin/env python3
"""Add GPT-6.2 Astra/Sol and Gemini 4 Neon report scores."""
from pathlib import Path

import yaml

YML_PATH = Path(__file__).resolve().parents[1] / '_data/llm_leaderboard.yml'

with open(YML_PATH, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

rows = data['rows']

SRC = {
    'gpt62': (
        'GPT-6.2 Astra and Sol report',
        'https://openai.com/index/introducing-gpt-6-2-astra-sol/',
    ),
    'gemini4neon': (
        'Gemini 4 Neon report',
        'https://deepmind.google/models/evals-methodology/gemini-4-neon',
    ),
}

M = {
    'gpt62astra': ('OpenAI', 'GPT-6.2 Astra', 'Max reasoning effort', '2026-11-23'),
    'gpt62sol': ('OpenAI', 'GPT-6.2 Sol', 'Max reasoning effort', '2026-11-23'),
    'gpt6astra': ('OpenAI', 'GPT-6 Astra', 'Max reasoning effort', '2026-09-04'),
    'gpt61sol': ('OpenAI', 'GPT-6.1 Sol', '', '2026-09-29'),
    'gpt6sol': ('OpenAI', 'GPT-6 Sol', 'Max reasoning effort', '2026-09-22'),
    'gpt6luna': ('OpenAI', 'GPT-6 Luna', '', '2026-09-22'),
    'gpt56sol': ('OpenAI', 'GPT-5.6 Sol', '', '2026-07-11'),
    'gpt61terra': ('OpenAI', 'GPT-6.1 Terra', 'Max', '2026-10-26'),
    'neon': ('Google', 'Gemini 4 Neon', 'High', '2026-11-23'),
    'carbon': ('Google', 'Gemini 4 Carbon', 'High', '2026-10-28'),
    'hydrogen': ('Google', 'Gemini 4 Hydrogen', 'High', '2026-11-12'),
    'argon': ('Google', 'Gemini 4 Argon', 'High', '2026-09-30'),
    'opus55': ('Anthropic', 'Claude Opus 5.5', 'Max with fallback', '2026-09-22'),
    'sonnet55': ('Anthropic', 'Claude Sonnet 5.5', 'Max with fallback', '2026-09-28'),
    'fable52max': ('Anthropic', 'Claude Fable 5.2', 'Max', '2026-11-09'),
    'fable52high': ('Anthropic', 'Claude Fable 5.2', 'High', '2026-11-09'),
    'fable52': ('Anthropic', 'Claude Fable 5.2', 'xHigh', '2026-11-09'),
    'spark13': ('Meta', 'Muse Spark 1.3', 'Max', '2026-09-02'),
    'wonder': ('Meta', 'Muse Wonder', 'Max', '2026-10-12'),
}

NEW_KEYS = {
    'aa_intelligence_index_v5_0_1': ('General Agent', 'Artificial Analysis Intelligence Index v5.0.1'),
    'vals_science_index_v1': ('General Agent', 'Vals Science Index v1'),
    'lifeval': ('General Agent', 'LifeVal'),
    'gdpval_v2_internal': ('General Agent', 'GDPval v2 (Internal)'),
    'deepbinary_estimated_bounty': ('General Agent', 'DeepBinary (Estimated Bounty, USD)'),
    'secureswe': ('Coding Agent', 'SecureSWE'),
    'patchbench': ('Coding Agent', 'PatchBench'),
    'concealing_task_obstructions_with_developer_prompt': (
        'General Agent', 'Concealing Task Obstructions (With Developer Prompt, Lower Is Better)'),
    'concealing_task_obstructions_without_developer_prompt': (
        'General Agent', 'Concealing Task Obstructions (Without Developer Prompt, Lower Is Better)'),
    'workplace_improper_actions': ('General Agent', 'Workplace Improper Actions (Severe Harm Rate, Lower Is Better)'),
    'cursorbench_4_1': ('Coding Agent', 'CursorBench 4.1'),
    'terminal_bench_4_1_cheating_adjusted': (
        'Coding Agent', 'Terminal-Bench 4.1 (Cheating-Adjusted Accuracy)'),
    'swe_sweep_provider_harness': ('Coding Agent', 'SWE-sweep (Provider Harness)'),
    'swe_sweep_mini_swe_harness': ('Coding Agent', 'SWE-sweep (Mini-SWE Harness)'),
    'mka_climb_wsr': ('Multimodal', 'MKA (Climb WSR)'),
    'graphwalks_bfs_256k_1m_f1': ('Long Context', 'GraphWalks BFS (256k to 1M, F1)'),
    'cwe_bench_v2': ('General Agent', 'CWE-Bench v2'),
    'webexploitbench_v1_2': ('General Agent', 'WebExploitBench v1.2'),
    'autobaxbench': ('General Agent', 'AutoBaxBench'),
    'gray_swan_ipi_k15': ('General Agent', 'Gray Swan IPI (Attack Success Rate @ k=15, Lower Is Better)'),
}

REPORTS = []

REPORTS.append(('gpt62', [
    ('agents_last_exam', {
        'gpt62astra': '77.6', 'gpt6astra': '73.1', 'gpt62sol': '73.0',
        'gpt61sol': '72.5', 'carbon': '77.4', 'opus55': '71.6', 'fable52max': '72.8',
    }),
    ('terminal_bench_science_0_1', {
        'gpt62astra': '77.1', 'gpt6astra': '68.1', 'gpt62sol': '68.0',
        'gpt61sol': '57.0', 'opus55': '63.3', 'fable52max': '73.3',
    }),
    ('vals_science_index_v1', {
        'gpt62astra': '68.4', 'gpt6astra': '65.1', 'gpt62sol': '57.8',
        'gpt61sol': '59.6', 'opus55': '58.7', 'fable52high': '63.7',
    }),
    ('aa_intelligence_index_v5_0_1', {
        'gpt62astra': '62.1', 'gpt6astra': '56.9', 'gpt62sol': '57.3',
        'gpt61sol': '54.6', 'carbon': '60.0', 'opus55': '59.1', 'fable52max': '64.6',
    }),
    ('frontiercode_2_0', {
        'gpt62astra': '44.2', 'gpt6astra': '42.8', 'gpt62sol': '43.8',
        'gpt61sol': '39.0', 'carbon': '38.4', 'opus55': '45.5', 'fable52max': '45.6',
    }),
    ('lifeval', {
        'gpt62astra': '86.1', 'gpt6astra': '79.8', 'gpt62sol': '83.8', 'gpt61sol': '79.5',
    }),
    ('harvey_lab_aa', {
        'gpt62astra': '15.0', 'gpt6astra': '8.6', 'gpt62sol': '11.1',
        'gpt61sol': '6.9', 'opus55': '4.2', 'fable52max': '7.2',
    }),
    ('gdpval_v2_internal', {
        'gpt62astra': '50.4', 'gpt6astra': '44.2', 'gpt62sol': '46.9',
        'gpt61sol': '41.5', 'carbon': '48.8', 'opus55': '43.5', 'fable52max': '44.8',
    }),
    ('deepbinary_estimated_bounty', {
        'gpt62astra': '1038250', 'gpt6astra': '438000',
        'gpt62sol': '687250', 'gpt61sol': '317500',
    }),
    ('exploit_bench_june_aug_2026', {
        'gpt62astra': '53.5', 'gpt6astra': '31.5', 'gpt62sol': '50.5', 'gpt61sol': '21.5',
    }),
    ('secureswe', {
        'gpt62astra': '65.7', 'gpt6astra': '46.5', 'gpt62sol': '55.6', 'gpt61sol': '49.7',
    }),
    ('patchbench', {
        'gpt62astra': '79.7', 'gpt6astra': '70.9', 'gpt62sol': '75.6', 'gpt61sol': '71.0',
    }),
    ('benchcad', {
        'gpt62astra': '82.5', 'gpt6astra': '62.6', 'gpt62sol': '73.1',
        'gpt61sol': '52.6', 'opus55': '65.3', 'fable52max': '83.5',
    }),
    ('automation_bench', {
        'gpt62astra': '52.4', 'gpt6astra': '41.4', 'gpt62sol': '41.1',
        'gpt61sol': '36.1', 'carbon': '53.9', 'opus55': '42.5', 'fable52max': '51.4',
    }),
    ('concealing_task_obstructions_with_developer_prompt', {
        'gpt62astra': '8.04', 'gpt62sol': '8.88',
    }),
    ('concealing_task_obstructions_without_developer_prompt', {
        'gpt62astra': '22.28', 'gpt62sol': '24.08', 'gpt61sol': '14.00',
        'gpt61terra': '8.47', 'gpt6astra': '11.09',
    }),
    ('workplace_improper_actions', {
        'gpt62astra': '0.64', 'gpt62sol': '0.71', 'gpt61sol': '1.32',
        'gpt61terra': '2.28', 'gpt6astra': '1.20', 'gpt6sol': '5.36', 'gpt56sol': '11.65',
    }),
]))

REPORTS.append(('gemini4neon', [
    ('aa_intelligence_index_v5_0_1', {'neon': '61', 'opus55': '59', 'gpt62sol': '57'}),
    ('vals_index', {'neon': '70.9', 'opus55': '70.1', 'gpt62sol': '66.1'}),
    ('cursorbench_4_1', {'neon': '65.4', 'opus55': '58.1'}),
    ('terminal_bench_4_1_cheating_adjusted', {
        'neon': '65.2', 'opus55': '65.8', 'gpt62sol': '61.5',
    }),
    ('frontiercode_2_0', {'neon': '46.2', 'opus55': '47.3', 'gpt62sol': '43.8'}),
    ('swe_sweep_provider_harness', {'neon': '39.0', 'opus55': '10.1', 'gpt62sol': '8.3'}),
    ('swe_sweep_mini_swe_harness', {'neon': '12.8', 'opus55': '3.6', 'gpt62sol': '11.6'}),
    ('automation_bench', {'neon': '56.3', 'opus55': '42.5', 'gpt62sol': '41.3'}),
    ('agents_last_exam', {'neon': '75.8', 'opus55': '71.6', 'gpt62sol': '73.0'}),
    ('riemannbench', {'neon': '84.0', 'opus55': '80.0', 'gpt62sol': '80.0'}),
    ('terminal_bench_science_0_1', {'neon': '70.5', 'opus55': '63.3', 'gpt62sol': '68.0'}),
    ('hle_diamond', {'neon': '71.3', 'opus55': '67.9', 'gpt62sol': '64.0'}),
    ('mka_climb_wsr', {'neon': '56.5', 'opus55': '53.0', 'gpt62sol': '52.7'}),
    ('chartography', {'neon': '73.5', 'opus55': '66.3', 'gpt62sol': '75.1'}),
    ('lvbench', {'neon': '89.0', 'opus55': '83.7', 'gpt62sol': '87.6'}),
    ('graphwalks_bfs_256k_1m_f1', {'neon': '95.2', 'opus55': '66.8', 'gpt62sol': '80.1'}),
    ('cwe_bench_v2', {'neon': '70.7', 'opus55': '67.1', 'gpt62sol': '66.0'}),
    ('sec_bench_pro', {'neon': '90.5', 'gpt62sol': '88.3'}),
    ('webexploitbench_v1_2', {'neon': '51.3', 'opus55': '37.1'}),
    ('autobaxbench', {
        'neon': '76.0', 'carbon': '74.0', 'fable52': '68.0',
        'opus55': '68.0', 'gpt6astra': '57.0', 'wonder': '49.0',
    }),
    ('gray_swan_ipi_k15', {
        'neon': '0.0', 'carbon': '0.0', 'hydrogen': '0.0', 'argon': '0.7',
        'opus55': '1.0', 'gpt62sol': '2.3', 'gpt62astra': '2.4',
        'sonnet55': '3.4', 'fable52': '4.1', 'spark13': '6.8',
        'gpt61terra': '7.3', 'gpt6luna': '28.7',
    }),
]))


def get_row(key):
    company, model, mode, released = M[key]
    for row in rows:
        if (row.get('company') == company and row.get('model') == model
                and (row.get('mode') or '') == mode):
            return row, False
    row = {
        'company': company,
        'model': model,
        'mode': mode,
        'released': released,
        'sources': [],
        'scores': {},
    }
    rows.append(row)
    return row, True


def add_source(row, label, url):
    if any(s.get('label') == label and s.get('url') == url for s in row.get('sources', [])):
        return False
    row.setdefault('sources', []).append({'label': label, 'url': url})
    return True


def add_score(row, key, value, label, url):
    entries = row.setdefault('scores', {}).setdefault(key, [])
    if any(e.get('value') == str(value) and e.get('source_label') == label for e in entries):
        return False
    entries.append({'value': str(value), 'source_label': label, 'source_url': url})
    return True


def main():
    collections_before = yaml.safe_dump(data['collections'], sort_keys=False)
    cats = {c['name']: c for c in data['categories']}
    registered_keys = {
        col['key'] for c in data['categories'] for col in c.get('columns', [])
    }
    added_keys = []
    for key, (cat_name, label) in NEW_KEYS.items():
        if key not in registered_keys:
            cats[cat_name].setdefault('columns', []).append({'key': key, 'label': label})
            added_keys.append(key)

    added_sources = []
    for sid, (label, url) in SRC.items():
        if not any(s.get('id') == sid for s in data['sources']):
            data['sources'].append({
                'id': sid, 'label': label, 'short_label': label, 'url': url,
            })
            added_sources.append(sid)

    created = set()
    scores_added = 0
    duplicates = 0
    row_sources_added = 0
    for src_key, benches in REPORTS:
        label, url = SRC[src_key]
        for bench, values in benches:
            for model_key, value in values.items():
                row, was_created = get_row(model_key)
                if was_created:
                    created.add(f"{row['model']} ({row['mode']})")
                if add_source(row, label, url):
                    row_sources_added += 1
                if add_score(row, bench, value, label, url):
                    scores_added += 1
                else:
                    duplicates += 1

    assert yaml.safe_dump(data['collections'], sort_keys=False) == collections_before
    with open(YML_PATH, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, default_flow_style=False, allow_unicode=True,
                  sort_keys=False, width=1000)

    print('new benchmark keys:', len(added_keys), added_keys)
    print('new sources:', len(added_sources), added_sources)
    print('new rows:', len(created), sorted(created))
    print('scores added:', scores_added, 'duplicates skipped:', duplicates)
    print('row sources added:', row_sources_added)
    print('rows now:', len(rows))


if __name__ == '__main__':
    main()
