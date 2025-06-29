import { z } from 'zod';
export interface Card {
    id: string;
    name: string;
    image: string;
    exhausted?: boolean;
}
export declare const CardSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    image: z.ZodString;
    exhausted: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    image: string;
    exhausted?: boolean | undefined;
}, {
    id: string;
    name: string;
    image: string;
    exhausted?: boolean | undefined;
}>;
