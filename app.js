import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'
import env from 'dotenv';
env.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

//response 404 status
app.use((req, res, next) => {
    res.sendStatus(404);
});

//error handle
app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8081);