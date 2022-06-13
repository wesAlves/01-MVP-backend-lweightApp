import { Request, Response, Router } from "express";
import { AppDataSource } from "../database";
import { User } from "../model/User";
import { UserRepository } from "../repositories/UsersRespository";

export const userRoute = Router();

const userReposisotry = new UserRepository()

// userRoute.get('/user', (request: Request, response: Response) =>{
//     const dataSource = AppDataSource.manager.find('John')

//     dataSource
    
//     return response.json({user: "John Doe"})
// })

userRoute.post('/user', (request: Request, response: Response) => {
    const {name, email, password} = request.body;

    userReposisotry.create({
        name, email, password, created_at: new Date()
    })




    return response.status(201).send()
})