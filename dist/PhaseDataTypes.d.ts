import { z } from 'zod';
export interface PhaseData {
    phase: 'Standby' | 'Main' | 'Battle' | 'End';
    turn: number;
    nextPlayerId?: number;
}
export declare const PhaseDataSchema: z.ZodObject<{
    phase: z.ZodEnum<["Standby", "Main", "Battle", "End"]>;
    turn: z.ZodNumber;
    nextPlayerId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    phase: "Standby" | "Main" | "Battle" | "End";
    turn: number;
    nextPlayerId?: number | undefined;
}, {
    phase: "Standby" | "Main" | "Battle" | "End";
    turn: number;
    nextPlayerId?: number | undefined;
}>;
