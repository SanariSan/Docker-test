import { Router } from "express";
import { GeneralController } from "../../../controllers/general";

const GeneralRouter = Router();

GeneralRouter.get("/", GeneralController);

export { GeneralRouter };
