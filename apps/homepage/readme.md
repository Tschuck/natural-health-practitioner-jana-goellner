# Homepage - Heilpraktikrein Jana Goellner

Homepage for a midwife and Alternative practitioner from germany, thuringia. Visit the deployed homepage here:

- [https://heilpraktikerin-jana-goellner.de](https://heilpraktikerin-jana-goellner.de/)

## React + TypeScript + Vite + Vike

Generated with [vike.dev/new](https://vike.dev/new) ([version 566](https://www.npmjs.com/package/create-vike/v/0.0.566)).

## How to start

1. Clone the project

   ```bash
   git clone git@github.com:Tschuck/natural-health-practitioner-jana-goellner.git
   ```

2. Install

   ```bash
   cd ./natural-health-practitioner-jana-goellner
   pnpm install
   ```

3. Start the application

   ```bash
   cd apps/homepage && pnpm run dev
   cd apps/backend && pnpm run start
   ```

4. Build the application

   ```bash
   pnpm run build
   ```

## Optimize images

```
sharp -i '*.jpg' -o ./optimized/ -f webp -q 80
```
