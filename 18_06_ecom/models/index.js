const fs = require("fs"),
    { Sequelize } = require("sequelize");

// create Sequelize instance
const sequelize = new Sequelize({
    // Crée une instance Sequelize pour MySQL
    database: "ecom_final", // Nom de la base de données (ex: "ecom_db")
    username: "root", // Utilisateur MySQL (ex: "root")
    password: "", // Mot de passe MySQL (ex: "")
    host: "localhost", // Hôte MySQL (ex: "127.0.0.1")
    dialect: "mysql", // Utilise MySQL au lieu de SQLite
    logging: false, // Désactive les logs SQL (optionnel)
    define: {
        freezeTableName: true, // Empêche Sequelize de pluraliser les noms de tables
    },
});

const db = {};

// Charge tous les modèles du dossier
fs.readdirSync(__dirname)
    .filter((filename) => filename !== "index.js")
    .forEach((filename) => {
        const model = require("./" + filename)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Associe les modèles entre eux (ex: User.hasMany(Product))
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Synchronise les modèles avec la base de données
sequelize
    .sync({ alter: true }) // Utilise `alter: true` pour mettre à jour les tables sans tout supprimer
    .then(() => {
        console.log("Database synced");
    })
    .catch((err) => {
        console.error("Error syncing database:", err);
    });

// Expose l'instance Sequelize et les modèles
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
