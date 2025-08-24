import "./init.js";
import express from "express";
import router from "./routes/index.js";
import passport from "./auth/passport.js";

const PORT = 4000;
const app = express();

app.use(express.json());

app.use(passport.initialize());

app.use("/", router);

app.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening on localhost:${PORT}`);
});
