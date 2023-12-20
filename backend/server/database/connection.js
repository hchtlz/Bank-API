const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://cluster0.evrnoex.mongodb.net/'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, dbName: 'Cluster0', user: 'chantelauzehugo', pass: 'EjJjgromgDhDf2qc' })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}