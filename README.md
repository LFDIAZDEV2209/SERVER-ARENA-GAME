# 🥋 Mortal Kombat API

API REST para personajes de Mortal Kombat construida con Node.js y Express, lista para desplegar en Render.

## 🚀 Características

- ✅ API REST completa para personajes de Mortal Kombat
- ✅ Búsqueda por ID, tipo y nombre
- ✅ CORS habilitado
- ✅ Manejo de errores
- ✅ Health check endpoint
- ✅ Listo para producción

## 📋 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Información de la API |
| GET | `/api/characters` | Obtener todos los personajes |
| GET | `/api/characters/:id` | Obtener personaje por ID |
| GET | `/api/characters/type/:type` | Filtrar por tipo (base/dlc) |
| GET | `/api/characters/search/:query` | Buscar por nombre o alias |
| GET | `/health` | Estado del servidor |

## 🛠️ Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd mortal-kombat-api
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Ejecutar en producción**
   ```bash
   npm start
   ```

## 🌐 Despliegue en Render

### Opción 1: Desde GitHub

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **En Render:**
   - Ve a [render.com](https://render.com)
   - Crea una nueva cuenta o inicia sesión
   - Haz clic en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub
   - Configuración automática:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Node Version**: 18.x o superior

### Opción 2: Desde archivos locales

1. **Crea un archivo ZIP** con todos los archivos del proyecto
2. **En Render:**
   - Ve a "New +" → "Web Service"
   - Selecciona "Upload ZIP file"
   - Sube tu archivo ZIP
   - Configura los comandos como en la Opción 1

## 📊 Ejemplos de Uso

### Obtener todos los personajes
```bash
curl https://tu-api.onrender.com/api/characters
```

### Buscar personaje por ID
```bash
curl https://tu-api.onrender.com/api/characters/1
```

### Filtrar por tipo
```bash
curl https://tu-api.onrender.com/api/characters/type/base
```

### Buscar por nombre
```bash
curl https://tu-api.onrender.com/api/characters/search/scorpion
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `env.example`:

```env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=*
LOG_LEVEL=info
```

### Estructura del Proyecto

```
mortal-kombat-api/
├── data/
│   └── db.json          # Datos de personajes
├── public/              # Archivos estáticos (imágenes)
├── server.js            # Servidor principal
├── package.json         # Dependencias y scripts
├── .gitignore          # Archivos a ignorar
├── env.example         # Variables de entorno de ejemplo
└── README.md           # Documentación
```

## 🎮 Datos de Personajes

La API incluye información detallada de cada personaje:

- **Información básica**: nombre, alias, descripción
- **Estadísticas**: HP, ataque, daño
- **Habilidades**: fortalezas y debilidades
- **Personalización**: trajes disponibles
- **Categorización**: tipo (base/dlc)

## 🚨 Solución de Problemas

### Error de Puerto
Si Render no puede iniciar el servidor:
- Verifica que uses `process.env.PORT` en tu código
- Asegúrate de que el puerto por defecto sea 3000

### Error de Dependencias
Si falla la instalación:
- Verifica que `package.json` tenga todas las dependencias
- Asegúrate de usar Node.js 18+ en Render

### Error de CORS
Si tienes problemas de CORS:
- Verifica que el middleware CORS esté configurado
- Revisa la configuración de `CORS_ORIGIN`

## 📝 Licencia

MIT License - ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas o preguntas:
- Abre un issue en GitHub
- Revisa la documentación de Render
- Verifica los logs del servidor en Render Dashboard
