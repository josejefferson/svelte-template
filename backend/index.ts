import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import env from './config/env'
import routes from './routes/index'

const PORT = env.port || 8888

const app = express()
if (env.cors) app.use(cors())
app.set('trust proxy', true)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

function serverListen(onlyBackend = false) {
  app.listen(PORT, () => {
    console.log(`> ${onlyBackend ? 'Back-end server' : 'Server'} listening on port ${PORT}`)
  })
}

if (env.isNodemon) serverListen(true)
else {
  import('../build/handler.js')
    .then(({ handler }) => {
      app.use(handler)
      serverListen()
    })
    .catch((err) => {
      console.log('Error importing "../build/handler.js". Did you run "yarn build"?')
      throw err
    })
}
