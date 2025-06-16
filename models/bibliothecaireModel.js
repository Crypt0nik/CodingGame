const pool = require('../config/db');

const getAllBibliothecaires = () => {
  return pool.query('SELECT * FROM bibliothecaires');
};

const getBibliothecaireById = (id) => {
  return pool.query('SELECT * FROM bibliothecaires WHERE id = $1', [id]);
};

const createBibliothecaire = (nom, specialite) => {
  return pool.query(
    'INSERT INTO bibliothecaires (nom, specialite) VALUES ($1, $2) RETURNING *',
    [nom, specialite]
  );
};

const updateBibliothecaire = (id, nom, specialite) => {
  return pool.query(
    'UPDATE bibliothecaires SET nom = $1, specialite = $2 WHERE id = $3 RETURNING *',
    [nom, specialite, id]
  );
};

const deleteBibliothecaire = (id) => {
  return pool.query('DELETE FROM bibliothecaires WHERE id = $1', [id]);
};

module.exports = {
  getAllBibliothecaires,
  getBibliothecaireById,
  createBibliothecaire,
  updateBibliothecaire,
  deleteBibliothecaire
};
