import express from 'express'
import swaggerUi from 'swagger-ui-express'

import {route01Route} from './routes/route01.routes'
import {userRoute} from './routes/user.routes'

import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile) )

app.use(route01Route)
app.use(userRoute)



app.listen(3333, () => console.log('runnings at 3333'))