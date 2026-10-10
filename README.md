# Gestor para la comunicación interna

Aplicación web para la gestión de tareas, comunicación interna y centralización de recursos organizacionales con un chat institucional.

El proyecto utiliza una arquitectura basada en contenedores Docker, un frontend desarrollado con React y Vite, microservicios con Node.js y Express, y una base de datos PostgreSQL.

## Tecnologías

- **Frontend:** React y Vite.
- **Backend:** Node.js y Express.
- **Base de datos:** PostgreSQL.
- **Contenedores:** Docker y Docker Compose.
- **Servidor web y proxy inverso:** Nginx.

## Requisitos previos

Antes de ejecutar el proyecto, instala:

- Git.
- Docker Engine o Docker Desktop.
- Docker Compose, mediante el complemento `docker compose`.

Verifica la instalación:

```bash
git --version
docker --version
docker compose version
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/YLopezB/gestion-comunicacion.git
cd gestion-comunicacion
```

### 2. Configurar las variables de entorno

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Edita el archivo `.env`:

```bash
nano .env
```

Configura las variables necesarias para el proyecto. Reemplaza los valores de ejemplo por los valores correspondientes a tu entorno.

En el editor Nano:

- `Ctrl + O`: guardar los cambios.
- `Enter`: confirmar el nombre del archivo.
- `Ctrl + X`: salir del editor.

**Importante:** no compartas ni subas al repositorio el archivo `.env` con credenciales reales. Utiliza `.env.example` como plantilla y conserva los valores sensibles fuera del control de versiones.

## Ejecución en desarrollo

Desde la raíz del proyecto, ejecuta:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Este comando construye las imágenes necesarias y levanta los servicios definidos en la configuración de desarrollo.

Cuando los servicios estén listos, accede al frontend mediante:

- **Frontend con Vite:** http://localhost:5173
- **Nginx, si está habilitado en la configuración de desarrollo:** http://localhost

Los servicios y puertos disponibles dependen de la configuración de `docker-compose.dev.yml`.

### Desarrollo del frontend

Vite permite actualizar la aplicación durante el desarrollo sin tener que reconstruir toda la imagen por cada cambio de código.

### Desarrollo de los microservicios

Los microservicios deben tener configurado un mecanismo de recarga del servidor, por ejemplo `node --watch`, para reiniciarse al detectar cambios en los archivos.

Los volúmenes de Docker Compose permiten que los cambios realizados en el código fuente estén disponibles dentro de los contenedores.

### Agregar un microservicio

Al incorporar un nuevo microservicio:

1. Crear su directorio y configurar su `Dockerfile`.
2. Agregar el servicio a `docker-compose.dev.yml` y a `docker-compose.prod.yml`, según corresponda.
3. Configurar las variables de entorno y la conexión con los demás servicios.
4. Configurar el enrutamiento de las solicitudes API. Si se utiliza el proxy de Vite en desarrollo, agregar la regla correspondiente en `frontend/vite.config.js`. Si se utiliza Nginx o un API Gateway como punto de entrada, actualizar la configuración correspondiente.
5. Verificar que las rutas del proxy coincidan con los endpoints definidos en el microservicio.

## Ejecución en producción

Antes de desplegar, configura las variables de entorno de producción y revisa los puertos publicados, las credenciales y las políticas de seguridad.

Ejecuta:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Este comando construye las imágenes necesarias e inicia los servicios en segundo plano.

Si Nginx está configurado para servir el frontend compilado y redirigir las solicitudes API, accede a la aplicación mediante el puerto publicado por Nginx, por ejemplo:

- **Aplicación web:** http://localhost

En un servidor real, configura un dominio, HTTPS y las medidas de seguridad necesarias antes de habilitar el acceso de los usuarios.

## Comandos útiles

Consultar el estado de los servicios:

```bash
docker compose -f docker-compose.dev.yml ps
```

Consultar los registros:

```bash
docker compose -f docker-compose.dev.yml logs -f
```

Detener los servicios de desarrollo:

```bash
docker compose -f docker-compose.dev.yml down
```

Consultar los registros de producción:

```bash
docker compose -f docker-compose.prod.yml logs -f
```

Detener los servicios de producción:

```bash
docker compose -f docker-compose.prod.yml down
```

**Nota:** `docker compose down` detiene y elimina los contenedores y las redes creadas por Compose, pero normalmente conserva los volúmenes nombrados. No utilices `-v` si no deseas eliminar esos volúmenes y sus datos.

