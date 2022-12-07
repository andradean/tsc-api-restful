import { Router, Request, Response} from "express";
import { createMovie, findMovieById, findAllMovies, findOneAndUpdateMovie, deleteMovie } from "./controller/movie.controller";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";



const router = Router()

export default router.get("/test", (req:Request, res: Response )=>{
    res.status(200).send("aplicação iniciada");
})
 .post("/movie", movieCreateValidation(), validate, createMovie)
 .get("/movie/:id", findMovieById)
 .get("/movie", findAllMovies)
 .patch("/movie/:id", findOneAndUpdateMovie)
 .delete("/movie/:id", deleteMovie)