# Infraestructura-Vercel
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

#

ejecuta el servidor de desarrollo:
bash
npm run dev

# 

Abre http://localhost:3000 con tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando pages/index.js. La página se actualiza automáticamente conforme editas el archivo.
**Estructura del Proyecto** 
1. pages/ - Contiene las rutas de tu aplicación. Cada archivo en esta carpeta se convierte en una ruta.
2. components/ - Contiene componentes reutilizables de React.
3. styles/ - Contiene archivos CSS para estilizar tu aplicación.
4. public/ - Almacena archivos estáticos como imágenes.

**Características**
1. Página de inicio con secciones para proyectos, blog y contacto.
2. Diseño responsivo.
3. API routes para manejar solicitudes del servidor.
