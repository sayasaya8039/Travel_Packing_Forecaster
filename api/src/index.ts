import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = new Hono();

// CORS設定
app.use('/*', cors({
  origin: [
    'https://sayasaya8039.github.io',
    'http://localhost:5173',
    'http://localhost:4173',
  ],
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'X-API-Key'],
}));

// ヘルスチェック
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ルートエンドポイント
app.get('/', (c) => {
  return c.json({
    name: 'Travel Packing API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      suggest: 'POST /api/suggest',
    },
  });
});

// パッキング提案リクエストの型
interface SuggestRequest {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: 'business' | 'leisure' | 'adventure' | 'date' | 'camping';
  weather: {
    avgTempMax: number;
    avgTempMin: number;
    hasRain: boolean;
    humidity: number;
  };
  country?: {
    name: string;
    plugTypes: string[];
    voltage: number;
    culturalNotes: string[];
  };
}

// Gemini APIでパッキング提案を生成
app.post('/api/suggest', async (c) => {
  try {
    // ユーザーが提供するAPIキーをヘッダーから取得
    const apiKey = c.req.header('X-API-Key');
    if (!apiKey) {
      return c.json({ error: 'API key is required. Please provide your Gemini API key.' }, 401);
    }

    const body = await c.req.json<SuggestRequest>();
    const { destination, startDate, endDate, purpose, weather, country } = body;

    // 入力検証
    if (!destination || !startDate || !endDate || !purpose || !weather) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Gemini APIクライアント初期化
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // プロンプト構築
    const purposeLabels: Record<string, string> = {
      business: '出張',
      leisure: '観光',
      adventure: 'アウトドア・アクティブ',
      date: 'デート',
      camping: 'キャンプ',
    };

    const prompt = `あなたは旅行パッキングの専門家です。以下の旅行情報に基づいて、パッキングリストの追加提案を日本語で行ってください。

## 旅行情報
- 行き先: ${destination}
- 日程: ${startDate} 〜 ${endDate}
- 目的: ${purposeLabels[purpose] || purpose}
- 天気予報:
  - 最高気温平均: ${weather.avgTempMax}°C
  - 最低気温平均: ${weather.avgTempMin}°C
  - 降水あり: ${weather.hasRain ? 'はい' : 'いいえ'}
  - 湿度: ${weather.humidity}%
${country ? `- 国情報:
  - 国名: ${country.name}
  - コンセント: ${country.plugTypes.join(', ')}タイプ
  - 電圧: ${country.voltage}V
  - 文化的注意点: ${country.culturalNotes.join(', ')}` : ''}

## 指示
1. この旅行で「忘れがちだけど持っていくべきもの」を5〜10個提案してください
2. 各アイテムには簡潔な理由を添えてください
3. 現地の文化や習慣に関連するものがあれば優先的に提案してください
4. 回答はJSON形式で、以下の構造で返してください:

\`\`\`json
{
  "items": [
    {
      "name": "アイテム名",
      "reason": "理由（20文字以内）",
      "category": "clothing|accessories|toiletries|electronics|documents|cultural|safety|other",
      "priority": "high|medium|low"
    }
  ],
  "tips": ["現地での役立つヒント1", "ヒント2"]
}
\`\`\`

JSONのみを返してください。説明は不要です。`;

    // Gemini API呼び出し
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // JSON抽出
    const jsonMatch = text.match(/\`\`\`json\n?([\s\S]*?)\n?\`\`\`/);
    let parsedResponse;

    if (jsonMatch) {
      try {
        parsedResponse = JSON.parse(jsonMatch[1]);
      } catch {
        // JSONパースエラーの場合、テキストから直接パース試行
        const directJson = text.match(/\{[\s\S]*\}/);
        if (directJson) {
          parsedResponse = JSON.parse(directJson[0]);
        } else {
          throw new Error('Failed to parse response');
        }
      }
    } else {
      // コードブロックなしの場合
      const directJson = text.match(/\{[\s\S]*\}/);
      if (directJson) {
        parsedResponse = JSON.parse(directJson[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    }

    return c.json({
      success: true,
      data: parsedResponse,
      destination,
      purpose,
    });

  } catch (error) {
    console.error('Suggest error:', error);
    return c.json({
      error: error instanceof Error ? error.message : 'Internal server error',
    }, 500);
  }
});

// 404ハンドラー
app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

// エラーハンドラー
app.onError((err, c) => {
  console.error('App error:', err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

export default app;
