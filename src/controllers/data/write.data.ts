import { DB } from "../../db";

export const WriteController = async (req, res, next) => {
	const data = "" + Math.random() * 100;
	await DB.query("INSERT INTO test_table(data) VALUES($1)", [data]);

	res.json({ status: "200", msg: data });
};
