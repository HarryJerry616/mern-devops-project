import dotenv from 'dotenv'
dotenv.config()

import app from './utils/app' // (server)
import mongo from './utils/mongo' // (database)
import { PORT } from './constants/index'
import authRoutes from './routes/auth'
import taskRoutes from './routes/task'
import client from 'prom-client'
client.collectDefaultMetrics()

const bootstrap = async () => {
  await mongo.connect()

  app.get('/', (req, res) => {
    res.status(200).send(`Hello from ${process.env.SERVER_NAME}`)
})

  app.get('/healthz', (req, res) => {
    res.status(204).end()
  })

  app.use('/auth', authRoutes)
  app.use('/tasks', taskRoutes)
  app.get("/whoami", (req, res) => {
  res.json({
    server: process.env.SERVER_NAME,
  });
});
  app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})
  // add rest of routes here...

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
