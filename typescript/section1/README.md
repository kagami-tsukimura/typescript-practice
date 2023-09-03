# TypeScript

## 準備

1. 初期化

   `package.json`の生成。

   ```bash
   npm init -y
   ```

1. typescript のインストール

   node_modules と package.json に依存関係が生成される。

   ```bash
   npm install typescript --save-dev
   ```

1. バージョン確認

   ```bash
   tsc -v
   ```

1. tsconfig.json の雛形作成

   ```bash
   tsc -init
   ```

   雛形は microsoft 提供のものもある。
   [GitHub](https://github.com/microsoft/TypeScript-Node-Starter/blob/master/tsconfig.json)から取得。

1. 開発用のディレクトリ作成

   `tsconfig.json`の include で指定されたディレクトリを作成する。

   ```json: tsconfig.json
   "include": ["src/**/*"]
   ```

   ```bash
   mkdir src
   ```

1. コンパイル用のディレクトリ作成

   `tsconfig.json`の outDir で指定されたディレクトリを作成する。

   ```json: tsconfig.json
   "outDir": "dist"
   ```

   ```bash
   mkdir dist
   ```

1. tsconfig に除外対象を追加

   ```json: tsconfig.json
   "exclude": ["node_modules", "dist"]
   ```

1. package.json にトランスパイル追加

   ```json: package.json
   "scripts": {
      "build": "tsc",
      "watch": "tsc --watch",
   },
   ```

1. html ファイル生成

   ```bash
   touch dist/index.html
   ```

## 実行-パターン 1

1. 実行ファイル生成

   ```bash
   touch src/app.ts
   ```

1. トランスパイル

   ```bash
   npm run build
   ```

1. 監視モードで実行

   ```bash
   npm run watch
   ```

1. ファイル実行

   ```bash
   node dist/app.ts
   ```

## 実行-パターン 2

1. 実行ファイル生成

   ```bash
   touch src/app.ts
   ```

1. ファイル実行

   ```bash
   ts-node src/app.ts
   ```
