import express = require("express")
import levelsRouter from "./controllers/LevelController/LevelController";
import cookieParser from 'cookie-parser'
import ErrorHandler from "./middlewares/error-handler";
import expressBootstrap from "./expressBootstrap";

const errorHandler = new ErrorHandler(console);

const app = express();
const port = 8000;

expressBootstrap(app)

app.use(cookieParser())
app.use(express.json());

app.use("/levels", levelsRouter);

app.get("/", (req, res) => {
    console.log(req.headers["user-agent"]);
    console.log(req.ip);
    console.log(req.ips);
    res.send("Have a good day")
})

app.use(errorHandler.md)


app.listen(port, ()=>{
    console.log(`Server has been started on port ${port}`);
})