import z, { string } from 'zod';

export const signupInput = z.object({
    email : string().email(),
    name : string().min(3),
    password : string().min(6)
})

export const signinInput = z.object({
    email : string().email(),
    password : string().min(6)
})

export const createBlogInput = z.object({
    title : string(),
    content : string(),
    userId : string()
})

export const updateBlogInput = z.object({
    id : string(),
    title : string(),
    content : string()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogValidation = z.infer<typeof updateBlogInput>