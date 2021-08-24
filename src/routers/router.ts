import { Router } from "express";
import { DataRouter, GeneralRouter } from "./v1";

const routerV1 = Router();
routerV1.use("/", GeneralRouter);
routerV1.use("/data", DataRouter);

export { routerV1 };
