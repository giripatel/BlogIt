import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { AcceleratePromise, withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
  Variables : {
    userId : string,
  }
}>()

app.use('/api/v1/*',cors())

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

// Signup route

export default app
