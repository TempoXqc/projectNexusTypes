"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player1ChoseDeckSchema = exports.WaitingForPlayer1ChoiceSchema = exports.EmitChooseDeckSchema = exports.DeckSelectionDoneSchema = exports.DeckSelectionUpdateSchema = void 0;
// types/SocketSchemas/Deck.ts
const zod_1 = require("zod");
exports.DeckSelectionUpdateSchema = zod_1.z.object({
    1: zod_1.z.string().min(1).nullable(),
    2: zod_1.z.array(zod_1.z.string().min(1)),
});
exports.DeckSelectionDoneSchema = zod_1.z.object({
    player1DeckId: zod_1.z.string().min(1),
    player2DeckIds: zod_1.z.array(zod_1.z.string().min(1)),
    selectedDecks: zod_1.z.array(zod_1.z.string().min(1)),
});
exports.EmitChooseDeckSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    playerId: zod_1.z.number().min(1).nullable(),
    deckId: zod_1.z.string().min(1),
});
exports.WaitingForPlayer1ChoiceSchema = zod_1.z.object({});
exports.Player1ChoseDeckSchema = zod_1.z.object({});
