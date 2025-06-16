-- Script de création du schéma de base de données pour l'API Bibliothèque
-- Database: bibliotheque

-- Création de la table des bibliothécaires
CREATE TABLE IF NOT EXISTS bibliothecaires (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    specialite VARCHAR(100)
);

-- Création de la table des événements/ateliers
CREATE TABLE IF NOT EXISTS evenements (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    bibliothecaire_id INTEGER REFERENCES bibliothecaires(id) ON DELETE SET NULL
);

-- Création de la table des lecteurs
CREATE TABLE IF NOT EXISTS lecteurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

-- Création de la table de liaison événements-lecteurs (relation N:N)
CREATE TABLE IF NOT EXISTS evenements_lecteurs (
    evenement_id INTEGER REFERENCES evenements(id) ON DELETE CASCADE,
    lecteur_id INTEGER REFERENCES lecteurs(id) ON DELETE CASCADE,
    PRIMARY KEY (evenement_id, lecteur_id)
);

-- Insertion de données d'exemple
INSERT INTO bibliothecaires (nom, specialite) VALUES 
('Sophie Martin', 'Littérature jeunesse'),
('Pierre Durand', 'Sciences et technologies'),
('Marie Leclerc', 'Histoire et patrimoine')
ON CONFLICT DO NOTHING;

INSERT INTO lecteurs (nom, email) VALUES 
('Marie Durand', 'marie.durand@email.com'),
('Jean Moreau', 'jean.moreau@email.com'),
('Claire Dubois', 'claire.dubois@email.com')
ON CONFLICT DO NOTHING;

INSERT INTO evenements (nom, description, bibliothecaire_id) VALUES 
('Atelier d''écriture créative', 'Séance d''écriture créative de 2 heures avec exercices pratiques', 1),
('Conférence sur l''IA', 'Présentation des dernières avancées en intelligence artificielle', 2),
('Visite historique du quartier', 'Découverte du patrimoine historique local', 3)
ON CONFLICT DO NOTHING;

-- Inscription d'exemple
INSERT INTO evenements_lecteurs (evenement_id, lecteur_id) VALUES 
(1, 1),
(1, 2),
(2, 2),
(3, 1),
(3, 3)
ON CONFLICT DO NOTHING;
