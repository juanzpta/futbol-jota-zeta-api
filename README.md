# ⚽ Fútbol Jota Zeta API

API REST desarrollada con Node.js, Express y MySQL para la gestión de una tienda de artículos deportivos especializados en fútbol.

## 📌 Objetivo

Desarrollar una API que permita administrar productos y usuarios de forma segura mediante autenticación con JWT y control de acceso por roles.

## 🚀 Tecnologías

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt
- Thunder Client
- Visual Studio Code

## 👥 Roles

### Administrador
- Crear productos
- Editar productos
- Eliminar productos
- Consultar productos

### Cliente
- Registrarse
- Iniciar sesión
- Consultar productos

## 📁 Estructura

backend/
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── package-lock.json

## ⚙️ Instalación

1. Clonar el repositorio.

2. Instalar dependencias

```bash
npm install
```

3. Configurar el archivo `.env`

```env
JWT_SECRET=tu_clave_secreta
```

4. Importar la base de datos MySQL.

5. Iniciar el servidor

```bash
npm run dev
```

## 🔐 Autenticación

Las rutas protegidas utilizan JWT.

Enviar el token en el Header:

```text
Authorization: Bearer TU_TOKEN
```

## 📡 Endpoints principales

### Usuarios

POST /api/auth/register

POST /api/auth/login

### Productos

GET /api/productos

GET /api/productos/:id

POST /api/productos

PUT /api/productos/:id

DELETE /api/productos/:id

## 👨‍💻 Autor

Proyecto desarrollado por Juan Z para la universidad.


## 📌 Funcionalidades

- Registro de usuarios.
- Inicio de sesión con JWT.
- Contraseñas cifradas con bcrypt.
- CRUD completo de productos.
- Autenticación mediante middleware.
- Autorización basada en roles (Administrador y Cliente).
- Integración con MySQL.
- Arquitectura MVC.

## 🔮 Mejoras futuras

- Subida de imágenes de productos.
- Recuperación de contraseña.
- Panel administrativo.
- Frontend en React.
- Despliegue en la nube.