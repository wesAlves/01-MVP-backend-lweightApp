import { Request, Response, Router } from "express";
import { AppDataSource } from "../database";
import {v4 as uuidv4} from 'uuid'
import { User } from "../model/User";

export const userRoute = Router();

const users: User[] = []

// userRoute.get('/user', (request: Request, response: Response) =>{
//     const dataSource = AppDataSource.manager.find('John')

//     dataSource
    
//     return response.json({user: "John Doe"})
// })

userRoute.post('/user', (request: Request, response: Response) => {
    const {name, email, password} = request.body;

    const newUser: User = {name, email, password, created_at: new Date(), id: uuidv4() }

    users.push(
        newUser
    )

    return response.status(201).json({...newUser})
})