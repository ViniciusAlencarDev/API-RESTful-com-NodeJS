const Sequelize = require('sequelize')

const connection = new Sequelize('apirest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection