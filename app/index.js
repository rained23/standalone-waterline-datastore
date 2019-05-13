import {} from 'dotenv/config';
import { server } from './app';
import config from './config';
import * as connect from './db/connect';

const port = process.env.PORT || config.http.port;

server.listen(port, () => {
  connect.listen();
  console.log(`Server started on port ${port}`);
});
