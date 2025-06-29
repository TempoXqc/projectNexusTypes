import { z } from 'zod';
export declare const PlayerReadySchema: z.ZodObject<{
    playerId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    playerId: number;
}, {
    playerId: number;
}>;
export declare const EmitPlayerReadySchema: z.ZodObject<{
    gameId: z.ZodString;
    playerId: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    playerId: number | null;
}, {
    gameId: string;
    playerId: number | null;
}>;
