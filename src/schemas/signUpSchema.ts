import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2,"User must be atleast 2 characters")
    .max(20,"User must be no more then 20 characters")
    

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:'Invalid email'}),
    password: z.string().min(6,{message:'password must be atleast 6 characters'}),
});