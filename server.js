import "dotenv/config";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

const server = app.listen(process.env.SERVER_PORT, () => {
	console.log(`The application started  http://localhost:${server.address().port}/`);
});
