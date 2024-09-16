import express from "express";
import path from "path";
import fileUpload from "express-fileupload";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config({ path: "./config/.env" });

const app = express();
const port = 8080;
const staticPathPublic = path.resolve("public");

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.static(staticPathPublic));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
		cookie: {
            httpOnly: true,
            secure: false,
        },
	})
);
app.use("/", routes);

app.listen(port, ()=> {
    console.log(`>> Server is running on http://localhost:${port}`);
})