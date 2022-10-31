import express  from "express";
import config from "config";
import router from './router'




const app: express.Application = express();

const port = config.get<number>('port')

app.use(express.json())

app.use("/api/", router)


app.listen(port, async()=>{
    console.log(`servidor rodando na porta ${port}`)
})

