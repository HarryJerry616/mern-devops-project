import express from 'express'
import cors from 'cors'
import { ORIGIN } from '../constants/index'

// initialize app
const app = express()

// Sentry request instrumentation

// middlewares
app.use(cors({ origin: ORIGIN }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

export default app