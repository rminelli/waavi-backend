[![prettier](https://img.shields.io/badge/styled%20with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# :movie_camera: Backend API 

## API con Node para un sistema de autenticación y CRUD de películas


:white_check_mark: Principales tecnologías con las que se desarrolló este proyecto:

- Node.js
- Express
- PostgreSQL
- Knex
- Swagger UI
- Docker

### :sparkles: :runner: Configuración del entorno

## Requisitos

:rocket: Descargue el instalador preconstruido [Node.js](https://nodejs.org/en/download/) para su plataforma

:whale: Instalación de Docker y Docker-Compose para el contenedor de base de datos de PostgreSQL

```bash
# Instalar con NPM
$ npm install -g docker
$ npm install -g docker-compose
```

- Acerca del motor [Docker](https://docs.docker.com/install/)


- Acerca del [Docker Compose](https://docs.docker.com/compose/install/)

#

```bash
# Clonar este repositorio
$ git clone https://github.com/rminelli/waavi-backend

## Ejecutar Backend Server

# Ir al repositorio local

## Configuración del proyecto
$ npm install

## Crea y inicia el contenedor
$ docker-compose up -d

# Crear base de datos con knex
$ knex migrate:latest

# Ejecuta la aplicación
$ npm start

# Ejecutar en producción con pm2
$ npm run production

# La API se ejecuta en http://localhost:3800
# Visualizar e interactuar con los recursos de la API http://localhost:3800/apidoc

```

## Garantizar Alta Disponibilidad

### :eight_spoked_asterisk: Virtualización y computación en la nube

La virtualización y la computación en la nube permiten que las máquinas se asignen según los parámetros definidos del arquitecto web. Un ejemplo a este respecto es la tecnología Amazon EC2 que utiliza AutoScale y Elastic Load Balancer.

Es una buena opción usar un equilibrador de carga administrado como ELB (Elastic Load Balancer), ya que admite características útiles como el autoescalado, y es fácil de configurar, el ELB analiza las cargas de trabajo y solicita al componente AutoScale que asigne o desasigne dinámicamente máquinas para evitar un costo de alquiler innecesario.

### :eight_spoked_asterisk: PM2

Es un administrador de procesos de daemon que lo ayudará a administrar y mantener su solicitud en línea 24/7
El modo de clúster permite que las aplicaciones de Node.js en red (servidor http (s) / tcp / udp) se escalen en todas las CPU disponibles, sin ninguna modificación de código. Esto aumenta en gran medida el rendimiento y la confiabilidad de sus aplicaciones, dependiendo de la cantidad de CPU disponibles. Bajo el capó, esto utiliza el módulo de clúster Node.js de modo que los procesos secundarios de la aplicación escalada pueden compartir automáticamente los puertos del servidor.

### :eight_spoked_asterisk: Microservices y Docker

:heavy_check_mark: Los microservicios, también conocidos como arquitectura de microservicios, es un estilo arquitectónico que estructura una aplicación como una colección de servicios

- Altamente mantenible y comprobable
- Débilmente acoplado
- Desplegable independientemente
- Organizado en torno a las capacidades empresariales.
- Propiedad de un pequeño equipo

:heavy_check_mark: App Containerization con Docker permite empaquetar una aplicación con su entorno y todas sus dependencias en una "caja", llamada contenedor.
Los contenedores Docker aceleran las implementaciones, hacen que la aplicación sea portátil a cualquier plataforma, las imágenes son livianas, simplifican el mantenimiento y son altamente escalables.

Usando contenedores, podemos empaquetar el código de la aplicación, la configuración y las dependencias en un solo objeto.
