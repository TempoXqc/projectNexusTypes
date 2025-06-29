import { z } from 'zod';
export declare const EmitUpdatePhaseSchema: z.ZodObject<{
    gameId: z.ZodString;
    phase: z.ZodEnum<["Standby", "Main", "Battle", "End"]>;
    turn: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    phase: "Standby" | "Main" | "Battle" | "End";
    turn: number;
}, {
    gameId: string;
    phase: "Standby" | "Main" | "Battle" | "End";
    turn: number;
}>;
