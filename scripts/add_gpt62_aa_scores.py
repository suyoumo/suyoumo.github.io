#!/usr/bin/env python3
"""Update Artificial Analysis scores from the GPT-6.2 Astra report captures."""
from pathlib import Path

import yaml

YML_PATH = Path(__file__).resolve().parents[1] / '_data/llm_leaderboard.yml'
SOURCE_LABEL = 'Artificial Analysis'
SOURCE_URL = 'https://artificialanalysis.ai'

DATA = {
    'aa_briefcase': '''
Claude Sonnet 5.5:1813
Claude Opus 5.5:1797
Claude Fable 5.2:1783
Gemini 4 Neon:1699
Kimi K3.1 Pro:1672
Claude Fable 5.1:1670
Claude Opus 5:1653
GPT-6.2 Astra:1643
GPT-6.2 Sol:1612
Gemini 4 Carbon:1611
GPT-6 Astra:1571
Claude Haiku 5.5:1571
DeepSeek-V4.1-Flash-1017:1570
Gemini 4 Hydrogen:1568
GPT-6.1 Sol:1556
Claude Fable 5:1536
Ling-3.1-Flash-1019:1516
MiMo-V2.6-Pro:1511
GLM-5.3:1499
Kimi K3:1497
MiMo-V2.6-Flash:1490
Gemini 4 Argon:1484
GPT-5.6 Sol:1478
GPT-6 Sol:1472
GLM-5.3-Flash:1448
Step 5 Preview:1421
GPT-6.1 Terra:1399
Claude Sonnet 5:1355
Ling-3.2-air:1339
GPT-5.6 Luna:1338
GPT-5.6 Terra:1335
DeepSeek-V4.1-Flash:1334
DeepSeek-V4-Pro-0813:1254
Claude Opus 4.7:1252
Gemini 3.8 Flash:1251
GPT-5.5:1205
Hunyuan 3:949
Qwen3.7-Max:918
Gemini 3.5 Flash:878
MiniMax-M2.7:722
Muse Spark 1.3:648
Qwen3.5-397B-A17B:565
Gemini 3.1 Pro:459
''',
    'aa_omniscience_accuracy': '''
Claude Fable 5.2:79
GPT-6.2 Astra:69
Claude Fable 5.1:68
Claude Opus 5.5:66
GPT-6.1 Sol:62
GPT-6.2 Sol:62
GPT-6 Astra:62
Claude Opus 5:61
Gemini 4 Neon:60
Gemini 4 Carbon:58
Claude Sonnet 5.5:51
GPT-6 Sol:51
Gemini 3.8 Flash:51
Gemini 4 Hydrogen:50
Kimi K3.1 Pro:49
Gemini 4 Argon:48
GPT-6.1 Terra:48
DeepSeek-V4-Pro-0813:45
GPT-5.6 Terra:42
GPT-6 Luna:40
DeepSeek-V4.1-Flash-1017:40
GPT-5.6 Luna:39
Step 5 Preview:36
MiMo-V2.6-Pro:35
Claude Haiku 5.5:35
GLM-5.3:32
GLM-5.3-Flash:28
MiMo-V2.6-Flash:27
Ling-3.1-Flash-1019:27
Ling-3.2-air:24
''',
    'aa_omniscience_non_hallucination': '''
Gemini 4 Argon:96
Gemini 4 Hydrogen:92
Gemini 4 Carbon:89
Gemini 4 Neon:86
Step 5 Preview:69
Claude Haiku 5.5:66
GPT-6.1 Terra:65
Ling-3.1-Flash-1019:64
Kimi K3.1 Pro:63
GLM-5.3-Flash:63
GLM-5.3:62
Claude Sonnet 5.5:61
Ling-3.2-air:51
GPT-6 Astra:50
Claude Opus 5.5:50
GPT-6.1 Sol:48
MiMo-V2.6-Flash:48
Gemini 3.8 Flash:48
GPT-6.2 Sol:45
GPT-6.2 Astra:41
Claude Fable 5.2:41
Claude Opus 5:41
MiMo-V2.6-Pro:40
GPT-6 Sol:39
DeepSeek-V4.1-Flash-1017:36
Claude Fable 5.1:30
GPT-6 Luna:21
GPT-5.6 Terra:11
GPT-5.6 Luna:8
DeepSeek-V4-Pro-0813:6
''',
    'automation_bench_aa': '''
Gemini 4 Neon:79
Gemini 4 Carbon:78
Gemini 4 Argon:78
GPT-6.2 Astra:77
Claude Fable 5.2:76
Gemini 4 Hydrogen:76
Kimi K3.1 Pro:73
Claude Sonnet 5.5:72
GPT-6.2 Sol:71
Claude Opus 5.5:70
GPT-6 Astra:68
Ling-3.1-Flash-1019:68
DeepSeek-V4.1-Flash-1017:67
GPT-6.1 Sol:65
MiMo-V2.6-Flash:64
GLM-5.3:62
GPT-6 Sol:62
Ling-3.2-air:61
GLM-5.3-Flash:60
GPT-6.1 Terra:60
GPT-5.6 Sol:60
Gemini 3.8 Flash:60
GPT-5.6 Terra:60
Claude Fable 5.1:59
MiMo-V2.6-Pro:59
Kimi K3:58
DeepSeek-V4-Pro-0813:57
Claude Opus 5:57
Claude Fable 5:54
DeepSeek-V4.1-Flash:54
GPT-6 Luna:53
Step 5 Preview:51
GPT-5.6 Luna:50
GPT-5.5:47
Gemini 3.5 Flash:42
Claude Sonnet 5:37
Gemini 3.1 Pro:35
Claude Haiku 5.5:35
Qwen3.7-Max:23
Hunyuan 3:18
Qwen3.5-397B-A17B:7
MiniMax-M2.7:4
''',
    'terminal_bench_science_0_1': '''
GPT-6.2 Astra:78
Claude Fable 5.2:73
Gemini 4 Neon:70
GPT-6.2 Sol:68
Gemini 4 Carbon:65
GPT-6 Astra:63
Claude Opus 5.5:59
GPT-6.1 Sol:58
GPT-6.1 Terra:58
Claude Sonnet 5.5:53
Gemini 4 Argon:53
Gemini 4 Hydrogen:50
Claude Fable 5.1:43
Kimi K3.1 Pro:34
GPT-6 Sol:30
Claude Opus 5:29
GPT-5.6 Sol:22
Claude Haiku 5.5:20
GPT-5.6 Terra:14
DeepSeek-V4.1-Flash-1017:13
Gemini 3.8 Flash:10
GLM-5.3:10
GPT-6 Luna:9
Kimi K3:8
MiMo-V2.6-Pro:6
DeepSeek-V4-Pro-0813:6
GLM-5.3-Flash:5
MiMo-V2.6-Flash:4
Ling-3.1-Flash-1019:4
Ling-3.2-air:4
GPT-5.6 Luna:3
Step 5 Preview:2
''',
    'frontiercode_2_0': '''
Claude Fable 5.2:49
Claude Opus 5.5:46
GPT-6.2 Astra:45
Gemini 4 Neon:44
GPT-6.2 Sol:44
GPT-6 Astra:42
GPT-6.1 Terra:42
Claude Sonnet 5.5:42
GPT-6.1 Sol:41
Gemini 4 Carbon:41
Gemini 4 Hydrogen:39
GPT-6 Sol:36
Claude Haiku 5.5:35
Claude Fable 5.1:32
Claude Opus 5:31
DeepSeek-V4.1-Flash-1017:28
Gemini 4 Argon:26
Kimi K3.1 Pro:25
GPT-6 Luna:25
MiMo-V2.6-Pro:24
GPT-5.6 Terra:24
MiMo-V2.6-Flash:22
GLM-5.3:22
Gemini 3.8 Flash:19
Claude Sonnet 5:18
GLM-5.3-Flash:18
GPT-5.6 Luna:18
DeepSeek-V4-Pro-0813:17
Ling-3.1-Flash-1019:17
Step 5 Preview:12
Ling-3.2-air:8
''',
    'hle_diamond': '''
Claude Fable 5.2:80
GPT-6.2 Astra:72
Gemini 4 Neon:71
Gemini 4 Carbon:69
Claude Opus 5.5:68
GPT-6.2 Sol:64
GPT-6 Astra:64
Claude Fable 5.1:60
GPT-6.1 Sol:59
Gemini 4 Hydrogen:59
Gemini 4 Argon:57
Claude Sonnet 5.5:53
GPT-6.1 Terra:47
GPT-6 Sol:45
Claude Opus 5:45
Kimi K3.1 Pro:37
Gemini 3.8 Flash:33
Gemini 3.1 Pro:31
Claude Haiku 5.5:30
GPT-5.6 Terra:29
Kimi K3:27
DeepSeek-V4.1-Flash-1017:25
Step 5 Preview:24
GPT-6 Luna:22
GPT-5.6 Luna:21
DeepSeek-V4-Pro-0813:20
GLM-5.3-Flash:18
GLM-5.3:18
Ling-3.1-Flash-1019:17
MiMo-V2.6-Pro:15
MiMo-V2.6-Flash:14
Qwen3.5-397B-A17B:12
Hunyuan 3:12
Ling-3.2-air:11
''',
    'gdp_pdf': '''
Kimi K3.1 Pro:31
GPT-6 Astra:31
GPT-6.1 Sol:31
GPT-6.2 Sol:30
GPT-6.2 Astra:30
GPT-6.1 Terra:29
Gemini 4 Carbon:28
Gemini 4 Neon:28
Gemini 4 Hydrogen:28
GPT-5.6 Sol:27
Claude Opus 5.5:26
Claude Fable 5.1:26
Claude Sonnet 5.5:26
GPT-6 Sol:25
Claude Fable 5.2:24
GPT-5.6 Luna:24
GPT-5.6 Terra:24
Claude Fable 5:24
GPT-6 Luna:23
Kimi K3:22
Gemini 4 Argon:22
Claude Opus 5:22
GPT-5.5:22
Gemini 3.8 Flash:21
Claude Haiku 5.5:21
Gemini 3.5 Flash:20
MiMo-V2.6-Pro:19
Gemini 3.1 Pro:18
DeepSeek-V4.1-Flash-1017:17
Ling-3.2-air:16
GLM-5.3-Flash:15
Step 5 Preview:15
Claude Sonnet 5:13
Ling-3.1-Flash-1019:13
Qwen3.5-397B-A17B:12
DeepSeek-V4-Pro-0813:11
Hunyuan 3:11
GLM-5.3:11
DeepSeek-V4.1-Flash:11
MiMo-V2.6-Flash:9
Qwen3.7-Max:9
MiniMax-M2.7:6
''',
    'terminal_bench_4_0_aa': '''
Kimi K3.1 Pro:67
Gemini 4 Carbon:65
GPT-6.2 Astra:64
Gemini 4 Neon:64
Claude Sonnet 5.5:64
GPT-6.2 Sol:60
Claude Opus 5.5:60
Claude Fable 5.2:60
GPT-6 Astra:59
Gemini 4 Argon:57
GPT-6.1 Sol:56
GPT-6.1 Terra:56
Gemini 4 Hydrogen:54
Claude Fable 5.1:52
Claude Opus 5:49
GPT-6 Sol:44
Claude Fable 5:42
GLM-5.3:42
GPT-5.6 Sol:40
GPT-5.6 Terra:35
MiMo-V2.6-Pro:35
DeepSeek-V4.1-Flash-1017:34
Step 5 Preview:33
GLM-5.3-Flash:33
Ling-3.1-Flash-1019:33
Claude Haiku 5.5:33
Ling-3.2-air:27
MiMo-V2.6-Flash:23
Gemini 3.8 Flash:20
GPT-5.5:15
Claude Sonnet 5:14
DeepSeek-V4-Pro-0813:13
GPT-6 Luna:13
Kimi K3:13
DeepSeek-V4.1-Flash:12
GPT-5.6 Luna:12
Gemini 3.5 Flash:7
Gemini 3.1 Pro:4
Qwen3.7-Max:2
Hunyuan 3:1
Qwen3.5-397B-A17B:0
MiniMax-M2.7:0
''',
    'critpt': '''
Claude Fable 5.2:77
GPT-6.2 Astra:72
GPT-6 Astra:71
GPT-6.1 Sol:70
Gemini 4 Carbon:69
Claude Opus 5.5:68
GPT-6.1 Terra:68
GPT-6 Sol:67
Gemini 4 Hydrogen:66
GPT-6.2 Sol:63
Gemini 4 Neon:61
GPT-5.6 Sol:60
Claude Sonnet 5.5:59
Claude Fable 5.1:53
Gemini 4 Argon:53
GPT-5.6 Terra:51
Claude Opus 5:50
Kimi K3.1 Pro:50
Gemini 3.8 Flash:47
Claude Haiku 5.5:44
GPT-6 Luna:43
Kimi K3:41
Ling-3.1-Flash-1019:39
MiMo-V2.6-Pro:34
GLM-5.3:34
Step 5 Preview:33
GPT-5.6 Luna:31
MiMo-V2.6-Flash:30
Ling-3.2-air:28
DeepSeek-V4.1-Flash-1017:25
GLM-5.3-Flash:25
DeepSeek-V4-Pro-0813:24
''',
    'aa_analyst_agent': '''
GPT-6.2 Astra:63
Claude Fable 5.1:57
Claude Sonnet 5.5:57
Claude Opus 5.5:56
Claude Haiku 5.5:54
GPT-6.2 Sol:54
Claude Opus 5:54
GPT-6 Astra:51
GPT-5.5:50
GPT-6.1 Sol:50
Claude Fable 5:49
Gemini 4 Argon:49
GPT-5.6 Sol:48
Claude Sonnet 5:46
Gemini 3.8 Flash:46
Gemini 3.5 Flash:45
GPT-6 Luna:44
Claude Opus 4.7:44
Gemini 3.1 Pro:41
Kimi K3.1 Pro:39
GLM-5.3:39
Kimi K3:39
MiMo-V2.6-Pro:38
Step 5 Preview:35
Ling-3.2-air:33
GLM-5.3-Flash:25
Qwen3.7-Max:19
MiniMax-M2.7:11
''',
    'harvey_lab_aa': '''
GPT-6.2 Astra:15
GPT-6.2 Sol:11
GPT-6 Astra:9
Claude Fable 5.2:7
GPT-6.1 Sol:7
Claude Fable 5.1:6
Kimi K3.1 Pro:5
Claude Opus 5.5:4
Gemini 4 Argon:4
GPT-6 Sol:4
GPT-6 Luna:3
Claude Sonnet 5.5:3
GLM-5.3-Flash:1
Ling-3.2-air:1
Claude Haiku 5.5:1
GLM-5.3:0
Gemini 3.8 Flash:0
Gemini 3.1 Pro:0
''',
    'enterpriseops_gym_aa': '''
Claude Fable 5:51
Gemini 3.5 Flash:50
DeepSeek-V4-Pro-0813:50
Claude Opus 5:47
Step 5 Preview:47
GPT-5.5:47
Kimi K3.1 Pro:45
Qwen3.7-Max:45
Claude Sonnet 5:45
GPT-5.6 Sol:43
Gemini 3.1 Pro:42
GPT-5.6 Luna:41
GPT-5.6 Terra:38
GLM-5.3:36
GLM-5.3-Flash:33
Qwen3.5-397B-A17B:31
GPT-6.2 Astra:30
Step 3.7 Flash:29
GPT-6.2 Sol:29
''',
    'gdpval_aa_v2': '''
Claude Opus 5.5:1866
Kimi K3.1 Pro:1856
Claude Sonnet 5.5:1838
Claude Fable 5.2:1830
Claude Fable 5.1:1767
DeepSeek-V4.1-Flash-1017:1746
Gemini 4 Carbon:1733
Claude Opus 5:1730
MiMo-V2.6-Pro:1691
Ling-3.1-Flash-1019:1658
GLM-5.3:1654
GLM-5.3-Flash:1649
Gemini 4 Argon:1634
Claude Haiku 5.5:1629
GPT-5.6 Sol:1619
Claude Fable 5:1618
MiMo-V2.6-Flash:1616
GPT-6.1 Sol:1607
Step 5 Preview:1591
GPT-6 Astra:1587
Kimi K3:1542
GPT-6 Sol:1514
GPT-6.1 Terra:1475
Claude Sonnet 5:1470
GPT-5.6 Luna:1470
GPT-5.6 Terra:1461
DeepSeek-V4-Pro-0813:1455
GPT-6 Luna:1443
Gemini 3.8 Flash:1443
DeepSeek-V4.1-Flash:1436
Claude Opus 4.7:1361
GPT-5.5:1357
Gemini 3.5 Flash:1211
Qwen3.7-Max:1134
Hunyuan 3:1069
MiniMax-M2.7:1016
Muse Spark 1.3:1006
Qwen3.6-Plus:997
Step 3.7 Flash:864
Qwen3.5-397B-A17B:800
Gemini 3.1 Pro:799
''',
    'aa_3d_pct': '''
GPT-6.2 Astra:1318
Claude Fable 5.2:1271
GPT-6.2 Sol:1259
Gemini 4 Neon:1246
Claude Sonnet 5.5:1204
Claude Opus 5.5:1202
Gemini 4 Carbon:1200
Gemini 4 Hydrogen:1196
GPT-6 Astra:1168
Gemini 4 Argon:1147
Claude Fable 5.1:1139
GPT-6 Sol:1131
GPT-6.1 Sol:1121
Kimi K3.1 Pro:1112
GPT-6 Luna:1000
Claude Haiku 5.5:998
Kimi K3:984
MiMo-V2.6-Pro:983
Gemini 3.8 Flash:974
GLM-5.3-Flash:937
Step 5 Preview:859
GLM-5.3:794
''',
    'code2video_aa': '''
Claude Opus 5.5:1536
Claude Sonnet 5.5:1443
GPT-6 Astra:1427
GPT-6.1 Sol:1369
Claude Fable 5.1:1325
Gemini 4 Argon:1259
Claude Haiku 5.5:1192
MiMo-V2.6-Flash:1052
MiMo-V2.6-Pro:1052
Kimi K3.1 Pro:1041
GLM-5.3:1034
GPT-6 Luna:1030
GPT-5.5:1000
GLM-5.3-Flash:975
Gemini 3.8 Flash:899
Step 5 Preview:821
''',
    'itbench_aa': '''
GPT-5.6 Sol:56
Step 5 Preview:56
Gemini 3.8 Flash:53
GLM-5.3-Flash:51
GPT-6.1 Terra:51
Claude Fable 5.1:50
GPT-6 Sol:49
GPT-6 Astra:49
Kimi K3.1 Pro:48
Claude Opus 4.7:47
GLM-5.3:46
GPT-5.5:46
Qwen3.7-Max:42
Gemini 3.5 Flash:40
GPT-5.6 Luna:40
Claude Opus 5.5:38
Qwen3.5-397B-A17B:34
Gemini 3.1 Pro:30
Step 3.7 Flash:30
MiniMax-M2.7:26
''',
    'mmmu_pro': '''
GPT-6.2 Astra:89
Claude Opus 5.5:88
GPT-6 Astra:87
GPT-6.1 Sol:86
Gemini 3.8 Flash:86
Claude Opus 5:85
GPT-6.1 Terra:85
Gemini 3.5 Flash:84
Kimi K3.1 Pro:84
GPT-5.6 Sol:83
GPT-6 Sol:83
Gemini 3.1 Pro:82
GPT-5.6 Terra:81
DeepSeek-V4.1-Flash-1017:81
Muse Spark 1.3:81
Kimi K3:81
GPT-5.5:80
GPT-6 Luna:80
Claude Opus 4.7:79
GPT-5.6 Luna:79
Qwen3.6-Plus:78
Qwen3.5-397B-A17B:77
Claude Sonnet 5:77
Step 5 Preview:76
GPT-5.2-Codex:76
Step 3.7 Flash:75
MiMo-V2.6-Flash:73
''',
    'mlcr_aa': '''
Claude Fable 5.2:44
GPT-6 Astra:42
Claude Sonnet 5.5:42
GPT-6.2 Astra:39
Kimi K3.1 Pro:38
GPT-6.1 Sol:38
GPT-6.2 Sol:37
Claude Haiku 5.5:35
GPT-6 Sol:34
Gemini 4 Neon:32
GPT-6.1 Terra:31
GPT-5.6 Sol:30
GPT-5.5:29
Claude Opus 5.5:28
GPT-5.6 Terra:27
DeepSeek-V4.1-Flash-1017:27
GPT-6 Luna:26
Kimi K3:22
Gemini 4 Hydrogen:21
Claude Fable 5:21
GPT-5.6 Luna:20
Gemini 4 Carbon:19
Step 5 Preview:18
GLM-5.3:17
Claude Fable 5.1:16
Ling-3.1-Flash-1019:15
Qwen3.7-Max:14
Gemini 4 Argon:14
MiMo-V2.6-Pro:13
MiMo-V2.6-Flash:12
GLM-5.3-Flash:11
Gemini 3.1 Pro:11
Gemini 3.8 Flash:11
Gemini 3.5 Flash:10
Qwen3.5-397B-A17B:9
MiniMax-M2.7:6
Claude Sonnet 5:5
''',
    'healthbench': '''
GPT-6.1 Sol:59
GPT-6 Astra:58
GPT-6.2 Sol:54
GPT-6.2 Astra:54
''',
    'vals_index': '''
GPT-6.2 Astra:66
GPT-6 Astra:63
GPT-6.2 Sol:63
GPT-6.1 Sol:59
''',
    'mka_climb_wsr': '''
GPT-6.2 Astra:53
GPT-6 Astra:50
GPT-6.1 Sol:48
''',
    'aa_lcr_v1_1': '''
GPT-6.1 Sol:83
GPT-6 Astra:81
''',
    'hle': '''
GPT-6 Astra:55
GPT-6.1 Sol:53
''',
    'frontiercode_main': '''
GPT-6.1 Sol:49
GPT-6 Astra:47
''',
    'gpqa': '''
GPT-6 Astra:96
''',
    'tau3_banking': '''
GPT-6 Astra:41
''',
    'terminal_bench_2_1_aa': '''
GPT-6 Astra:88
''',
}

