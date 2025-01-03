import './geminiApi.js';
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.use(express.json());

//route
import router from './router.js';
app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});