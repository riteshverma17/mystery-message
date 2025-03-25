import {z} from 'zod';

export const messageSchema = z.object({
   content : z
   .string()
   .max(300, "content must be no longer than 300 characters"),

});