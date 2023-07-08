Agenda de Contactos con Flux
Este es un proyecto simple que utiliza la arquitectura Flux para gestionar una agenda de contactos. Permite crear, leer, actualizar y eliminar contactos de una base de datos. El proyecto está construido utilizando React y React Router para el frontend, y se comunica con una API RESTful para realizar las operaciones CRUD en los contactos.


![image](https://github.com/Toni369-vs/exercise-contact-list-context/assets/125910370/8880c481-d15d-4a51-9312-4c399b561aff)


Características
Crear un nuevo contacto con nombre completo, correo electrónico, dirección y número de teléfono.
Ver una lista de todos los contactos en la agenda.
Actualizar la información de un contacto existente.
Eliminar un contacto de la agenda.
Empezar
Para comenzar con el proyecto, sigue estos pasos:

Clona el repositorio: git clone <repository-url>
"node-sass": "^7.0.1",
nvm install 14.16.1
nvm use 14.16.1
npm cache clean --force
npm i && npm run start

La aplicación te permite realizar las siguientes acciones:

Crear un contacto: Haz clic en el botón "Agregar nuevo contacto" en la página principal. Completa los detalles del contacto y haz clic en "Guardar" para añadir el contacto a la agenda.
Ver contactos: En la página principal, puedes ver una lista de todos los contactos en la agenda. Cada contacto se muestra con su nombre completo, dirección, número de teléfono y correo electrónico. También puedes ver su foto de perfil.
Actualizar un contacto: Para actualizar la información de un contacto, haz clic en el ícono de lápiz junto al contacto. Esto abrirá un modal con un formulario donde puedes editar los detalles del contacto. Haz clic en "Guardar" para actualizar el contacto.
Eliminar un contacto: Para eliminar un contacto, haz clic en el ícono de papelera junto al contacto. Esto abrirá un modal de confirmación. Haz clic en "¡Hazlo!" para eliminar el contacto de forma permanente.
Integración con la API
La aplicación se integra con una API RESTful para realizar las operaciones CRUD en los contactos. Los endpoints de la API utilizados son los siguientes:

GET /contact/agenda/ToniCM: Obtener todos los contactos en la agenda.
POST /contact: Crear un nuevo contacto.
PUT /contact/:id: Actualizar un contacto existente.
DELETE /contact/:id: Eliminar un contacto.
La URL base de la API es https://assets.breatheco.de/apis/fake/. El slug de la agenda utilizado es "ToniCM". Las solicitudes a la API se realizan utilizando el Fetch API.

Estructura del Proyecto
El proyecto sigue una estructura modular con los siguientes componentes principales, además de otros no mencionados:

App.js: El componente principal que maneja el enrutamiento y proporciona el contexto de la aplicación.
store/appContext.js: El store Flux y el proveedor de contexto. Contiene el estado de la aplicación y las acciones para gestionar los contactos.
component/ContactCard.js: Un componente reutilizable para mostrar una tarjeta de contacto con su información.
component/Modal.js: Un componente modal para mostrar un cuadro de diálogo de confirmación antes de eliminar un contacto.
component/UpdateContact.js: Un componente modal para actualizar la información de un contacto.
pages/AddContact.js: El componente de página para agregar un nuevo contacto.
pages/Contacts.js: El componente de página para mostrar la lista de contactos y manejar las operaciones CRUD.


Conclusión
Este proyecto de Agenda de Contactos con Flux demuestra cómo utilizar la arquitectura Flux para gestionar el estado de la aplicación y realizar operaciones CRUD en una agenda de contactos. Proporciona una estructura básica que se puede ampliar para construir aplicaciones más complejas con Flux y React. Siéntete libre de explorar y modificar el código según tus necesidades.![image](https://github.com/Toni369-vs/exercise-contact-list-context/assets/125910370/11fb8309-1272-4a69-bea0-d3f84bd14fac)




Conclusión
Este proyecto de Agenda de Contactos con Flux demuestra cómo utilizar la arquitectura Flux para gestionar el estado de la aplicación y realizar operaciones CRUD en una agenda de contactos. Proporciona una estructura básica que se puede ampliar para construir aplicaciones más complejas con Flux y React. Siéntete libre de explorar y modificar el código según tus necesidades.
