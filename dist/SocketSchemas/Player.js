"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitPlayerReadySchema = exports.PlayerReadySchema = void 0;
// types/SocketSchemas/Player.ts
const zod_1 = require("zod");
exports.PlayerReadySchema = zod_1.z.object({
    playerId: zod_1.z.number().min(1),
});
exports.EmitPlayerReadySchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    playerId: zod_1.z.number().min(1).nullable(),
});
