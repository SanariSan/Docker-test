import { Router } from "express";
import { ReadController, WriteController } from "../../../controllers/data";
import { asyncHandle } from "../../../helpers/routers";

const DataRouter = Router();

DataRouter.get("/write", asyncHandle(WriteController));
DataRouter.get("/read", asyncHandle(ReadController));

export { DataRouter };
