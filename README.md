# VetTransparency

Aplicación web para ayudar a dueños de mascotas a encontrar la veterinaria ideal según sus necesidades y preferencias.

## Requisitos previos

Asegurate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Cloná el repositorio:
```bash
git clone https://github.com/mHuque1/obl-dpbt.git
cd obl-dpbt
```

2. Instalá las dependencias:
```bash
npm install
```

## Ejecución local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## Tecnologías utilizadas

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo y build
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación entre páginas

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/          # Páginas de la aplicación
├── data/           # Datos estáticos (clínicas, reseñas)
└── assets/         # Recursos estáticos
```
