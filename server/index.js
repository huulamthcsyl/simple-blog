import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';


import postRouter from './routers/posts.js';

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/posts', postRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

