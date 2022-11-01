import mongoose from "mongoose";
import config from "config"

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
      await mongoose.connect(dbUri) 
      console.log("conectado ao banco de dados!")
    
    } catch (error) {
        console.log("erro ao conectar ao banco de dados")
        console.log(`erro ${error}`)
    }
}


export default connect;