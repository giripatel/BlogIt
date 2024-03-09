import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'
import {signupInput,signinInput} from '@giridhar_patel/blogit-common'


export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

userRouter.post('/signup', async (c) => {
  
  const body = await c.req.json();
  
  const {success} = signupInput.safeParse(body);

  if(!success){
    c.status(411)
    return c.json({
      message : 'Invalid inputs'
    })
  }
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const user = await prisma.user.create({
    data: {
      email : body.email,
      name : body.name,
      password : body.password
    },
  })
  
  const token = await sign({id : user.id},c.env.JWT_SECRET)
  
    return c.json({
      jwt : "Bearer "+token
    })
    
  })
  
  
  // Sign in route
  userRouter.post('/signin', async (c) => {
  
  const body = await c.req.json();
  
  const {success} = signinInput.safeParse(body);
  
  if(!success){
    c.status(411)
    return c.json({
      message : "Invalid inputs"
    })
  }
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
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