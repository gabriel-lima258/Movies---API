const { Router } = require("express");

const MoviesTagsController = require("../controllers/MoviesTagsController");

const MoviesTagsRoutes = Router();

const moviesTagsController = new MoviesTagsController();

MoviesTagsRoutes.get("/:user_id", moviesTagsController.index);

module.exports = MoviesTagsRoutes;