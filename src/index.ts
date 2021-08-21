import express, { Response } from "express";
import { Client } from "pg";

const app = express();
const clientCreds = {
	user: "postgres",
	password: "postgres",
	host: "127.0.0.1", //?
	database: "docker_test_db",
	port: 5432,
};

const asyncHandle = (mw) => (req, res, next) => mw().catch((e) => next(e));

app.get("/", (req, res, next) => {
	console.log("got request");
	res.json({ status: "200" });
});

app.get(
	"/add",
	asyncHandle(async (req, res, next) => {
		const data = "" + Math.random() * 100;
		const client = new Client(clientCreds);
		await client.connect();
		await client.query("INSERT INTO test_table(data) VALUES($1)", [data]);
		await client.end();

		res.json({ status: "200", msg: data });
	}),
);

app.get(
	"/read",
	asyncHandle(async (req, res, next) => {
		const client = new Client(clientCreds);
		await client.connect();
		const db_res = await client.query("SELECT * FROM test_table");
		const data = db_res.rows.map((_) => _.data);
		await client.end();

		res.json({ status: "200", msg: data });
	}),
);

app.use((err, req, res: Response, next) => {
	console.log(err);
	res.sendStatus(500);
});

async function init() {
	const client = new Client(clientCreds);
	await client.connect();
	await client.query(
		"CREATE TABLE IF NOT EXISTS test_table(id INT(11) NOT NULL AUTO_INCREMENT, data VARCHAR(50) NOT NULL, PRIMARY KEY (id))",
	);

	app.listen(3000, () => {
		console.log("started");
	}).on("error", (e: any) => {
		console.log(e);
	});
}

init();
