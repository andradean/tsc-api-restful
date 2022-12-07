import { Router, Request, Response} from "express";
import { createMovie, findMovieById, findAllMovies } from "./controller/movie.controller";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";



const router = Router()

export default router.get("/test", (req:Request, res: Response )=>{
    res.status(200).send("aplicação iniciada");
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", findAllMovies)