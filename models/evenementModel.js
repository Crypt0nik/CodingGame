const pool = require('../config/db');

const getAllEvenements = () => {
  return pool.query(
    `SELECT evenements.*, bibliothecaires.nom AS bibliothecaire_nom 
     FROM evenements LEFT JOIN bibliothecaires ON evenements.bibliothecaire_id = bibliothecaires.id`
  );
};

const getEvenementById = (id) => {
  return pool.query(
    `SELECT evenements.*, bibliothecaires.nom AS bibliothecaire_nom 
     FROM evenements LEFT JOIN bibliothecaires ON evenements.bibliothecaire_id = bibliothecaires.id 
     WHERE evenements.id = $1`,
    [id]
  );
};

const createEvenement = (nom, description, bibliothecaire_id) => {
  return pool.query(
    `INSERT INTO evenements (nom, description, bibliothecaire_id)
     VALUES ($1, $2, $3) RETURNING *`,
    [nom, description, bibliothecaire_id]
  );
};

const updateEvenement = (id, nom, description, bibliothecaire_id) => {
  return pool.query(
    `UPDATE evenements SET nom = $1, description = $2, bibliothecaire_id = $3
     WHERE id = $4 RETURNING *`,
    [nom, description, bibliothecaire_id, id]
  );
};

const deleteEvenement = (id) => {
  return pool.query(`DELETE FROM evenements WHERE id = $1`, [id]);
};

module.exports = {
  getAllEvenements,
  getEvenementById,
  createEvenement,
  updateEvenement,
  deleteEvenement
};
