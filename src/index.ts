import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from 'hono/jwt'
const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.get('/', async (c) => {
  

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body = await c.req.json();

const user = await prisma.user.create({
  data: {
    email : body.email,
    name : body.name,
    password : body.password
  },
})

const token = await sign({id : user.id},c.env.JWT_SECRET)

  return c.json({
    jwt : token
  })
})

app.post('api/v1/user/signup', (c) => {
  return c.text("hello")
})
app.post('api/v1/user/signin', (c) => {
  return c.text("hello")
})

app.post('api/v1/blog', (c) => {
  return c.text("hello")
})

app.put('api/v1/blog', (c) => {
  return c.text("hello")
})

app.get('api/v1/blog/:id', (c) => {
  return c.text("hello")
})

app.get('api/v1/blog/bulk', (c) => {
  return c.text("hello")
})

export default app
