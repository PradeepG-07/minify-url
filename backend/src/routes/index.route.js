import express from "express";
import urlRouter from "./url.route.js";
import contactRouter from "./contact.route.js";

const mainRouter = express.Router();

mainRouter.use(urlRouter, contactRouter);

export default mainRouter;