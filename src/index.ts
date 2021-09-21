import express from "express";
import { RequestError } from "./core/errors";
import { dbInit } from "./helpers/db";
import { errorsHandler, routesHandler, settings } from "./loaders";

async function appInit() {
	const app = express();

	settings(app);
	routesHandler(app);
	errorsHandler(app);

	// PORT for heroku, PORT_BACKEND is a fallback for local dev
	app.listen(process.env.PORT || process.env.PORT_BACKEND, () => {
		console.log("started");
	}).on("error", (e: any) => {
		console.log(e);
	});
}

async function init() {
	await dbInit();
	await appInit();

	//failed request, just example
	try {
		const errMessage = "Failed to fetch https://test.com";
		throw new RequestError(errMessage);
	} catch (err) {
		if (err instanceof RequestError) {
			console.log(JSON.stringify(err, null, 2));
		}
	}
}

init();
