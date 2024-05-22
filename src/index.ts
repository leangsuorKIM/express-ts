import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';
import { PORT, DATABASE_URL } from '../config';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => { console.log(`http://localhost:${PORT}/`); })

const MONGO_URL = DATABASE_URL;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, {
    serverSelectionTimeoutMS: 30000
    }).then(() => console.log('Mongo connection success!'))
    .catch((error: Error) => console.error('Mongo connection error:', error));

mongoose.connection.on('error', (error: Error) => console.error('MongoDB connection error:', error));

app.use('/', router())