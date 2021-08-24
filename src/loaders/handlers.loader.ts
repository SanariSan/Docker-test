import { Express, Response } from "express";
import path from "path";
import { routerV1 } from "../routers";

function routesHandler(app: Express) {
	app.use(`/v1`, routerV1);

	if (process.env.NODE_ENV === "production") {
		app.get("/*", (req, res: Response, next) => {
			res.sendFile(path.resolve(<string>process.env.PWD, "static/index.html"));
		});
	} else {
		app.get("/*", (req, res: Response, next) => {
			res.sendStatus(404);
		});
	}
}

function errorsHandler(app) {
	app.use((err, req, res: Response, next) => {
		console.log(err);
		res.sendStatus(500);
	});
}

export { routesHandler, errorsHandler };
