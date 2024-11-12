import express from "express";
import * as urlController from "../controllers/url.controller.js";
const urlRouter = express.Router();

urlRouter.post("/minify", urlController.minify);

urlRouter.get("/redirect/:miniUrlCode", urlController.redirectToLongUrl);

export default urlRouter;