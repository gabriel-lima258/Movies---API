const { Router } = require("express");

const usersRouter = require("./user.routes")
const MoviesNotesRouter = require("./moviesNotes.routes")
const MoviesTagsRouter = require("./moviesTags.routes")

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", MoviesNotesRouter)
routes.use("/tags", MoviesTagsRouter)

module.exports = routes;