import express from 'express'
import cors from 'cors'

import { UserRouter } from './router/RouterUser'
import { RouterMessage } from './router/RouterMessage'

const app = express()

const port = process.env.PORT || 8182


app.use(express.json())
app.use(cors())

app.get('/', () => 'API em funcionamento')

app.use('/user', UserRouter)
app.use('/message', RouterMessage)

app.listen(port, () => {
  console.log('')
})
