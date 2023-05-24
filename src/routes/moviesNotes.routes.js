const { Router } = require("express");

const MoviesNotesController = require("../controllers/MoviesNotesController");

const MoviesNotesRoutes = Router();

const moviesNotesController = new MoviesNotesController();

MoviesNotesRoutes.get("/", moviesNotesController.index); // criar
MoviesNotesRoutes.post("/:user_id", moviesNotesController.create); // criar
MoviesNotesRoutes.delete("/:id", moviesNotesController.delete); // criar
MoviesNotesRoutes.get("/:id", moviesNotesController.show); // criar

module.exports = MoviesNotesRoutes;
