const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Cargar datos desde db.json
let db;
try {
  // Intentar cargar desde la raíz del proyecto
  db = require('./db.json');
} catch (error) {
  try {
    // Si no está en la raíz, intentar desde la carpeta data
    db = require('./data/db.json');
  } catch (error2) {
    console.error('No se pudo cargar el archivo db.json');
    console.error('Error 1:', error.message);
    console.error('Error 2:', error2.message);
    process.exit(1);
  }
}

// Rutas de la API

// Obtener todos los personajes
app.get('/api/characters', (req, res) => {
  try {
    res.json(db.api.characters);
  } catch (error) {
    res.status(500).json({ error: 'Error al cargar los personajes' });
  }
});

// Obtener un personaje por ID
app.get('/api/characters/:id', (req, res) => {
  try {
    const characterId = req.params.id;
    const character = db.api.characters.find(char => char.id === characterId);
    
    if (!character) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }
    
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el personaje' });
  }
});

// Obtener personajes por tipo (base o dlc)
app.get('/api/characters/type/:type', (req, res) => {
  try {
    const type = req.params.type;
    const characters = db.api.characters.filter(char => char.type === type);
    
    if (characters.length === 0) {
      return res.status(404).json({ error: 'No se encontraron personajes de este tipo' });
    }
    
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Error al filtrar personajes por tipo' });
  }
});

// Buscar personajes por nombre o alias
app.get('/api/characters/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const characters = db.api.characters.filter(char => 
      char.name.toLowerCase().includes(query) || 
      char.alias.toLowerCase().includes(query)
    );
    
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'API de Mortal Kombat - Personajes',
    version: '1.0.0',
    endpoints: {
      characters: '/api/characters',
      characterById: '/api/characters/:id',
      charactersByType: '/api/characters/type/:type',
      searchCharacters: '/api/characters/search/:query'
    }
  });
});

// Ruta para verificar el estado del servidor
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📡 API disponible en: http://localhost:${PORT}/api/characters`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
