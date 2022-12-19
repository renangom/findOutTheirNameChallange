import express from 'express';
import  names, { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log('Server is running'))