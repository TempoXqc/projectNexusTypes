import { z } from 'zod';

export interface Card {
    id: string;
    name: { fr: string; en: string; es: string };
    image: { fr: string; en: string; es: string };
    faction: 'assassin' | 'celestial' | 'dragon' | 'engine' | 'samurai' | 'vampire' | 'viking' | 'wizard';
    label: string[];
    cost: number;
    effects: {
        on_play?: Effect[];
        on_hit_nexus?: Effect[];
        on_reveal?: Effect[];
        on_draw?: Effect[];
        on_exhaust?: Effect[];
        on_purified?: Effect[];
        on_destroyed?: Effect[];
        on_attack?: Effect[];
        on_attack_resolve?: Effect[];
        on_discard?: Effect[];
        aura?: Effect[];
        reactions?: Effect[];
    };
    types: Array<{
        type: 'unit' | 'spell' | 'token';
        subTypes?: 'attack' | 'defence' | 'support' | 'token';
        target: Target[];
        value: number;
        trample?: boolean;
    }>;
    exhausted?: boolean;
    stealthed?: boolean;
    keywords?: string[];
    preventDestruction?: boolean;
    selected?: boolean;
}

export interface Effect {
    trigger?: 'on_play' | 'on_hit_nexus' | 'on_reveal' | 'on_draw' | 'on_exhaust' | 'on_purified' | 'on_destroyed' | 'on_attack' | 'on_attack_resolve' | 'on_discard' | 'aura' | 'reactions' | 'manual';
    condition?: Condition;
    action: string | Effect | Effect[];
    amount?: number | string;
    target?: Target | Target[];
    priority?: number;
    source: { id: string; zone: string };
    from?: MoveCard | string;
    to?: MoveCard | string;
    prompt?: { [lang: string]: string };
    options?: Array<{ title: { [lang: string]: string }; actions: Effect[] }>;
    description?: { [lang: string]: string };
    max?: number;
    effect?: Effect;
    trample?: boolean;
    ignore_defence?: boolean;
    selection?: string;
    duration?: 'this_turn' | 'permanent';
    token?: string;
    exhaust?: boolean;
    cost?: {
        type: string;
        owner?: string;
        from?: string;
        filter?: { faction?: string; type?: string };
        target?: Target;
        amount?: number;
    };
    order?: string;
    keyword?: string;
}

export interface Target {
    owner?: string | string[];
    type?: string | string[];
    id?: string | string[];
    property?: string;
    filter?: { max_value?: number; label?: string[] };
}

export interface MoveCard {
    [zone: string]: {
        owner?: string[];
        id?: string[];
        amount?: number;
        type?: string[];
        label?: string[];
        filter?: any;
        where?: { to_position: string };
        max_value?: number;
    };
}

export interface Condition {
    type:
        | 'count'
        | 'card_id_matches'
        | 'graveyard_has_unit'
        | 'destroyed_unit'
        | 'health_compare'
        | 'last_card_played'
        | 'event'
        | 'all_assassins_stealthed'
        | 'units_deployed_this_turn'
        | 'cards_discarded_this_turn'
        | 'target_type'
        | 'cards_in_hand'
        | 'cards_in_deck'
        | 'hidden_assassins'
        | 'cards_in_token_pool'
        | 'dragon_in_play';
    property?: string;
    filter?: {
        faction?: string | string[];
        label?: string[];
        type?: string[];
        exclude_self?: boolean;
        owner?: string[];
        max_value?: number;
    };
    operator?: string;
    value?: any;
    event?: string;
    target?: Target;
    against?: Target;
}

export interface HiddenCard {
    id: string;
    name: string | { fr: string; en: string; es: string };
    image: string | { fr: string; en: string; es: string };
    exhausted: boolean;
}

export interface PlayerState {
    id: string;
    nexus: { health: number };
    deck: Card[];
    hand: Card[];
    field: Card[];
    graveyard: Card[];
    tokenPool: { id: string; type: string[] }[];
    extraPlays?: number;
    opponentField?: Card[];
    opponentHand?: HiddenCard[];
    mustDiscard?: boolean;
    hasPlayedCard?: boolean;
    lifePoints?: number;
    actionPoints?: number;
    tokenCount?: number;
    tokenType?: string | null;
    mulliganDone?: boolean;
    playmat?: { id: string; name: string; image: string };
}

export interface OpponentState {
    id: string;
    nexus: { health: number };
    deck: Card[];
    hand: HiddenCard[];
    field: Card[];
    graveyard: Card[];
    tokenPool: { id: string; type: string[] }[];
    extraPlays?: number;
    opponentField?: Card[];
    opponentHand?: HiddenCard[];
    mustDiscard?: boolean;
    hasPlayedCard?: boolean;
    lifePoints?: number;
    actionPoints?: number;
    tokenCount?: number;
    tokenType?: string | null;
    mulliganDone?: boolean;
    playmat?: { id: string; name: string; image: string };
}

