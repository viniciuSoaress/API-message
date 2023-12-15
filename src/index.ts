import express from 'express'
import cors from 'cors'

import { UserRouter } from './router/RouterUser'
import { RouterMessage } from './router/RouterMessage'

const app = express()


app.use(express.json())
app.use(cors())

app.use('/user', UserRouter)
app.use('/message', RouterMessage)

app.listen(8182, () => {
  console.log('api em uso')
})
