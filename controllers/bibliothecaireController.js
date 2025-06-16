const Bibliothecaire = require('../models/bibliothecaireModel');

exports.getAll = async (req, res) => {
  try {
    const result = await Bibliothecaire.getAllBibliothecaires();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Bibliothecaire.getBibliothecaireById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Bibliothécaire non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, specialite } = req.body;
  if (!nom) return res.status(400).json({ error: 'Le nom est requis' });
  try {
    const result = await Bibliothecaire.createBibliothecaire(nom, specialite);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { nom, specialite } = req.body;
  try {
    const result = await Bibliothecaire.updateBibliothecaire(req.params.id, nom, specialite);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Bibliothécaire non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Bibliothecaire.deleteBibliothecaire(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
