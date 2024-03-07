import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'



const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
  Variables : {
    userId : string
  }
}>()

app.use('api/v1/blog/*',async (c,next) => {

  const header = c.req.header('authorization') || "";
  const token = header.split(" ")[1];

  if(!token){
    c.json({
      message : "Unauthorized"
    })
  }

  const secretKey = c.env.JWT_SECRET
  const payload = await verify(token,secretKey,);


  if(!payload){
    return c.json({
      message : "Unauthorized"
    })
  }
  c.set("userId",payload.id )
   await next()

})


app.get('/', async (c) => {
  return c.text("hello")
})

app.post('api/v1/user/signup', async (c) => {

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



app.post('api/v1/user/signin', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where : {
      email: body.email,
      password: body.password
    }
  })

  if(!user){
    return c.json({
      message : "User is not found"
    })
  }

  const token = await sign({id : user.id}, c.env.JWT_SECRET)
  return c.json({
    token : "Bearer "+token
  })
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
