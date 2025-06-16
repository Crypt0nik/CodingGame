const pool = require('../config/db');

const getAllLecteurs = () => {
  return pool.query('SELECT * FROM lecteurs');
};

const getLecteurById = (id) => {
  return pool.query('SELECT * FROM lecteurs WHERE id = $1', [id]);
};

const createLecteur = (nom, email) => {
  return pool.query(
    'INSERT INTO lecteurs (nom, email) VALUES ($1, $2) RETURNING *',
    [nom, email]
  );
};

const updateLecteur = (id, nom, email) => {
  return pool.query(
    'UPDATE lecteurs SET nom = $1, email = $2 WHERE id = $3 RETURNING *',
    [nom, email, id]
  );
};

const deleteLecteur = (id) => {
  return pool.query('DELETE FROM lecteurs WHERE id = $1', [id]);
};

const inscrireLecteurAuEvenement = (lecteur_id, evenement_id) => {
  return pool.query(
    'INSERT INTO evenements_lecteurs (lecteur_id, evenement_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
    [lecteur_id, evenement_id]
  );
};

const getEvenementsByLecteur = (lecteur_id) => {
  return pool.query(
    `SELECT evenements.* FROM evenements 
     JOIN evenements_lecteurs ON evenements.id = evenements_lecteurs.evenement_id
     WHERE evenements_lecteurs.lecteur_id = $1`,
    [lecteur_id]
  );
};

module.exports = {
  getAllLecteurs,
  getLecteurById,
  createLecteur,
  updateLecteur,
  deleteLecteur,
  inscrireLecteurAuEvenement,
  getEvenementsByLecteur
};
