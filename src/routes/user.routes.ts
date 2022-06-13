import { Request, Response, Router } from "express";
import { AppDataSource } from "../database";

export const userRoute = Router();

userRoute.get('/user', (request: Request, response: Response) =>{
    const dataSource = AppDataSource.manager.find('John')

    dataSource
    
    return response.json({user: "John Doe"})
})

userRoute.post('/user', (request: Request, response: Response) => {
    const {name, email, password} = request.body;

    const newUser = {name, email, password, createdAt: new Date()}

    return response.status(201).json({...newUser})
})