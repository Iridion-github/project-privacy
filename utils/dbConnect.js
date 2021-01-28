import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }
  //process.env.MONGO_URI === "mongodb+srv://root:root@cluster.j3rra.mongodb.net/GM_consulting?retryWrites=true&w=majority"
  const db = await mongoose.connect("mongodb+srv://root:root@cluster.j3rra.mongodb.net/GM_consulting?retryWrites=true&w=majority", {
    userNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect