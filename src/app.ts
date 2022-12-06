require ('dotenv').config()
import express  from "express";
import config from "config";
import router from './router'
import db from '../config/db'
import logger from "../config/logger";
import morganMiddleware from "./middleware/morgan.middleware";




const app: express.Application = express();

const port = config.get<number>('port')

app.use(express.json())

app.use(morganMiddleware);

app.use("/", router)


app.listen(port, async()=>{
    
    await db();
    logger.info(`servidor rodando na porta ${port}`)
})

