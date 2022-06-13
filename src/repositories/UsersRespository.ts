import { User } from "../model/User";

interface CreateUserDTO{
    name: string;
    email: string;
    password: string;
    created_at: string;
}

class UserRepository{
    private users: User[];

    constructor(){
        this.users = []
    }

    create({name, email, password, created_at}: CreateUserDTO):void{
        const user = new User();

        Object.assign(user, {
            name, email, password, created_at, 
        })

        this.users.push(user)
    }
}