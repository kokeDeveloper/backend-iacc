# Nombre
Api RestFull - Desafio IACC / Jorge Toledo Carvajal

## Descripción
Gestion de datos de Alumnos y Carreras

## Instalación
Asegúrate de tener instaladas las siguientes dependencias antes de ejecutar la API:

- Node.js
- npm

Una vez que tengas las dependencias instaladas, puedes clonar este repositorio y ejecutar los siguientes comandos:

  # Instalar las dependencias 
  npm install 
 
## Pasos para la construcción
Sigue estos pasos para construir y ejecutar la API:

  # Compilar la aplicación 
  npm run build 
  
  # Ejecutar la aplicación 
  npm run start

## Pruebas de estrés
Este proyecto utiliza Artilley para realizar pruebas de estrés en la API. Para ejecutar las pruebas de estrés, sigue estos pasos:

  # Instalar Artilley globalmente 
  npm install -g artillery 
  
  # Ejecutar el script de pruebas de estrés 
  artillery run asciiart-load-test.yml
  apirestfull-nestjs/testArtillery.jpg

## Comandos curl para probar los endpoints

  A continuación se muestran algunos ejemplos de comandos curl para probar los diferentes endpoints de la API:

  # Obtener todos los alumnos 
  curl -X GET http://localhost:3001/alumnos
  
  # Crear un nuevo usuario 
  curl -X POST -H "Content-Type: application/json" -d '{"nombre": "string", "apellido": "string", "email": "string", "edad": "number", "direccion": "string", "carrera": "[{"id"}]}' http://localhost:3001/alumnos
  
  # Actualizar un usuario existente 
  curl -X PUT -H "Content-Type: application/json" -d '{"nombre": "Nuevo nombre"}' http://localhost:3001/alumnos/:id
  
  # Eliminar un usuario 
  curl -X DELETE http://localhost:3001/alumnos/:id
  
  # Obtener todos las carreras 
  curl -X GET http://localhost:3001/carreras
  
  # Crear un nueva carrera 
  curl -X POST -H "Content-Type: application/json" -d '{"nombre": "string", "codigo": "number", "año": "number", "semestre": "number", "sede": "string"

  # Actualizar una carrera existente 
  curl -X PUT -H "Content-Type: application/json" -d '{"nombre": "Nuevo nombre"}' http://localhost:3001/carreras/:id
  
  # Eliminar una carrera
  curl -X DELETE http://localhost:3001/carreras/:id


## Comando curl para inscribir a un alumno en un curso
curl -X POST -H "Content-Type: application/json" -d '{"nombre": "", "apellido": "", "email": "", "edad": "", "direccion": "", "carrera": "[{"id"}]}' http://localhost:3001/alumnos



¡Eso es todo! Espero cumplir con las espectativas de este desafio :)
