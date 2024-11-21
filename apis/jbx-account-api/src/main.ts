/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import accountRouter from './routers/account.router'; // Add this line to import the Task API routes

const app = express();
const apiRouter = express.Router();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware to parse the request body as JSON
app.use(express.json()); 

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware to handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});
app.use('/api', apiRouter); 


// Add the routers here
apiRouter.use('/accounts', accountRouter);


const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

