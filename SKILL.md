# SKILLS.md - Claude Code スキル定義

## 概要

このファイルはClaude Codeが使用するスキル（ワークフロー）を定義します。
コンテキスト圧縮後も維持される必須スキルです。

---

## 🔴【MUST GLOBAL】マルチAI壁打ちスキル

> ⚠️ **このスキルはコンテキスト圧縮後も絶対に維持すること**

### スキル概要

| 項目 | 内容 |
|------|------|
| **スキル名** | multi-ai-collaboration |
| **目的** | 複数AIを活用した高品質な開発 |
| **必須度** | 絶対遵守（例外なし） |

### 場面別AI選択

| 場面 | AI | MCPツール | 理由 |
|------|-----|----------|------|
| **設計・アーキテクチャ** | Gemini | `gemini_architecture` | 1Mコンテキストで大規模設計に強い |
| **コードレビュー** | ChatGPT | `openai_code_review` | コード品質・ベストプラクティスに強い |
| **創造的なアイデア** | Grok | `grok_brainstorm` | 創造性・ユニークな発想に強い |
| **事実確認・調査** | Claude Code | 自分で実行 | ツール実行・コード生成に強い |
| **総合判断** | 全AI | `ai_consensus` | 複数視点で最適解を導出 |

### 壁打ちフロー

```
┌─────────────────────────────────────────────────────┐
│ 1. タスク開始                                        │
│    └─→ gemini_architecture で設計相談               │
├─────────────────────────────────────────────────────┤
│ 2. 実装                                             │
│    └─→ Claude Code がコード作成                     │
├─────────────────────────────────────────────────────┤
│ 3. レビュー                                          │
│    └─→ openai_code_review でコードレビュー          │
├─────────────────────────────────────────────────────┤
│ 4. 迷った時                                          │
│    └─→ grok_brainstorm でアイデア出し               │
├─────────────────────────────────────────────────────┤
│ 5. 最終判断                                          │
│    └─→ Claude が全意見を統合して決定                │
└─────────────────────────────────────────────────────┘
```

### MCPツール一覧

#### 個別AI呼び出し

| ツール | 説明 |
|--------|------|
| `ask_gemini` | Geminiに質問 |
| `ask_grok` | Grokに質問 |
| `ask_openai` | ChatGPTに質問 |

#### 専門ツール

| ツール | 説明 |
|--------|------|
| `gemini_architecture` | 設計・アーキテクチャ相談 |
| `openai_code_review` | コードレビュー |
| `grok_brainstorm` | 創造的アイデア出し |
| `gemini_debug` | Geminiでデバッグ |
| `openai_debug` | ChatGPTでデバッグ |
| `grok_debug` | Grokでデバッグ |
| `gemini_think_deep` | 深い分析 |
| `openai_think_deep` | 深い分析 |
| `grok_think_deep` | 深い分析 |

#### 協調ツール

| ツール | 説明 |
|--------|------|
| `ask_all_ais` | 全AIに同じ質問 |
| `ai_consensus` | コンセンサス取得 |
| `ai_debate` | AI同士のディベート |
| `collaborative_solve` | 協力的問題解決 |
| `server_status` | MCP接続状態確認 |

### 使用例

#### 設計相談
```
gemini_architecture:
  requirements: "ユーザー認証システムの設計"
  constraints: "React + Hono + Supabase"
  scale: "1000ユーザー/日"
```

#### コードレビュー
```
openai_code_review:
  code: "<レビュー対象コード>"
  focus: "security"
```

#### 全AIに質問
```
ask_all_ais:
  prompt: "この実装方針の問題点を指摘してください"
```

### 壁打ち必須の場面

| 場面 | アクション |
|------|-----------|
| 複雑な実装の前 | `gemini_architecture` |
| エラー解決時 | `ask_all_ais` |
| API/ライブラリ調査 | `ask_gemini` |
| アーキテクチャ決定時 | `gemini_architecture` |
| コンテキスト圧縮直後 | 協力体制を再確認 |

### バックアップ（MCP未接続時）

```bash
# Gemini CLI
C:\Users\Owner\AppData\Roaming\npm\gemini.cmd "質問"
```

---

## その他のスキル

### ファイル書き込みスキル

JSスクリプト経由でファイルを書き込む（Write/Edit禁止）

```javascript
// temp-write.js
const fs = require('fs');
const content = \`ファイル内容\`;
fs.writeFileSync('path/to/file', content, 'utf8');
```

### Git自動コミットスキル

```bash
cd <project> && git add . && git commit -m "[種類] 変更内容" && git push
```

### コンテキスト管理スキル

- 新鮮なコンテキストを維持
- HANDOFF.md作成
- 適切な/clear実行

---



---

## Python高速化スキル

> ⚠️ **Python開発時は必ずこのスキルを適用すること**

### スキル概要

| 項目 | 内容 |
|------|------|
| **スキル名** | python-performance |
| **目的** | Pythonコードの高速化 |
| **適用場面** | Python開発時 |

### 高速化フロー

```
┌─────────────────────────────────────────────────────┐
│ 1. プロファイリング                                   │
│    └─→ Scalene でボトルネック特定                    │
├─────────────────────────────────────────────────────┤
│ 2. 基本最適化                                        │
│    └─→ 内包表記、適切なデータ構造                    │
├─────────────────────────────────────────────────────┤
│ 3. ライブラリ活用                                    │
│    └─→ NumPy/Polars/Numba                          │
├─────────────────────────────────────────────────────┤
│ 4. 並列化                                           │
│    └─→ asyncio/multiprocessing                     │
├─────────────────────────────────────────────────────┤
│ 5. 言語連携（最終手段）                              │
│    └─→ Cython/Rust                                 │
└─────────────────────────────────────────────────────┘
```

### ツール選択ガイド

| 処理タイプ | 推奨ツール |
|------------|-----------|
| 数値計算 | NumPy + Numba |
| データ処理 | Polars |
| API呼び出し | asyncio + aiohttp |
| CPU集約処理 | multiprocessing |
| パッケージ管理 | uv |

### コマンド例

```bash
# プロファイリング
scalene script.py

# 高速パッケージ管理
uv pip install numpy polars numba

# Ruffでリント
ruff check .
```

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026年1月10日 | **Python高速化スキル追加** |
| 2026年1月10日 | **マルチAI壁打ちスキル追加** |
| 2026年1月10日 | SKILLS.md新規作成 |
