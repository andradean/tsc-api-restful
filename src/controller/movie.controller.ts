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
        
        
         }
    
}