export interface GameState {
    player: PlayerState;
    opponent: OpponentState;
    revealedCards: Card[];
    lastCardPlayed?: Card;
    lastDestroyedUnit?: Card;
    targetType?: string;
    detected?: boolean;
    currentCard?: Card;
    turnState: {
        unitsDeployed: Card[];
        discardedCardsCount: number;
        temporaryKeywords: { cardId: string; keyword: string }[];
        preventDestructionCards: string[];
        battlePhaseDisabled: boolean;
    };
    game: {
        turn: number;
        currentPhase: 'Standby' | 'Main' | 'Battle' | 'End';
        isMyTurn: boolean;
        activePlayerId: string | null;
        gameOver: boolean;
        winner: string | null;
        updateTimestamp: number;
    };
    ui: {
        hoveredCardId: string | null;
        hoveredTokenId: string | null;
        isCardHovered: boolean;
        isGraveyardOpen: boolean;
        isOpponentGraveyardOpen: boolean;
        isRightPanelOpen: boolean;
        isRightPanelHovered: boolean;
        isTokenZoneOpen: boolean;
        isOpponentTokenZoneOpen: boolean;
        isRevealedCardsOpen: boolean;
        isReorderCardsOpen: boolean;
        isSelectCardOpen: boolean;
        isChoiceOpen: boolean;
    };
    chat: {
        messages: {
            playerId: number;
            message: string;
        }[];
        input: string;
    };
    deckSelection: {
        selectedDecks: string[];
        player1DeckId: string[] | string | null;
        player1Deck: Card[];
        player2Deck: Card[];
        hasChosenDeck: boolean;
        deckSelectionDone: boolean;
        initialDraw: Card[];
        selectedForMulligan: string[];
        mulliganDone: boolean;
        isReady: boolean;
        bothReady: boolean;
        opponentReady: boolean;
        deckSelectionData: {
            player1DeckId: string[] | string | null;
            player2DeckIds: string[];
            selectedDecks: string[];
        } | null;
        randomizers: {
            id: string;
            name: string;
            image: string;
            infoImage: string;
        }[];
        waitingForPlayer1: boolean;
    };
    connection: {
        playerId: number | null;
        isConnected: boolean;
        canInitializeDraw: boolean;
    };
}

export interface ServerGameState {
    gameId: string;
    players: string[];
    chatHistory: {
        playerId: number;
        message: string;
    }[];
    state: {
        player1: PlayerState;
        player2: PlayerState;
        revealedCards: Card[];
        lastCardPlayed?: Card;
        lastDestroyedUnit?: Card;
        targetType?: string;
        detected?: boolean;
        currentCard?: Card;
        turnState: {
            unitsDeployed: Card[];
            discardedCardsCount: number;
            temporaryKeywords: { cardId: string; keyword: string }[];
            preventDestructionCards: string[];
            battlePhaseDisabled: boolean;
        };
        game: {
            turn: number;
            currentPhase: 'Standby' | 'Main' | 'Battle' | 'End';
            isMyTurn: boolean;
            activePlayerId: string | null;
            gameOver: boolean;
            winner: string | null;
            updateTimestamp: number;
        };
    };
    deckChoices: {
        '1': string[];
        '2': string[];
    };
    availableDecks: {
        id: string;
        name: string;
        image: string;
        infoImage: string;
    }[];
    createdAt: Date;
    status: 'waiting' | 'started' | 'finished';
    playersReady: Set<number>;
    playmats: {
        id: string;
        name: string;
        image: string;
    }[];
    lifeToken: {
        id: string;
        name: string;
        image: string;
    };
}

export interface PersistedServerGameState extends Omit<ServerGameState, 'playersReady'> {
    playersReady: number[];
}

export interface PhaseData {
    phase: 'Standby' | 'Main' | 'Battle' | 'End';
    turn: number;
    nextPlayerId?: number;
}

// --- Schémas Zod ---

const NameSchema = z.object({
    fr: z.string(),
    en: z.string(),
    es: z.string(),
});

const ImageSchema = z.object({
    fr: z.string(),
    en: z.string(),
    es: z.string(),
});

const TargetSchema = z.object({
    owner: z.union([z.string(), z.array(z.string())]).optional(),
    type: z.union([z.string(), z.array(z.string())]).optional(),
    id: z.union([z.string(), z.array(z.string())]).optional(),
    property: z.string().optional(),
    filter: z
        .object({
            max_value: z.number().optional(),
            label: z.array(z.string()).optional(),
        })
        .optional(),
});

