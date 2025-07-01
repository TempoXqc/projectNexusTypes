"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitSendMessageSchema = exports.ChatMessageSchema = void 0;
// types/SocketSchemas/Chat.ts
const zod_1 = require("zod");
exports.ChatMessageSchema = zod_1.z.object({
    playerId: zod_1.z.number().min(1),
    message: zod_1.z.string().min(1, 'Le message ne peut pas être vide.'),
});
exports.EmitSendMessageSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1, 'L’ID de la partie ne peut pas être vide.'),
    message: zod_1.z.string().min(1, 'Le message ne peut pas être vide.'),
});
