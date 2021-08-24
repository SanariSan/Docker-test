import { DB } from "../../db";

export const ReadController = async (req, res, next) => {
	const db_res = await DB.query("SELECT * FROM test_table");
	const data = db_res.rows.map((_) => _.data);

	res.json({ status: "200", msg: data });
};
