# 📖 Documentation API - Guide d'Utilisation

## 🎯 Vue d'ensemble

Cette API REST permet de gérer une bibliothèque moderne avec :
- **Bibliothécaires** : Employés et leurs spécialités
- **Événements** : Ateliers, conférences et activités
- **Lecteurs** : Membres inscrits
- **Inscriptions** : Relations entre lecteurs et événements

## 🔧 Configuration et Tests

### Swagger UI
Pour visualiser et tester l'API avec une interface graphique :

1. Installez swagger-ui-express :
```bash
npm install swagger-ui-express js-yaml
```

2. Ajoutez dans votre `app.js` :
```javascript
const swaggerUi = require('swagger-ui-express');
const YAML = require('js-yaml');
const fs = require('fs');

const swaggerDocument = YAML.load(fs.readFileSync('./docs/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

3. Accédez à `http://localhost:3000/api-docs`

### Collection Postman
1. Importez le fichier `docs/postman_collection.json` dans Postman
2. Configurez la variable `base_url` vers `http://localhost:3000/api`
3. Utilisez les requêtes pré-configurées avec des exemples

## 📋 Workflows Recommandés

### 1. Configuration Initiale
```bash
# 1. Créer un bibliothécaire
POST /api/bibliothecaires
{
  "nom": "Dupont",
  "prenom": "Marie",
  "email": "marie.dupont@bibliotheque.fr",
  "specialite": "Littérature contemporaine"
}

# 2. Inscrire des lecteurs
POST /api/lecteurs
{
  "nom": "Martin",
  "prenom": "Pierre",
  "email": "pierre.martin@email.com",
  "date_naissance": "1990-05-15"
}
```

### 2. Organiser un Événement
```bash
# 1. Créer l'événement
POST /api/evenements
{
  "titre": "Atelier d'écriture",
  "description": "Découvrez l'écriture créative",
  "date_debut": "2024-03-15T14:00:00",
  "date_fin": "2024-03-15T16:00:00",
  "lieu": "Salle de conférence",
  "max_participants": 15,
  "bibliothecaire_id": 1
}

# 2. Inscrire des lecteurs
POST /api/lecteurs/1/evenements
{
  "evenement_id": 1
}
```

### 3. Suivi et Gestion
```bash
# Voir tous les événements avec participants
GET /api/evenements

# Voir les événements d'un lecteur
GET /api/lecteurs/1/evenements

# Modifier un événement
PUT /api/evenements/1
```

## 🔍 Tests et Validation

### Tests avec curl
```bash
# Test de base
curl -X GET http://localhost:3000/api/bibliothecaires

# Création avec données
curl -X POST http://localhost:3000/api/bibliothecaires \
  -H "Content-Type: application/json" \
  -d '{"nom":"Test","prenom":"User","email":"test@test.com","specialite":"Test"}'
```

### Tests avec Postman
- Utilisez les tests automatiques inclus dans la collection
- Vérifiez les codes de statut HTTP
- Validez la structure JSON des réponses

## 🚨 Gestion d'Erreurs

### Codes de Statut
- `200` : Succès
- `201` : Créé avec succès
- `400` : Données invalides
- `404` : Ressource non trouvée
- `500` : Erreur serveur

### Format des Erreurs
```json
{
  "error": "Message d'erreur",
  "details": "Détails supplémentaires"
}
```

## 📊 Bonnes Pratiques

### Validation des Données
- Emails au format valide
- Dates au format ISO 8601
- Numéros de téléphone avec chiffres et espaces
- Longueurs minimales/maximales respectées

### Performance
- Utilisez les index sur les clés étrangères
- Limitez les requêtes avec pagination (à implémenter)
- Utilisez la mise en cache pour les données fréquentes

### Sécurité
- Validation stricte des entrées
- Échappement des requêtes SQL
- Logs des accès pour audit

## 🎯 Prochaines Étapes

1. **Authentification** : JWT tokens
2. **Pagination** : Limiter les résultats
3. **Recherche** : Filtres avancés
4. **Notifications** : Emails pour les événements
5. **Analytics** : Statistiques d'utilisation

---

Cette documentation accompagne parfaitement votre livrable avec une API complètement documentée et testable ! 🚀
