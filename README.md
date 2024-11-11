﻿# Infraestructura-Vercel
La mayoría de los frameworks modernos tienen una CLI (Interfaz de Línea de Comandos) para iniciar proyectos. Así, los comandos introducidos tendrán la siguiente forma:

```bash
npx create-[framework]-app my-vercel-app
# o
npm init [framework]@latest my-vercel-app

cd my-vercel-app
```

Una vez hecho esto desarrollaremos nuestra aplicación normalmente, utilizando las características del framework elegido.

## Despliegue y previsualización

Para desplegar nuestra aplicación simplemente introduciremos

```bash
vercel 
```

Este comando creará un despliegue de previsualización y nos proporcionará una URL para revisar nuestra aplicación.

Para ponerla en marcha escribiremos el comando

```bash
vercel --prod
```
