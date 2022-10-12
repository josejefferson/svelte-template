# Svelte Kit Template (with Express)

## ⚙️ Install

```bash
yarn
```

```bash
npm install
```

## 🚀 Run

### Development (_frontend_)

```bash
yarn dev
```

```bash
npm run dev
```

### Development (_backend_)

```bash
yarn dev:back
```

```bash
npm run dev:back
```

### Production

```bash
yarn build
yarn start
```

```bash
npm run build
npm start
```

## 🔧 Environment variables

> Environment variables can be placed in **.env** file

`PORT` - Port the server will run on (_frontend_ and _backend_) **(default: 3000)**

`FRONTEND_PORT` - Port the _frontend_ server will run on **(default: 3000)**

`BACKEND_PORT` - Port the _backend_ server will run on **(default: 8888)**

`VITE_API_ENDPOINT` - Backend server URL if hosted elsewhere

> **Note**
> All frontend environment variables must be prefixed with **VITE\_**
