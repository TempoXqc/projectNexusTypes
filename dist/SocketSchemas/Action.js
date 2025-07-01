"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitHandleAssassinTokenDrawSchema = exports.EmitPlaceAssassinTokenAtOpponentDeckBottomSchema = exports.EmitAddAssassinTokenToOpponentDeckSchema = exports.EmitUpdateTokenCountSchema = exports.EmitUpdateLifePointsSchema = exports.EmitAttackCardSchema = exports.EmitExhaustCardSchema = exports.EmitEndTurnSchema = exports.EmitJoinGameSchema = void 0;
// types/SocketSchemas/Action.ts
const zod_1 = require("zod");
const CardTypes_1 = require("../CardTypes");
exports.EmitJoinGameSchema = zod_1.z.string().min(1);
exports.EmitEndTurnSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    nextPlayerId: zod_1.z.number().min(1),
});
exports.EmitExhaustCardSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    cardId: zod_1.z.string().min(1),
    fieldIndex: zod_1.z.number().min(0).max(7),
});
exports.EmitAttackCardSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    cardId: zod_1.z.string().min(1),
});
exports.EmitUpdateLifePointsSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    lifePoints: zod_1.z.number().min(0).max(30),
});
exports.EmitUpdateTokenCountSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    tokenCount: zod_1.z.number().min(0),
});
exports.EmitAddAssassinTokenToOpponentDeckSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    tokenCount: zod_1.z.number().min(0).max(8),
    tokenCard: CardTypes_1.CardSchema,
});
exports.EmitPlaceAssassinTokenAtOpponentDeckBottomSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    tokenCard: CardTypes_1.CardSchema,
});
exports.EmitHandleAssassinTokenDrawSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    playerLifePoints: zod_1.z.number().min(0).max(30),
    opponentTokenCount: zod_1.z.number().min(0).max(8),
});
