import { Request, Response } from "express";
import logger from "../../config/logger";
import { movieModel } from "../model/movie";

export async function createMovie(req:Request, res:Response) {
    res.status(200).send("Filme criado com sucesso")
}