rm -rf .deploy
mkdir -p .deploy
mkdir -p .deploy/
pnpm build
cp -r ./apps/backend/dist .deploy
cp ./apps/backend/package.json .deploy
cp pnpm-lock.yaml .deploy
cd .deploy
