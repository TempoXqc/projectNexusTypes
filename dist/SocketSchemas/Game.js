"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOverSchema = exports.EmitUpdateGameStateSchema = exports.GameStateUpdateSchema = exports.CreateGameAckSchema = exports.GameStartSchema = void 0;
const zod_1 = require("zod");
const CardTypes_1 = require("../CardTypes");
const Chat_1 = require("./Chat");
exports.GameStartSchema = zod_1.z.object({
    playerId: zod_1.z.number().nullable(),
    gameId: zod_1.z.string().min(1),
    chatHistory: zod_1.z.array(Chat_1.ChatMessageSchema),
    availableDecks: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string().min(1), name: zod_1.z.string().min(1), image: zod_1.z.string().min(1), infoImage: zod_1.z.string().min(1) })),
    playmats: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string(), name: zod_1.z.string(), image: zod_1.z.string() })),
});
// Add schema for createGame ACK
exports.CreateGameAckSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    playerId: zod_1.z.number().nullable(),
    chatHistory: zod_1.z.array(Chat_1.ChatMessageSchema),
    availableDecks: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string().min(1), name: zod_1.z.string().min(1), image: zod_1.z.string().min(1) })),
});
exports.GameStateUpdateSchema = zod_1.z.object({
    player1: zod_1.z
        .object({
        field: zod_1.z.array(CardTypes_1.CardSchema.nullable()).length(8),
        hand: zod_1.z.array(CardTypes_1.CardSchema),
        opponentHand: zod_1.z.array(zod_1.z.unknown()).optional(),
        graveyard: zod_1.z.array(CardTypes_1.CardSchema),
        mustDiscard: zod_1.z.boolean(),
        hasPlayedCard: zod_1.z.boolean(),
        deck: zod_1.z.array(CardTypes_1.CardSchema),
        lifePoints: zod_1.z.number().min(0).max(30).optional(),
        tokenCount: zod_1.z.number().min(0).optional(),
        tokenType: zod_1.z.enum(['assassin', 'engine', 'viking', 'celestial', 'dragon', 'samurai', 'wizard', 'vampire']).nullable().optional(),
    })
        .optional(),
    player2: zod_1.z
        .object({
        field: zod_1.z.array(CardTypes_1.CardSchema.nullable()).length(8),
        hand: zod_1.z.array(CardTypes_1.CardSchema).optional(),
        opponentHand: zod_1.z.array(zod_1.z.unknown()).optional(),
        graveyard: zod_1.z.array(CardTypes_1.CardSchema),
        mustDiscard: zod_1.z.boolean(),
        hasPlayedCard: zod_1.z.boolean(),
        deck: zod_1.z.array(CardTypes_1.CardSchema),
        lifePoints: zod_1.z.number().min(0).max(30).optional(),
        tokenCount: zod_1.z.number().min(0).optional(),
        tokenType: zod_1.z.enum(['assassin', 'engine', 'viking', 'celestial', 'dragon', 'samurai', 'wizard', 'vampire']).nullable().optional(),
    })
        .optional(),
    turn: zod_1.z.number().min(1).optional(),
    phase: zod_1.z.enum(['Standby', 'Main', 'Battle', 'End']).optional(),
    activePlayer: zod_1.z.string().min(1).optional(),
    gameOver: zod_1.z.boolean().optional(),
    winner: zod_1.z.string().min(1).nullable().optional(),
});
exports.EmitUpdateGameStateSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    state: zod_1.z.object({
        hand: zod_1.z.array(CardTypes_1.CardSchema).optional(),
        deck: zod_1.z.array(CardTypes_1.CardSchema).optional(),
        field: zod_1.z.array(CardTypes_1.CardSchema.nullable()).length(8).optional(),
        graveyard: zod_1.z.array(CardTypes_1.CardSchema).optional(),
        hasPlayedCard: zod_1.z.boolean().optional(),
        mustDiscard: zod_1.z.boolean().optional(),
        lifePoints: zod_1.z.number().min(0).max(30).optional(),
        tokenCount: zod_1.z.number().min(0).optional(),
        tokenType: zod_1.z.enum(['assassin', 'engine', 'viking', 'celestial', 'dragon', 'samurai', 'wizard', 'vampire']).nullable().optional(),
    }),
});
exports.GameOverSchema = zod_1.z.object({
    winner: zod_1.z.string().min(1).nullable(),
});
