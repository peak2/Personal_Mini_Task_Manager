const { DataTypes, Sequelize, Model } = require("sequelize")

const db = new Sequelize("app", "", "", {
    storage: "./todoApp.sqlite",
    dialect: "sqlite",
    logging: false
}) 
 
 
 const PORT = process.env.PORT || 3500







 module.exports = { PORT, db }