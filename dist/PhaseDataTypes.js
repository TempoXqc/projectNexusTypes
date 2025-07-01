"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseDataSchema = void 0;
// types/PhaseDataTypes.ts
const zod_1 = require("zod");
exports.PhaseDataSchema = zod_1.z.object({
    phase: zod_1.z.enum(['Standby', 'Main', 'Battle', 'End']),
    turn: zod_1.z.number().min(1),
    nextPlayerId: zod_1.z.number().optional(),
});
