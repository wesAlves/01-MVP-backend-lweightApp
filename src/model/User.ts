import {v4 as uuidv4} from 'uuid'

class User{
    id?: string;
    name: string;
    email: string;
    created_at: Date;
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

    create(){
        const newUser = {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            created_at:this.created_at
        }

        return newUser
    }

}

export {User}