// import { sequelize, Sequelize } from '../models'
import { sequelize } from '../models'

async function connection() {
    try {
        await sequelize.authenticate({ alter: true })
        console.log('Database connected successfully!')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export default connection