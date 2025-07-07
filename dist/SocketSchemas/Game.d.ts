import { z } from 'zod';
export declare const GameStartSchema: z.ZodObject<{
    playerId: z.ZodNullable<z.ZodNumber>;
    gameId: z.ZodString;
    chatHistory: z.ZodArray<z.ZodObject<{
        playerId: z.ZodNumber;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        playerId: number;
    }, {
        message: string;
        playerId: number;
    }>, "many">;
    availableDecks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        image: z.ZodString;
        infoImage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        image: string;
        infoImage: string;
    }, {
        id: string;
        name: string;
        image: string;
        infoImage: string;
    }>, "many">;
    playmats: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        image: string;
    }, {
        id: string;
        name: string;
        image: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    chatHistory: {
        message: string;
        playerId: number;
    }[];
    availableDecks: {
        id: string;
        name: string;
        image: string;
        infoImage: string;
    }[];
    playerId: number | null;
    playmats: {
        id: string;
        name: string;
        image: string;
    }[];
}, {
    gameId: string;
    chatHistory: {
        message: string;
        playerId: number;
    }[];
    availableDecks: {
        id: string;
        name: string;
        image: string;
        infoImage: string;
    }[];
    playerId: number | null;
    playmats: {
        id: string;
        name: string;
        image: string;
    }[];
}>;
export declare const CreateGameAckSchema: z.ZodObject<{
    gameId: z.ZodString;
    playerId: z.ZodNullable<z.ZodNumber>;
    chatHistory: z.ZodArray<z.ZodObject<{
        playerId: z.ZodNumber;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        playerId: number;
    }, {
        message: string;
        playerId: number;
    }>, "many">;
    availableDecks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        image: string;
    }, {
        id: string;
        name: string;
        image: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    chatHistory: {
        message: string;
        playerId: number;
    }[];
    availableDecks: {
        id: string;
        name: string;
        image: string;
    }[];
    playerId: number | null;
}, {
    gameId: string;
    chatHistory: {
        message: string;
        playerId: number;
    }[];
    availableDecks: {
        id: string;
        name: string;
        image: string;
    }[];
    playerId: number | null;
}>;
export declare const GameStateUpdateSchema: z.ZodObject<{
    player1: z.ZodOptional<z.ZodObject<{
        field: z.ZodArray<z.ZodNullable<z.ZodObject<{
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
        }>>, "many">;
        hand: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        opponentHand: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        graveyard: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        mustDiscard: z.ZodBoolean;
        hasPlayedCard: z.ZodBoolean;
        deck: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }>>;
    player2: z.ZodOptional<z.ZodObject<{
        field: z.ZodArray<z.ZodNullable<z.ZodObject<{
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
        }>>, "many">;
        hand: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        opponentHand: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        graveyard: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        mustDiscard: z.ZodBoolean;
        hasPlayedCard: z.ZodBoolean;
        deck: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }>>;
    turn: z.ZodOptional<z.ZodNumber>;
    phase: z.ZodOptional<z.ZodEnum<["Standby", "Main", "Battle", "End"]>>;
    activePlayer: z.ZodOptional<z.ZodString>;
    gameOver: z.ZodOptional<z.ZodBoolean>;
    winner: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    phase?: "Standby" | "Main" | "Battle" | "End" | undefined;
    turn?: number | undefined;
    player1?: {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    } | undefined;
    player2?: {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    } | undefined;
    activePlayer?: string | undefined;
    gameOver?: boolean | undefined;
    winner?: string | null | undefined;
}, {
    phase?: "Standby" | "Main" | "Battle" | "End" | undefined;
    turn?: number | undefined;
    player1?: {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    } | undefined;
    player2?: {
        field: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    } | undefined;
    activePlayer?: string | undefined;
    gameOver?: boolean | undefined;
    winner?: string | null | undefined;
}>;
export declare const EmitUpdateGameStateSchema: z.ZodObject<{
    gameId: z.ZodString;
    state: z.ZodObject<{
        hand: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        deck: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        field: z.ZodOptional<z.ZodArray<z.ZodNullable<z.ZodObject<{
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
        }>>, "many">>;
        graveyard: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        hasPlayedCard: z.ZodOptional<z.ZodBoolean>;
        mustDiscard: z.ZodOptional<z.ZodBoolean>;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    state: {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    };
}, {
    gameId: string;
    state: {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
            id: string;
            name: string;
            image: string;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    };
}>;
export declare const GameOverSchema: z.ZodObject<{
    winner: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    winner: string | null;
}, {
    winner: string | null;
}>;
