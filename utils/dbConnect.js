import mongoose from 'mongoose'

const connection = {}
const dbUser = process.env.dbUser
const dbPassword = process.env.dbPassword
const dbName = process.env.DB_NAME

async function dbConnect() {
  if (connection.isConnected) {
    return
  }
  const db = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster.j3rra.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    userNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect