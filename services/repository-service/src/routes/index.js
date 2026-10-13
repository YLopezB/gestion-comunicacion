import express from 'express';
import defaultRouter from './default.js';

const indexRouter = express();

indexRouter.use('/default', defaultRouter);


export default indexRouter;
