import express from 'express';
import routes from './routes/routes.js';

const app = express();

//middleware
app.use(express.json());

app.use(routes);

export default app;