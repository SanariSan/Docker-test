import { DB } from "../../db";

async function dbInit() {
	await DB.query("CREATE TABLE IF NOT EXISTS test_table (data VARCHAR(50) NOT NULL);").catch(
		(err) => {
			console.log("query");
			console.log(err);
		},
	);
}

export { dbInit };
