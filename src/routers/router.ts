import { Router } from "express";
import { DataRouter, GeneralRouter } from "./v1";

const routerV1 = Router();
routerV1.use(DataRouter);
routerV1.use(GeneralRouter);

export { routerV1 };
