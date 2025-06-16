const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const bibliothecaireRoutes = require('./routes/bibliothecaireRoutes');
app.use('/api/bibliothecaires', bibliothecaireRoutes);

const evenementRoutes = require('./routes/evenementRoutes');
app.use('/api/evenements', evenementRoutes);

const lecteurRoutes = require('./routes/lecteurRoutes');
app.use('/api/lecteurs', lecteurRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
