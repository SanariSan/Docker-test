import { Router } from "express";
import { ReadController, WriteController } from "../../../controllers/data";
import { MainController } from "../../../controllers/general";
import { asyncHandle } from "../../../helpers/routers";

const DataRouter = Router();

DataRouter.get("/", MainController);
DataRouter.get("/write", asyncHandle(WriteController));
DataRouter.get("/read", asyncHandle(ReadController));

export { DataRouter };
