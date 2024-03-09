import z, { string } from 'zod';

export const signupValidation = z.object({
    email : string().email(),
    name : string().min(3),
    password : string().min(6)
})

export const signinValiation = z.object({
    email : string().email(),
    password : string().min(6)
})

export const blogCreateValidation = z.object({
    title : string(),
    content : string(),
    userId : string()
})

export const blogUpdateValidation = z.object({
    id : string(),
    title : string(),
    content : string()
})