import express from "express";
import * as contactController from "../controllers/contact.controller.js";
const contactRouter = express.Router();

contactRouter.post("/contact", contactController.saveContactMessage);

export default contactRouter;