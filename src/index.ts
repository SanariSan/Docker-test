import express, { Response } from "express";
import { DB } from "./db";
import { routerV1 } from "./routers/router";

const app = express();

app.use(routerV1);
app.use((err, req, res: Response, next) => {
	console.log(err);
	res.sendStatus(500);
});

async function init() {
	await DB.query("CREATE TABLE IF NOT EXISTS test_table (data VARCHAR(50) NOT NULL);");

	app.listen(3000, () => {
		console.log("started");
	}).on("error", (e: any) => {
		console.log(e);
	});
}

init();
