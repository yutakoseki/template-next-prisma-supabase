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