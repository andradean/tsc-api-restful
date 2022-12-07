import { Request, Response } from "express";
import { Logger } from "winston";
import logger from "../../config/logger";
import { movieModel } from "../model/movie";

export async function createMovie(req:Request, res:Response) {
    try {
        const data = req.body
        const movie = await movieModel.create(data)
        res.status(200).send(movie)

        
    } catch (e: any) {
        logger.error(`erro no sistema ${e.message}`)
        return res.status(500).json({msg:"Ocorreu um erro inesperado, tente novamente mais tarde"})

        
        
         }
    
} 

export async function findMovieById(req:Request, res:Response ) {

    try {
        const id = req.params.id
        const movie = await movieModel.findById(id)
        if(!movie){
            return res.status(404).json({error:"O filme não foi encontrado"})

        }

        return res.status(200).json(movie)


    } catch (e: any){
        logger.error(`erro no sistema ${e.message}`)
        return res.status(500).json({msg:"Ocorreu um erro inesperado, tente novamente mais tarde"})


    }
    
}

export async function findAllMovies(req:Request, res:Response ) {

    try {
        const movie = await movieModel.find()
        if(!movie){
            return res.status(404).json({error:"Os filmes não foram encontrados"})

        }

        return res.status(200).json(movie)


    } catch (e: any){
        logger.error(`erro no sistema ${e.message}`)
        return res.status(500).json({msg:"Ocorreu um erro inesperado, tente novamente mais tarde"})


    }


    
}

export async function findOneAndUpdateMovie(req:Request, res:Response){
    try{
        const id = req.params.id
        const data = req.body
        
        const movie = await movieModel.findById(id)
        if(!movie){
            return res.status(404).json({error:"O filme não foi encontrado, verifique o id"})
        }
       
       await movieModel.updateOne({_id: id}, data)

        return res.status(200).json(data)
    
    }  catch (e: any){
        logger.error(`erro no sistema ${e.message}`)
        return res.status(500).json({msg:"Ocorreu um erro inesperado, tente novamente mais tarde"})


    }
    
}

export async function deleteMovie(req:Request, res:Response) {
    try{
        const id = req.params.id
        
        const movie = await movieModel.findById(id)
        if(!movie){
            return res.status(404).json({error:"O filme não foi encontrado, verifique o id"})
        }

        await movie.delete()

        return res.status(200).json({msg:"Filme removido com sucesso!"})

    } catch(e: any){
        logger.error(`erro no sistema ${e.message}`)
        return res.status(500).json({msg:"Ocorreu um erro inesperado, tente novamente mais tarde"})

    }
    
}