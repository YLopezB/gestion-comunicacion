import express from 'express';

const defaultRouter = express();

defaultRouter.use('/', express.static("src/public/default"));


export default defaultRouter;