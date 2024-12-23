Tasks_Management

-Descargar dependencias con 'npm install' -Configurar un archivo .env con las siguientes variables: PORT=4000 DB_USER=usuario_de_postgresql DB_PASSWORD=contraseña_de_postgressql DB_HOST=host_de_la_database_localhost DB_PORT=puerto_de_la_database DB_NAME=task_management //nombre de la database JWT_SECRET=claveJWT //clave secreta de la autenticacion de usuario.

-Correr los script ubicados en 'database/db.sql' en la consola de pgAdmin para crear la database, tablas y usuario.

En el archivo auth.controller.js se encuentra comentado el token para el usuario predefinido.