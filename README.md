https://qiita.com/hayaharu3220/items/902faf27a941807d888b

## プロジェクトの作成
```shell
npx create-next-app@latest --typescript
```

## vercelへのデプロイ

## supabaseの導入
```shell
npm install @supabase/supabase-js
```

## .env.local作成

## vercelのsettings>Environment Variablesで環境変数を設定する
https://zenn.dev/umyomyomyon/scraps/dbcb906e75c96b

## prismaの導入
https://gini.co.jp/blog/build-supabase-prisma-environment/

```shell
npm install prisma --save-dev
```

```shell
npm install @prisma/client
```

```shell
npx prisma init
```

## schema.prismaの設定

## マイグレーション
```shell
npx prisma migrate dev --name init
```

## Auth Helpersの導入
```shell
npm i @supabase/auth-helpers-nextjs @supabase/supabase-js
```

## prisma更新
```shell
npx prisma migrate dev --name 更新タイトル
```

## package.jsonの修正
```json
    "build": "prisma generate && prisma db push && next build",
```

## CORSの対応 next.config.jsの修正
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // 全ての API routes にマッチ
    async headers() {
      return [
        {
          // 対象APIのパスパターン
          // 今回は src/app/api/ 配下にAPIを作っているので下記のようにする
          source: "/api/:path*",
          headers: [
            {
              // CORSを許可するオリジン
              key: "Access-Control-Allow-Origin",
              // すべてのオリジンを許可するなら * (アスタリスク)
              // ただセキュリティ的にはよろしくないので注意
              value: "https://sample-prisma-next-app.vercel.app",
            },
            {
              // 許可するメソッド
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,POST",
            },
            {
              // 許可するリクエストヘッダ
              key: "Access-Control-Allow-Headers",
              value: "Content-Type",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
```

## prismaようにlib/prisma.ts作成

## api/user/route.ts作成

## app/user/各種.tsx作成

## APIに投げるURLは直書きする

## APIのURLとvercelのURLは同じにする(settingsのdomainに合わせたほうがいい)