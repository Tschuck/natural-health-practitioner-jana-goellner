# Natural Health Practitioner Jana Göllner

A modern, responsive website for Jana Göllner's natural health practice, specializing in hormone balance and psychosomatic care.

## About

This project is a full-stack web application for a German natural health practice (Naturheilpraxis) offering:

- Hormone balance therapy
- Traditional Chinese Medicine (TCM) & Acupuncture
- Phytotherapy & Adaptogens
- Nutritional counseling
- Psychosomatic care
- And various other holistic treatments

## 🏗️ Project Structure

This is a monorepo containing:

```
natural-health-practitioner-jana-goellner/
├── apps/
│   ├── homepage/          # Frontend application (React + Vike)
│   └── backend/           # Backend API (NestJS)
├── scripts/               # Deployment and utility scripts
└── package.json           # Root workspace configuration
```

## Tech Stack

### Frontend (`apps/homepage`)

- **Framework**: [React 19](https://react.dev/) with [Vike](https://vike.dev/) (SSR framework)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization**: [LinguiJS](https://lingui.dev/) for German language support
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

### Backend (`apps/backend`)

- **Framework**: [NestJS](https://nestjs.com/)
- **Server**: [Fastify](https://fastify.dev/)
- **Validation**: [class-validator](https://github.com/typestack/class-validator)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **API Documentation**: Swagger/OpenAPI
- **Health Checks**: NestJS Terminus
- **Rate Limiting**: NestJS Throttler

### DevOps & Tooling

- **Package Manager**: [pnpm](https://pnpm.io/)
- **Process Manager**: [PM2](https://pm2.keymetrics.io/)
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky with lint-staged
- **Commit Convention**: Conventional Commits with Commitizen

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.12.4 or higher)

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# Setup git hooks
pnpm prepare
```

## 💻 Development

```bash
# Run both frontend and backend in development mode
pnpm dev

# Run only frontend
cd apps/homepage && pnpm dev

# Run only backend
cd apps/backend && pnpm start
```

The development servers will start:

- Frontend: typically on `http://localhost:5173`
- Backend API: check backend configuration

## 🏗️ Building for Production

```bash
# Build both applications
pnpm build

# Build only frontend
cd apps/homepage && pnpm build

# Build only backend
cd apps/backend && pnpm build
```

The frontend build copies its output to the backend's `dist/homepage` directory, allowing the backend to serve the static files.

## Deployment

```bash
# Prepare for deployment (runs build script)
pnpm prepare:deploy

# Start production server with PM2
pnpm start
```

PM2 will manage the application process using the configuration in `ecosystem.config.cjs`.

## Internationalization

The application uses LinguiJS for internationalization:

```bash
# Extract translatable strings
cd apps/homepage && pnpm lingui:extract
```

Translation files are located in the homepage's locale directory.

## Code Quality

```bash
# Run linter
pnpm lint

# Format code (configured with Prettier)
cd apps/backend && pnpm format
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Use Commitizen for guided commits
git add .
git commit
# Follow the interactive prompts
```

Commit types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

## 📦 Project Scripts

### Root Level

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all applications
- `pnpm lint` - Run ESLint on all packages
- `pnpm start` - Start production server with PM2
- `pnpm prepare:deploy` - Prepare deployment build

### Frontend (`apps/homepage`)

- `pnpm dev` - Start Vike development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lingui:extract` - Extract translatable strings

### Backend (`apps/backend`)

- `pnpm start` - Build and start server
- `pnpm start:prod` - Start production server
- `pnpm start:debug` - Start with debugging enabled
- `pnpm test` - Run tests with Vitest

## Features

- ✅ Server-Side Rendering (SSR) with Vike
- ✅ Fully responsive design (mobile-first)
- ✅ Multi-language support (German)
- ✅ Contact form with email integration
- ✅ Treatment information pages
- ✅ Patient testimonials
- ✅ About page with practice philosophy
- ✅ Modern component-based architecture
- ✅ SEO optimized
- ✅ Performance optimized with React 19
- ✅ Type-safe with TypeScript

## License

This project is private and unlicensed.

## Author

Built for Jana Göllner's Natural Health Practice

---

For questions or support, please contact the development team.
