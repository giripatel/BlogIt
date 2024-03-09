import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign,verify} from 'hono/jwt'
import {createBlogInput,updateBlogInput} from '@giridhar_patel/blogit-common'

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },

    Variables :{
        userId : string,
    }
}>();


blogRouter.use('/*',async (c,next) => {

    const header = c.req.header('authorization') || "";
    console.log("Header : " + header);
    
    if(!header){
        c.status(411)
      return  c.json({
            message : "Please login"
        })
    }

    console.log("Reaching log lfjaljflfal");
    
    const token = header.split(" ")[1];
  
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

    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message : "Invalid inputs"
        })
    }

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

    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message : "Invalid inputs"
        })
    }
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
  
blogRouter.get('/bulk', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany()
    
    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {

    const body = await c.req.param() || "" ;

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
  

