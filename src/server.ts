import express from 'express';
import  names, { routes } from './routes';
import fs, { read } from 'fs'
import readline from 'readline'
import { Readable } from 'stream';
import findName from './functions/findNameFunction';

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log('Server is running'))