import {Router} from 'express';

const route01Route = Router();

route01Route.get('/routes01', (request, response) => {
    return response.json({message: 'Working'})
})

export {route01Route}