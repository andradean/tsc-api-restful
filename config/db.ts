import mongoose from "mongoose";
import config from "config"
import logger from "../config/logger";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
      await mongoose.connect(dbUri) 
      logger.info("conectado ao banco de dados!")
    
    } catch (error) {
        logger.info("erro ao conectar ao banco de dados")
        logger.info(`erro ${error}`)
        process.exit(1)
    }
}


export default connect;