MODES = {
    'Claude Fable 5.2': 'Max',
    'Claude Fable 5.1': 'Max with fallback',
    'Claude Opus 5.5': 'Max with fallback',
    'Claude Sonnet 5.5': 'Max with fallback',
    'GPT-5.5': 'xHigh',
    'GPT-6 Luna': '',
    'Muse Spark 1.3': 'Max',
}

NEW_MODELS = {
    'Ling-3.2-air': ('InclusionAI', '2026-11-24'),
}

COLLECTION_KEYS = {
    'overall': ['healthbench', 'vals_index', 'mka_climb_wsr'],
    'general': ['healthbench', 'vals_index', 'mka_climb_wsr'],
}


def main():
    data = yaml.safe_load(YML_PATH.read_text(encoding='utf-8'))
    for collection, keys in COLLECTION_KEYS.items():
        collection_keys = data['collections'][collection]['keys']
        for key in keys:
            if key not in collection_keys:
                collection_keys.append(key)
    rows = data['rows']
    by_model = {}
    for row in rows:
        by_model.setdefault(row['model'], []).append(row)

    missing = sorted({model for text in DATA.values() for line in text.strip().splitlines()
                      for model in [line.rsplit(':', 1)[0]] if model not in by_model})
    for model in missing:
        if model not in NEW_MODELS:
            raise RuntimeError(f'Missing model row: {model}')
        company, released = NEW_MODELS[model]
        row = {'company': company, 'model': model, 'mode': '', 'released': released,
               'sources': [], 'scores': {}}
        rows.append(row)
        by_model[model] = [row]

    changed = 0
    unchanged = 0
    for bench, text in DATA.items():
        for line in text.strip().splitlines():
            model, value = line.rsplit(':', 1)
            candidates = by_model[model]
            if model in MODES:
                candidates = [r for r in candidates if (r.get('mode') or '') == MODES[model]]
            if not candidates:
                raise RuntimeError(f'Missing mode for {model}: {MODES[model]}')
            row = max(candidates, key=lambda r: len(r.get('scores', {})))
            if not any(s.get('label') == SOURCE_LABEL and s.get('url') == SOURCE_URL
                       for s in row.setdefault('sources', [])):
                row['sources'].append({'label': SOURCE_LABEL, 'url': SOURCE_URL})
            entry = {'value': value, 'source_label': SOURCE_LABEL, 'source_url': SOURCE_URL}
            entries = row.setdefault('scores', {}).setdefault(bench, [])
            if entries == [entry]:
                unchanged += 1
                continue
            entries[:] = [entry]
            changed += 1

    YML_PATH.write_text(yaml.dump(data, default_flow_style=False, allow_unicode=True,
                                  sort_keys=False, width=1000), encoding='utf-8')
    print('scores replaced:', changed, 'unchanged:', unchanged)


if __name__ == '__main__':
    main()
