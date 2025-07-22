import { z } from 'zod';
export interface Card {
    id: string;
    name: {
        fr: string;
        en: string;
        es: string;
    };
    image: {
        fr: string;
        en: string;
        es: string;
    };
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
    source: {
        id: string;
        zone: string;
    };
    from?: MoveCard | string;
    to?: MoveCard | string;
    prompt?: {
        [lang: string]: string;
    };
    options?: Array<{
        title: {
            [lang: string]: string;
        };
        actions: Effect[];
    }>;
    description?: {
        [lang: string]: string;
    };
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
        filter?: {
            faction?: string;
            type?: string;
        };
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
    filter?: {
        max_value?: number;
        label?: string[];
    };
}
export interface MoveCard {
    [zone: string]: {
        owner?: string[];
        id?: string[];
        amount?: number;
        type?: string[];
        label?: string[];
        filter?: any;
        where?: {
            to_position: string;
        };
        max_value?: number;
    };
}
export interface Condition {
    type: 'count' | 'card_id_matches' | 'graveyard_has_unit' | 'destroyed_unit' | 'health_compare' | 'last_card_played' | 'event' | 'all_assassins_stealthed' | 'units_deployed_this_turn' | 'cards_discarded_this_turn' | 'target_type' | 'cards_in_hand' | 'cards_in_deck' | 'hidden_assassins' | 'cards_in_token_pool' | 'dragon_in_play';
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
    name: string | {
        fr: string;
        en: string;
        es: string;
    };
    image: string | {
        fr: string;
        en: string;
        es: string;
    };
    exhausted: boolean;
}
export interface PlayerState {
    id: string;
    nexus: {
        health: number;
    };
    deck: Card[];
    hand: Card[];
    field: Card[];
    graveyard: Card[];
    tokenPool: {
        id: string;
        type: string[];
    }[];
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
    playmat?: {
        id: string;
        name: string;
        image: string;
    };
}
export interface OpponentState {
    id: string;
    nexus: {
        health: number;
    };
    deck: Card[];
    hand: HiddenCard[];
    field: Card[];
    graveyard: Card[];
    tokenPool: {
        id: string;
        type: string[];
    }[];
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
    playmat?: {
        id: string;
        name: string;
        image: string;
    };
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
        temporaryKeywords: {
            cardId: string;
            keyword: string;
        }[];
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
            temporaryKeywords: {
                cardId: string;
                keyword: string;
            }[];
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
export declare const CardSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodObject<{
        fr: z.ZodString;
        en: z.ZodString;
        es: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fr: string;
        en: string;
        es: string;
    }, {
        fr: string;
        en: string;
        es: string;
    }>;
    image: z.ZodObject<{
        fr: z.ZodString;
        en: z.ZodString;
        es: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fr: string;
        en: string;
        es: string;
    }, {
        fr: string;
        en: string;
        es: string;
    }>;
    faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
    label: z.ZodArray<z.ZodString, "many">;
    cost: z.ZodNumber;
    effects: z.ZodDefault<z.ZodObject<{
        on_play: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_draw: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_purified: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_attack: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        on_discard: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        aura: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
        reactions: z.ZodOptional<z.ZodArray<z.ZodType<Effect, z.ZodTypeDef, Effect>, "many">>;
    }, "strip", z.ZodTypeAny, {
        on_play?: Effect[] | undefined;
        on_hit_nexus?: Effect[] | undefined;
        on_reveal?: Effect[] | undefined;
        on_draw?: Effect[] | undefined;
        on_exhaust?: Effect[] | undefined;
        on_purified?: Effect[] | undefined;
        on_destroyed?: Effect[] | undefined;
        on_attack?: Effect[] | undefined;
        on_attack_resolve?: Effect[] | undefined;
        on_discard?: Effect[] | undefined;
        aura?: Effect[] | undefined;
        reactions?: Effect[] | undefined;
    }, {
        on_play?: Effect[] | undefined;
        on_hit_nexus?: Effect[] | undefined;
        on_reveal?: Effect[] | undefined;
        on_draw?: Effect[] | undefined;
        on_exhaust?: Effect[] | undefined;
        on_purified?: Effect[] | undefined;
        on_destroyed?: Effect[] | undefined;
        on_attack?: Effect[] | undefined;
        on_attack_resolve?: Effect[] | undefined;
        on_discard?: Effect[] | undefined;
        aura?: Effect[] | undefined;
        reactions?: Effect[] | undefined;
    }>>;
    types: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["unit", "spell", "token"]>;
        subTypes: z.ZodOptional<z.ZodEnum<["attack", "defence", "support", "token"]>>;
        target: z.ZodArray<z.ZodObject<{
            owner: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            property: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodObject<{
                max_value: z.ZodOptional<z.ZodNumber>;
                label: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                max_value?: number | undefined;
                label?: string[] | undefined;
            }, {
                max_value?: number | undefined;
                label?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }, {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }>, "many">;
        value: z.ZodNumber;
        trample: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "unit" | "spell" | "token";
        target: {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }[];
        trample?: boolean | undefined;
        subTypes?: "token" | "attack" | "defence" | "support" | undefined;
    }, {
        value: number;
        type: "unit" | "spell" | "token";
        target: {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }[];
        trample?: boolean | undefined;
        subTypes?: "token" | "attack" | "defence" | "support" | undefined;
    }>, "many">;
    exhausted: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string[];
    faction: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard";
    cost: number;
    name: {
        fr: string;
        en: string;
        es: string;
    };
    image: {
        fr: string;
        en: string;
        es: string;
    };
    effects: {
        on_play?: Effect[] | undefined;
        on_hit_nexus?: Effect[] | undefined;
        on_reveal?: Effect[] | undefined;
        on_draw?: Effect[] | undefined;
        on_exhaust?: Effect[] | undefined;
        on_purified?: Effect[] | undefined;
        on_destroyed?: Effect[] | undefined;
        on_attack?: Effect[] | undefined;
        on_attack_resolve?: Effect[] | undefined;
        on_discard?: Effect[] | undefined;
        aura?: Effect[] | undefined;
        reactions?: Effect[] | undefined;
    };
    types: {
        value: number;
        type: "unit" | "spell" | "token";
        target: {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }[];
        trample?: boolean | undefined;
        subTypes?: "token" | "attack" | "defence" | "support" | undefined;
    }[];
    exhausted?: boolean | undefined;
}, {
    id: string;
    label: string[];
    faction: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard";
    cost: number;
    name: {
        fr: string;
        en: string;
        es: string;
    };
    image: {
        fr: string;
        en: string;
        es: string;
    };
    types: {
        value: number;
        type: "unit" | "spell" | "token";
        target: {
            type?: string | string[] | undefined;
            filter?: {
                max_value?: number | undefined;
                label?: string[] | undefined;
            } | undefined;
            owner?: string | string[] | undefined;
            id?: string | string[] | undefined;
            property?: string | undefined;
        }[];
        trample?: boolean | undefined;
        subTypes?: "token" | "attack" | "defence" | "support" | undefined;
    }[];
    effects?: {
        on_play?: Effect[] | undefined;
        on_hit_nexus?: Effect[] | undefined;
        on_reveal?: Effect[] | undefined;
        on_draw?: Effect[] | undefined;
        on_exhaust?: Effect[] | undefined;
        on_purified?: Effect[] | undefined;
        on_destroyed?: Effect[] | undefined;
        on_attack?: Effect[] | undefined;
        on_attack_resolve?: Effect[] | undefined;
        on_discard?: Effect[] | undefined;
        aura?: Effect[] | undefined;
        reactions?: Effect[] | undefined;
    } | undefined;
    exhausted?: boolean | undefined;
}>;
export declare const HiddenCardSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodUnion<[z.ZodString, z.ZodObject<{
        fr: z.ZodString;
        en: z.ZodString;
        es: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fr: string;
        en: string;
        es: string;
    }, {
        fr: string;
        en: string;
        es: string;
    }>]>;
    image: z.ZodUnion<[z.ZodString, z.ZodObject<{
        fr: z.ZodString;
        en: z.ZodString;
        es: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fr: string;
        en: string;
        es: string;
    }, {
        fr: string;
        en: string;
        es: string;
    }>]>;
    exhausted: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | {
        fr: string;
        en: string;
        es: string;
    };
    image: string | {
        fr: string;
        en: string;
        es: string;
    };
    exhausted: boolean;
}, {
    id: string;
    name: string | {
        fr: string;
        en: string;
        es: string;
    };
    image: string | {
        fr: string;
        en: string;
        es: string;
    };
    exhausted: boolean;
}>;
