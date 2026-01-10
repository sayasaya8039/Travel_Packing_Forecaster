---
paths: "**/*"
---

# 【MUST GLOBAL - 絶対遵守】マルチAI壁打ちルール

> ⚠️ **このルールはコンテキスト圧縮後も絶対に維持すること**
> ⚠️ **開発が進んでも、タスクが複雑でも、マルチAI協力を中断しないこと**

## 🔴 絶対ルール（例外なし）

| ルール | 内容 |
|--------|------|
| **協力体制維持** | コンテキスト圧縮後もマルチAI協力を継続 |
| **壁打ち必須** | 新タスク・複雑な実装・エラー時は必ず他AIに相談 |
| **中断禁止** | 開発が進んでもマルチAI活用をやめない |

## 場面別AI選択（必須）

| 場面 | AI | MCPツール |
|------|-----|----------|
| **設計・アーキテクチャ** | Gemini | `gemini_architecture` |
| **コードレビュー** | ChatGPT | `openai_code_review` |
| **創造的なアイデア** | Grok | `grok_brainstorm` |
| **事実確認・調査** | Claude Code | 自分で実行 |
| **総合判断** | 全AI | `ai_consensus` / `ask_all_ais` |

## 壁打ちフロー（必須）

```
1. 実装方針 → gemini_architecture で相談
2. コード作成後 → openai_code_review でレビュー
3. 迷ったら → grok_brainstorm でアイデア出し
4. 最終判断 → Claude が行う
```

## 壁打ちが必須の場面（スキップ禁止）

1. **複雑な実装の前** → `gemini_architecture`
2. **エラー解決時** → `ask_all_ais` で全AIに聞く
3. **外部API・ライブラリの調査** → `ask_gemini`
4. **アーキテクチャ決定時** → `gemini_architecture`
5. **コンテキスト圧縮直後** → **協力体制を再確認**

## MCPツール一覧

| ツール | 用途 |
|--------|------|
| `ask_gemini` | Geminiに質問 |
| `ask_grok` | Grokに質問 |
| `ask_openai` | ChatGPTに質問 |
| `gemini_architecture` | 設計・アーキテクチャ |
| `openai_code_review` | コードレビュー |
| `grok_brainstorm` | 創造的アイデア |
| `gemini_debug` / `openai_debug` / `grok_debug` | デバッグ支援 |
| `ask_all_ais` | 全AIに同じ質問 |
| `ai_consensus` | コンセンサス取得 |
| `ai_debate` | AI同士のディベート |
| `collaborative_solve` | 協力的問題解決 |

## Gemini CLI（バックアップ）

MCP未接続時のフォールバック：
```bash
C:\Users\Owner\AppData\Roaming\npm\gemini.cmd "質問"
```

## コンテキスト圧縮後のチェックリスト

圧縮後、必ず確認：

- [ ] マルチAI協力体制を維持しているか
- [ ] 壁打ちルールを覚えているか
- [ ] MCPツールが使えるか確認したか
- [ ] 次のタスクで適切なAIに相談するか
