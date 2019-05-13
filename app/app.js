import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorhandler from 'errorhandler';
import { Server } from 'http';
import routes from './routes';

export const app = express();
export const server = Server(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());

app.use((req, res, next) => {
  req.models = app.get('models');
  next();
});

routes(app);
