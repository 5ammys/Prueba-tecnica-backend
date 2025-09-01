# Prueba Técnica Backend – NestJS

Este proyecto es una práctica con **NestJS** que expone un servicio REST para manejar información de personas.  

## Requisitos

- [Node.js](https://nodejs.org/) >= 18  
- [npm](https://www.npmjs.com/)
- Git

## Instalación

Clonar el repositorio

En git bash ingresar:
git clone https://github.com/5ammys/Prueba-tecnica-backend.git
cd Prueba-tecnica-backend/Practica/actividad-3

## Ejecución del servicio

Ejecutar una terminal y escribir la siguiente linea de comando:
  npm run start:dev

## 

Prueba de Api (recomendable usarlo con POSTMAN)

GET http://localhost:3000/person -> Obtiene el JSON de personas

POST http://localhost:3000/person 
en el body ingresar un JSON con el formato:
{
   "name":"TuNombre",
   "suraname":"TuApellido", 
   "birthday":"1995/11/16/", 
   "age":29, 
   "documentType":"CUIT", -> Aca se puede ingresar tambien "DNI"
   "documentNumber":20123456781 
}

El servidor se encarga de realizar las validaciones y transformaciones necesarias con los datos



