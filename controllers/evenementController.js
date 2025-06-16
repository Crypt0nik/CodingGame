const Evenement = require('../models/evenementModel');

exports.getAll = async (req, res) => {
  try {
    const result = await Evenement.getAllEvenements();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Evenement.getEvenementById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, description, bibliothecaire_id } = req.body;
  if (!nom || !bibliothecaire_id) return res.status(400).json({ error: 'Nom et bibliothecaire_id requis' });
  try {
    const result = await Evenement.createEvenement(nom, description, bibliothecaire_id);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { nom, description, bibliothecaire_id } = req.body;
  try {
    const result = await Evenement.updateEvenement(req.params.id, nom, description, bibliothecaire_id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Evenement.deleteEvenement(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
