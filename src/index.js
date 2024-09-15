import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import routes from "./routes.js"
import bodyParser from "body-parser";

const app = express();
const port = 8080;
const staticPathPublic = path.resolve("public");

app.set("view engine", "ejs");

app.use(express.static(staticPathPublic));
app.use(expressLayouts);
app.use("/", routes);

app.listen(port, ()=> {
    console.log(`>> Server is running on http://localhost:${port}`);
})