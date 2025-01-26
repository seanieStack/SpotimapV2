import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import loginRouter from "./routes/login.js";
import callbackRouter from "./routes/callback.js";

export const app = express();
const port = process.env.PORT || 3000;

app.use(loginRouter, callbackRouter);

app.listen(port, () => {
    console.log(`Spotimap listening on port: ${port}`)
})