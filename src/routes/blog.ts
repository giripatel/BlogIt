import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },

    Variables :{
        userId : string
    }
}>();


blogRouter.use('api/v1/blog/*',async (c,next) => {

    const header = c.req.header('authorization') || "";
    const token = header.split(" ")[1];
  
    if(!token){
      c.status(401)
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

blogRouter.post('/', (c) => {
    return c.text("hello")
})
  
blogRouter.put('/', (c) => {
    return c.text("hello")
})
  
blogRouter.get('/', (c) => {
    return c.text("this is param route")
})
  
blogRouter.get('/bulk', (c) => {
    return c.text("hello")
})
