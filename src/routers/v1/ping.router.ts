import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import {  validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler); // TODO: Resolve this TS compilation issue

pingRouter.get('/about', (req, res) => {
    res.status(200).send('');
});

export default pingRouter;