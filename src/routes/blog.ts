import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
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


blogRouter.use('/*',async (c,next) => {

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

blogRouter.post('/', async (c) => {

    const body = await c.req.json()
    const userId = c.get('userId')

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : userId
        },
    })

    return c.json({
        id : blog.id
    })
})
  
blogRouter.put('/', async (c) => {

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content
        }
    })

    return c.json({
        id : blog.id
    })
})
  
blogRouter.get('/', async (c) => {

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.findFirst({
        where : {
            id : body.id
        }
    })    

    return c.json({
         blog
    })
})
  
blogRouter.get('/bulk', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = prisma.post.findMany()
    
    return c.json({
        blogs
    })
})
