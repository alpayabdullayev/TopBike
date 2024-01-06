import express from "express";
import upload from "../middleware/upload.js";
import { createCollection, deleteCollections, getAllCollections } from "../controller/collectionController.js";

export const CollectionRouter = express.Router();

CollectionRouter.post("/collection", upload.single("image"), createCollection);
CollectionRouter.get("/collection",  getAllCollections);
CollectionRouter.delete("/collection/:id",  deleteCollections);
