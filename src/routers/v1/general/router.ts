import { Router } from "express";

const GeneralRouter = Router();

GeneralRouter.get("/", (req, res, next) => {
	console.log("general router");
	res.json({ status: "200" });
});

export { GeneralRouter };
