# Cloud Hack Web

Frontend para hackathon de Cloud Computing construido con **React + Vite + TypeScript + Tailwind CSS v4**.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS v4
- React Router DOM v7
- Axios

## Requisitos

- Node.js 18+

## Instalación

```bash
cd cloud-hack-web
npm install
```

## Configuración

```bash
cp .env.example .env
```

Editar `VITE_API_URL` en `.env` para apuntar al backend:

```
VITE_API_URL=http://localhost:4000
```

## Ejecución

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/login` | Inicio de sesión |
| `/register` | Registro de usuario |
| `/dashboard` | Panel principal (protegida) |
| `/chat` | Chat con IA simulada (protegida) |
| `/items` | CRUD de items (protegida) |

## Estructura

```
src/
├── main.tsx
├── App.tsx
├── index.css
├── lib/
│   └── api.ts          # Axios con interceptors y refresh automático
├── auth/
│   ├── tokenStorage.ts # localStorage helpers
│   └── ProtectedRoute.tsx
├── pages/
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── DashboardPage.tsx
│   ├── ChatPage.tsx
│   └── ItemsPage.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Layout.tsx
│   ├── Input.tsx
│   ├── Button.tsx
│   └── Loading.tsx
└── types/
    └── index.ts
```
