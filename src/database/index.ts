import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "test",
})

AppDataSource.initialize().then(() => {
    console.log("Data source has been initialized!")
}).catch((err) => {
    console.log("Error")
})