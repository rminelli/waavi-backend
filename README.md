[![prettier](https://img.shields.io/badge/styled%20with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# :movie_camera: Prueba Backend 

## Crear una API con Node la cual tendrá un sistema de autenticación y CRUD de películas y responder a una pregunta



### La API de demostración está aquí: [backend](http://ec2-3-15-149-11.us-east-2.compute.amazonaws.com:3800/)
### La documentación de la API está aquí: [Swagger](http://ec2-3-15-149-11.us-east-2.compute.amazonaws.com:3800/)
##
:white_check_mark:
#### Swagger UI permite a cualquier persona, ya sea su equipo de desarrollo o sus consumidores finales, visualizar e interactuar con los recursos de la API #### sin tener implementada ninguna lógica de implementación. Se genera automáticamente a partir de su especificación OpenAPI (anteriormente conocida como #### Swagger), con la documentación visual que facilita la implementación de back-end y el consumo del lado del cliente.

Principales tecnologías con las que se desarrolló este proyecto:

- Node.js
- Express
- PostgreSQL
- Knex
- Swagger UI

### :sparkles: :runner: Configurar el entorno local

**Cambie el archivo de configuración del entorno .env, con las credenciales de acceso para la base de datos y su clave privada preferida**

:heavy_exclamation_mark: _¡No olvides instalar y crear tu base de datos localmente! PostgreSQL_

```bash
# Clonar este repositorio
$ git clone https://github.com/rminelli/waavi-backend

## Ejecutar Backend Server

# Ir al repositorio local

## Configuración del proyecto
$ npm install

# Crear base de datos con knex
$ knex migrate:latest

# Ejecuta la aplicación
$ npm start

# Ejecutar en producción con pm2
$ npm run production

# La API se ejecuta en http://127.0.0.1:3800
* Utilice Postman un cliente REST para probar la API.

```

