const {Sequelize} = require('sequelize');
 
//Conexion con SQLITE 3

const sequelize =  new Sequelize({
    dialect: "slite",
    storage:"./example.db",   
});

