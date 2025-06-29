import { z } from 'zod';
export declare const EmitJoinGameSchema: z.ZodString;
export declare const EmitEndTurnSchema: z.ZodObject<{
    gameId: z.ZodString;
    nextPlayerId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    nextPlayerId: number;
}, {
    gameId: string;
    nextPlayerId: number;
}>;
export declare const EmitExhaustCardSchema: z.ZodObject<{
    gameId: z.ZodString;
    cardId: z.ZodString;
    fieldIndex: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    cardId: string;
    fieldIndex: number;
}, {
    gameId: string;
    cardId: string;
    fieldIndex: number;
}>;
export declare const EmitAttackCardSchema: z.ZodObject<{
    gameId: z.ZodString;
    cardId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    cardId: string;
}, {
    gameId: string;
    cardId: string;
}>;
export declare const EmitUpdateLifePointsSchema: z.ZodObject<{
    gameId: z.ZodString;
    lifePoints: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    lifePoints: number;
}, {
    gameId: string;
    lifePoints: number;
}>;
export declare const EmitUpdateTokenCountSchema: z.ZodObject<{
    gameId: z.ZodString;
    tokenCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    tokenCount: number;
}, {
    gameId: string;
    tokenCount: number;
}>;
export declare const EmitAddAssassinTokenToOpponentDeckSchema: z.ZodObject<{
    gameId: z.ZodString;
    tokenCount: z.ZodNumber;
    tokenCard: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        image: z.ZodString;
        exhausted: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    }, {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    tokenCount: number;
    tokenCard: {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    };
}, {
    gameId: string;
    tokenCount: number;
    tokenCard: {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    };
}>;
export declare const EmitPlaceAssassinTokenAtOpponentDeckBottomSchema: z.ZodObject<{
    gameId: z.ZodString;
    tokenCard: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        image: z.ZodString;
        exhausted: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    }, {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    tokenCard: {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    };
}, {
    gameId: string;
    tokenCard: {
        id: string;
        name: string;
        image: string;
        exhausted?: boolean | undefined;
    };
}>;
export declare const EmitHandleAssassinTokenDrawSchema: z.ZodObject<{
    gameId: z.ZodString;
    playerLifePoints: z.ZodNumber;
    opponentTokenCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    playerLifePoints: number;
    opponentTokenCount: number;
}, {
    gameId: string;
    playerLifePoints: number;
    opponentTokenCount: number;
}>;
