# 🚀 Nx + GitHub Actions - Monorepo con despliegue inteligente

Este proyecto es un **ejercicio técnico de demostración** que muestra cómo usar **Nx Monorepo** con **GitHub Actions** para detectar y desplegar únicamente los proyectos afectados por un cambio.

> 🔧 Construido con `Node.js v20`, `Nx v20`, `Express`, y herramientas modernas de automatización.

---

## 🎯 Objetivo

Explorar cómo `Nx` puede optimizar flujos de integración continua al combinarse con `GitHub Actions`, permitiendo que los pipelines:

1. Detecten automáticamente qué apps se modificaron.
2. Ejecuten `build`, `test`, `lint` y `deploy` **solo en esas apps**.
3. Corra cada app afectada en jobs paralelos.
4. Permita separar despliegues en diferentes ambientes según el proyecto.

---

## 🧪 Stack usado

<div align="left">

<img src="https://img.shields.io/badge/Node.js-20.x-green?logo=node.js&logoColor=white" alt="Node.js Badge"/>
<img src="https://img.shields.io/badge/Nx-20.7.2-blue?logo=nx&logoColor=white" alt="Nx Badge"/>
<img src="https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=white" alt="Express Badge"/>
<img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-black?logo=githubactions&logoColor=white" alt="GitHub Actions Badge"/>
<img src="https://img.shields.io/badge/Monorepo-Nx%20workspace-orange?logo=npm&logoColor=white" alt="Monorepo Badge"/>

</div>

---

## 📦 Estructura del repositorio

```bash
.
├── apps
│   ├── app-a        # API Express con uso de shared
│   ├── app-b        # Otra API Express que también depende de shared
├── libs
│   └── shared       # Librería compartida entre app-a y app-b
├── .github
│   └── workflows    # CI con GitHub Actions usando Nx Affected
├── nx.json
├── package.json
└── README.md
```

---

## 🚀 Scripts disponibles

| Script            | Descripción                                               |
|-------------------|-----------------------------------------------------------|
| `build`           | Construye solo las apps afectadas                         |
| `serve`           | Ejecuta app-a y app-b en paralelo                         |
| `test`            | Ejecuta tests solo de las apps afectadas                  |
| `lint`            | Ejecuta lint solo en los proyectos afectados              |
| `format`          | Aplica formato a todo el monorepo                         |
| `format:check`    | Verifica si el código está correctamente formateado       |
| `graph`           | Muestra el grafo de dependencias del monorepo             |
| `affected:apps`   | Muestra qué apps fueron modificadas                       |

---

## ⚙️ Cómo clonar y correr

```bash
git clone https://github.com/tu-usuario/nx-gha-affected-deploy.git
cd nx-gha-affected-deploy
npm install
npm run serve
```

---

## 🧪 Cómo probar los flujos CI/CD

Puedes crear ramas como:

- `feature/app-a-change` → afecta solo `app-a`
- `feature/app-b-change` → afecta solo `app-b`
- `feature/shared-change` → afecta ambas apps

> Al abrir un Pull Request, verás que **solo se ejecutan acciones sobre los proyectos afectados**.

---

## 📚 Recursos adicionales

- 📘 Documentación oficial de Nx: [https://nx.dev](https://nx.dev)
- 📄 Explicación de Nx Affected: [https://nx.dev/nx-api/nx/documents/affected](https://nx.dev/nx-api/nx/documents/affected)
- ⚙️ Guía sobre monorepos con Nx: [https://nx.dev/getting-started/intro](https://nx.dev/getting-started/intro)
- 📂 Documentación sobre plugins y generadores: [https://nx.dev/nx-plugin](https://nx.dev/nx-plugin)

---
