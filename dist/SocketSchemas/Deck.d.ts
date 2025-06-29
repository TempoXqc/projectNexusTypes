import { z } from 'zod';
export declare const DeckSelectionUpdateSchema: z.ZodObject<{
    1: z.ZodNullable<z.ZodString>;
    2: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    1: string | null;
    2: string[];
}, {
    1: string | null;
    2: string[];
}>;
export declare const DeckSelectionDoneSchema: z.ZodObject<{
    player1DeckId: z.ZodString;
    player2DeckIds: z.ZodArray<z.ZodString, "many">;
    selectedDecks: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    player1DeckId: string;
    player2DeckIds: string[];
    selectedDecks: string[];
}, {
    player1DeckId: string;
    player2DeckIds: string[];
    selectedDecks: string[];
}>;
export declare const EmitChooseDeckSchema: z.ZodObject<{
    gameId: z.ZodString;
    playerId: z.ZodNullable<z.ZodNumber>;
    deckId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    playerId: number | null;
    deckId: string;
}, {
    gameId: string;
    playerId: number | null;
    deckId: string;
}>;
export declare const WaitingForPlayer1ChoiceSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const Player1ChoseDeckSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