const MoveCardSchema = z.record(
    z.object({
        owner: z.array(z.string()).optional(),
        id: z.array(z.string()).optional(),
        amount: z.number().optional(),
        type: z.array(z.string()).optional(),
        label: z.array(z.string()).optional(),
        filter: z.any().optional(),
        where: z
            .object({
                to_position: z.string(),
            })
            .optional(),
        max_value: z.number().optional(),
    }),
);

const ConditionSchema = z.object({
    type: z.enum([
        'count',
        'card_id_matches',
        'graveyard_has_unit',
        'destroyed_unit',
        'health_compare',
        'last_card_played',
        'event',
        'all_assassins_stealthed',
        'units_deployed_this_turn',
        'cards_discarded_this_turn',
        'target_type',
        'cards_in_hand',
        'cards_in_deck',
        'hidden_assassins',
        'cards_in_token_pool',
        'dragon_in_play',
    ]),
    property: z.string().optional(),
    filter: z
        .object({
            faction: z.union([z.string(), z.array(z.string())]).optional(),
            label: z.array(z.string()).optional(),
            type: z.array(z.string()).optional(),
            exclude_self: z.boolean().optional(),
            owner: z.array(z.string()).optional(),
            max_value: z.number().optional(),
        })
        .optional(),
    operator: z.string().optional(),
    value: z.any().optional(),
    event: z.string().optional(),
    target: TargetSchema.optional(),
    against: TargetSchema.optional(),
});

const EffectSchema: z.ZodType<Effect> = z.object({
    trigger: z
        .enum([
            'on_play',
            'on_hit_nexus',
            'on_reveal',
            'on_draw',
            'on_exhaust',
            'on_purified',
            'on_destroyed',
            'on_attack',
            'on_attack_resolve',
            'on_discard',
            'aura',
            'reactions',
            'manual',
        ])
        .optional(),
    condition: ConditionSchema.optional(),
    action: z.union([z.string(), z.lazy(() => EffectSchema), z.array(z.lazy(() => EffectSchema))]),
    amount: z.union([z.number(), z.string()]).optional(),
    target: z.union([TargetSchema, z.array(TargetSchema)]).optional(),
    priority: z.number().optional(),
    source: z.object({
        id: z.string(),
        zone: z.string(),
    }),
    from: z.union([MoveCardSchema, z.string()]).optional(),
    to: z.union([MoveCardSchema, z.string()]).optional(),
    prompt: z.record(z.string()).optional(),
    options: z
        .array(
            z.object({
                title: z.record(z.string()),
                actions: z.array(z.lazy(() => EffectSchema)),
            }),
        )
        .optional(),
    description: z.record(z.string()).optional(),
    max: z.number().optional(),
    effect: z.lazy(() => EffectSchema).optional(),
    trample: z.boolean().optional(),
    ignore_defence: z.boolean().optional(),
    selection: z.string().optional(),
    duration: z.enum(['this_turn', 'permanent']).optional(),
    token: z.string().optional(),
    exhaust: z.boolean().optional(),
    cost: z
        .object({
            type: z.string(),
            owner: z.string().optional(),
            from: z.string().optional(),
            filter: z
                .object({
                    faction: z.string().optional(),
                    type: z.string().optional(),
                })
                .optional(),
            target: TargetSchema.optional(),
            amount: z.number().optional(),
        })
        .optional(),
    order: z.string().optional(),
    keyword: z.string().optional(),
});

export const CardSchema = z.object({
    id: z.string(),
    name: NameSchema,
    image: ImageSchema,
    faction: z.enum(['assassin', 'celestial', 'dragon', 'engine', 'samurai', 'vampire', 'viking', 'wizard']),
    label: z.array(z.string()),
    cost: z.number(),
    effects: z
        .object({
            on_play: z.array(EffectSchema).optional(),
            on_hit_nexus: z.array(EffectSchema).optional(),
            on_reveal: z.array(EffectSchema).optional(),
            on_draw: z.array(EffectSchema).optional(),
            on_exhaust: z.array(EffectSchema).optional(),
            on_purified: z.array(EffectSchema).optional(),
            on_destroyed: z.array(EffectSchema).optional(),
            on_attack: z.array(EffectSchema).optional(),
            on_attack_resolve: z.array(EffectSchema).optional(),
            on_discard: z.array(EffectSchema).optional(),
            aura: z.array(EffectSchema).optional(),
            reactions: z.array(EffectSchema).optional(),
        })
        .default({}),
    types: z.array(
        z.object({
            type: z.enum(['unit', 'spell', 'token']),
            subTypes: z.enum(['attack', 'defence', 'support', 'token']).optional(),
            target: z.array(TargetSchema),
            value: z.number(),
            trample: z.boolean().optional(),
        }),
    ),
    exhausted: z.boolean().optional(),
});

export const HiddenCardSchema = z.object({
    id: z.string(),
    name: z.union([z.string(), NameSchema]),
    image: z.union([z.string(), ImageSchema]),
    exhausted: z.boolean(),
});