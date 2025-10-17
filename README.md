# Exercice 2 — API TodoList (Express JS)

Création d'une API **Todolist** avec le framework **Express.js**, selon l'architecture **MVC**.

---

## - Installation et configuration

### 1. Cloner le projet
```bash
git clone https://github.com/HFI80Z/Conception_BackEnd_Exo2.git
cd Conception_BackEnd_Exo2
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur
```bash
npm run dev
```

Le serveur démarre sur [http://localhost:3000](http://localhost:3000)

---

## - Structure du projet (MVC)

```
Conception_BackEnd_Exo2/
│
├── server.js
├── .env
├── package.json
│
└── src/
    ├── controllers/
    │   └── todoController.js
    ├── models/
    │   └── todoModel.js
    └── routes/
        └── todoRoutes.js
```

---

## - Dépendances

- **express** — serveur web
- **cors** — gestion du CORS
- **dotenv** — gestion des variables d’environnement
- **nodemon** — redémarrage automatique en développement

---

## - Fonctionnalités de l’API

### + Ajouter une tâche
**POST** `/tasks`

#### - Exemple :
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title": "Ma tâche", "description": "Description optionnelle"}'
```

#### - Réponse :
```json
{
  "success": true,
  "message": "Task created",
  "task": {
    "id": 1,
    "title": "Ma tâche",
    "description": "Description optionnelle",
    "createdAt": "2025-10-16T08:50:00.000Z"
  }
}
```

---

### - Voir toutes les tâches
**GET** `/tasks`

#### - Exemple :
```bash
curl http://localhost:3000/tasks
```

#### - Réponse :
```json
{
  "success": true,
  "count": 1,
  "tasks": [
    {
      "id": 1,
      "title": "Ma tâche",
      "description": "Description optionnelle",
      "createdAt": "2025-10-16T08:50:00.000Z"
    }
  ]
}
```

---

### x Supprimer une tâche
**DELETE** `/tasks/:id`

#### - Exemple :
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

#### - Réponse :
```json
{
  "success": true,
  "message": "Task deleted"
}
```
