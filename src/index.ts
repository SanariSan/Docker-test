import express from "express";
import { dbInit } from "./helpers/db";
import { errorsHandler, routesHandler, settings } from "./loaders";

async function appInit() {
	const app = express();

	settings(app);
	routesHandler(app);
	errorsHandler(app);

	app.listen(3000, () => {
		console.log("started");
	}).on("error", (e: any) => {
		console.log(e);
	});
}

async function init() {
	await dbInit();
	await appInit();
}

init();
