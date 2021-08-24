const { Pool } = require("pg");
const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB,
	port: <number>+(<string>process.env.POSTGRES_PORT),
});

export const DB = {
	async query(text, params?: Array<any>) {
		const start = Date.now();
		const res = await pool.query(text, params);
		const duration = Date.now() - start;
		console.log("executed query", { text, duration, rows: res.rowCount });
		return res;
	},
	async getClient() {
		const client = await pool.connect();
		return client;
	},
};
