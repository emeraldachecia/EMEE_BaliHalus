import mysql from "mysql2/promise";

export const BaliHalusDB = await mysql.createConnection({
	host: "localhost",
	database: "em_balihalus",
	user: "root",
	password: "",
});

try {
	await BaliHalusDB.connect();
	console.log(">> Koneksi database berhasil");
} catch (err) {
	console.error(">> Kesalahan koneksi database:", err);
}
