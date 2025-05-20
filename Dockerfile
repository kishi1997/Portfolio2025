# ビルドステージ
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# 静的エクスポート
RUN npm run build

# ホスティングステージ
FROM node:18-alpine

# serveパッケージをインストール（軽量サーバー）
RUN npm install -g serve

WORKDIR /app

# 静的ファイルをコピー（`out` が生成されたフォルダ）
COPY --from=builder /app/out .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]