import { z } from 'zod';
export declare const ChatMessageSchema: z.ZodObject<{
    playerId: z.ZodNumber;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    playerId: number;
}, {
    message: string;
    playerId: number;
}>;
export declare const EmitSendMessageSchema: z.ZodObject<{
    gameId: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    gameId: string;
}, {
    message: string;
    gameId: string;
}>;
