import express from "express";
import cors from 'cors';
import router from "./routes/route.js";
import bodyParser from 'body-parser';
import dbConnection from "./database/db.js";

const PORT=process.env.PORT || 8000;

const app=express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/',router);


dbConnection();

app.listen(PORT,()=>console.log(`server is running on PORT: ${PORT}`));

