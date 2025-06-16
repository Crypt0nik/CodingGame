const Lecteur = require('../models/lecteurModel');

exports.getAll = async (req, res) => {
  try {
    const result = await Lecteur.getAllLecteurs();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Lecteur.getLecteurById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Lecteur non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, email } = req.body;
  if (!nom || !email) return res.status(400).json({ error: 'Nom et email requis' });
  try {
    const result = await Lecteur.createLecteur(nom, email);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { nom, email } = req.body;
  try {
    const result = await Lecteur.updateLecteur(req.params.id, nom, email);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Lecteur non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Lecteur.deleteLecteur(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.inscrire = async (req, res) => {
  const { evenement_id } = req.body;
  const lecteur_id = req.params.id;
  if (!evenement_id) return res.status(400).json({ error: 'evenement_id requis' });
  try {
    await Lecteur.inscrireLecteurAuEvenement(lecteur_id, evenement_id);
    res.status(200).json({ message: 'Inscription réussie' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvenements = async (req, res) => {
  const lecteur_id = req.params.id;
  try {
    const result = await Lecteur.getEvenementsByLecteur(lecteur_id);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
