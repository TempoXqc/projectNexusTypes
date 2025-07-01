"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitUpdatePhaseSchema = void 0;
// types/SocketSchemas/Phase.ts
const zod_1 = require("zod");
exports.EmitUpdatePhaseSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    phase: zod_1.z.enum(['Standby', 'Main', 'Battle', 'End']),
    turn: zod_1.z.number().min(1),
});
