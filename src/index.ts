import express, { Response } from "express";

const app = express();

app.get("/", (req, res, next) => {
	console.log("got request");
	res.json({ status: "200" });
});

app.use((err, req, res: Response, next) => {
	console.log(err);
	res.sendStatus(500);
});

app.listen(3000, () => {
	console.log("started");
}).on("error", (e: any) => {
	console.log(e);
});
