import "dotenv/config";
import express from "express";
import morgan from "morgan";
// import path from "path"
import { engine } from "express-handlebars";
import * as path from "path";
// import IndexRoute from "./routes/index.js";
// import ProductRoute from "./routes/product_route.js";
// import bodyParser from "body-parser";
// import methodOverride from "method-override"



/* initialize express and access port */
const app = express()
const port = process.env.PORT;

/* Test get request */
app.get('/', (req, res) => res.send("This is project demo 2"));


app.listen(port, () => {
    console.log(`App listen to port ${port}`);
});
