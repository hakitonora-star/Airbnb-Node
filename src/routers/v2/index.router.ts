import express from 'express';

const v2Router = express.Router();
v2Router.get('/',(req, res) => {
    res.status(200).send('HI');
})


export default v2Router;