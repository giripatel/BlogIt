import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'
const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.use('api/v1/blog/*',async (c,next) => {

  const header = c.req.header('authorization') || "";

  // const token = header.split(" ")[1]
  const token = "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.e30.4DPd06YywktH_X9ucpUtehBeKTYD-qjcG3H-cF_y8BR8vZH1YXnOtfvcKZjDwQPw";
  console.log(header.split(" ")[0]);
  
  console.log(token);
  console.log(c.env.JWT_SECRET);
  
  const auth = await verify(token,c.env.JWT_SECRET,"HS384");
  console.log(await verify(token,c.env.JWT_SECRET,"HS384"));
  
  console.log(auth)
  console.log(auth.id)
  if(auth.id){
    c.json({
      message : "working....."
    })
    next()
  }

  return c.json({
    message : "unauthorized"
  })
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

const token = await sign({id : user.id},c.env.JWT_SECRET,"HS384")

  return c.json({
    jwt : token
  })
  
})
app.post('api/v1/user/signin', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


  const body = await c.req.json();

  const user = prisma.user.findUnique({
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

  const token = await sign({id : body.id}, c.env.JWT_SECRET,"HS384")
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
