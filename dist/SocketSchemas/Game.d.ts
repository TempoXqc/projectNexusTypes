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
    playmats: {
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
        infoImage: string;
    }[];
    playmats: {
        id: string;
        name: string;
        image: string;
    }[];
    playerId: number | null;
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>>, "many">;
        hand: z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        opponentHand: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        graveyard: z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        mustDiscard: z.ZodBoolean;
        hasPlayedCard: z.ZodBoolean;
        deck: z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        field: ({
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>>, "many">;
        hand: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">>;
        opponentHand: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        graveyard: z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        mustDiscard: z.ZodBoolean;
        hasPlayedCard: z.ZodBoolean;
        deck: z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        field: ({
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">>;
        deck: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>, "many">>;
        field: z.ZodOptional<z.ZodArray<z.ZodNullable<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }>>, "many">>;
        graveyard: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            faction: z.ZodOptional<z.ZodEnum<["Celestial", "Assassin", "Viking", "Engine", "Dragon", "Samurai", "Wizard", "Vampire"]>>;
            cost: z.ZodOptional<z.ZodNumber>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trigger: z.ZodEnum<["OnPlay", "OnPurified", "OnHitNexus", "OnReveal", "OnDraw", "OnExhaust", "OnDestroyed", "V", "Aura", "AfterAttack", "Passive"]>;
                action: z.ZodEnum<["purify", "damage", "restore_health", "draw", "shuffle_self_into_deck", "move_to_bottom_of_deck", "reveal_top_cards", "reorder_revealed_cards", "select_from_revealed", "shuffle_card_type_into_deck", "move_remaining_to_bottom", "deploy_self", "take_control_of_unit", "return_to_hand", "move_cards_from_graveyard_to_deck", "ignore_shield", "activate_own_V_ability", "choice", "reduce_cost_to_zero", "restore_health_per_hidden_assassins"]>;
                condition: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    'unit.level': z.ZodOptional<z.ZodString>;
                    'target.type': z.ZodOptional<z.ZodString>;
                    another_unit_in_play: z.ZodOptional<z.ZodString>;
                    'another_unit.faction': z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }, {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                }>]>>;
                target: z.ZodOptional<z.ZodEnum<["self", "opponent", "opponent_nexus", "self_nexus"]>>;
                amount: z.ZodOptional<z.ZodNumber>;
                cardType: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodBoolean>;
                useAvailableTokenPool: z.ZodOptional<z.ZodBoolean>;
                prompt: z.ZodOptional<z.ZodObject<{
                    en: z.ZodOptional<z.ZodString>;
                    fr: z.ZodOptional<z.ZodString>;
                    es: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }, {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                }>>;
                moveTo: z.ZodOptional<z.ZodEnum<["opponent_graveyard", "top_of_deck", "bottom_of_deck"]>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodObject<{
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
                    actions: z.ZodArray<z.ZodAny, "many">;
                }, "strip", z.ZodTypeAny, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }, {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }, {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }>, "many">>;
            types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["Attack", "Defence", "Support", "Spell"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }, {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }>, "many">>;
            exhausted: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }, {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "viking" | "engine" | "celestial" | "dragon" | "samurai" | "wizard" | "vampire" | null | undefined;
    }, {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
            faction?: "Celestial" | "Assassin" | "Viking" | "Engine" | "Dragon" | "Samurai" | "Wizard" | "Vampire" | undefined;
            cost?: number | undefined;
            effects?: {
                trigger: "OnPlay" | "OnPurified" | "OnHitNexus" | "OnReveal" | "OnDraw" | "OnExhaust" | "OnDestroyed" | "V" | "Aura" | "AfterAttack" | "Passive";
                action: "purify" | "damage" | "restore_health" | "draw" | "shuffle_self_into_deck" | "move_to_bottom_of_deck" | "reveal_top_cards" | "reorder_revealed_cards" | "select_from_revealed" | "shuffle_card_type_into_deck" | "move_remaining_to_bottom" | "deploy_self" | "take_control_of_unit" | "return_to_hand" | "move_cards_from_graveyard_to_deck" | "ignore_shield" | "activate_own_V_ability" | "choice" | "reduce_cost_to_zero" | "restore_health_per_hidden_assassins";
                options?: {
                    title: {
                        fr: string;
                        en: string;
                        es: string;
                    };
                    actions: any[];
                }[] | undefined;
                condition?: string | {
                    'unit.level'?: string | undefined;
                    'target.type'?: string | undefined;
                    another_unit_in_play?: string | undefined;
                    'another_unit.faction'?: string | undefined;
                } | undefined;
                target?: "self" | "opponent" | "opponent_nexus" | "self_nexus" | undefined;
                amount?: number | undefined;
                cardType?: string | undefined;
                token?: boolean | undefined;
                useAvailableTokenPool?: boolean | undefined;
                prompt?: {
                    fr?: string | undefined;
                    en?: string | undefined;
                    es?: string | undefined;
                } | undefined;
                moveTo?: "opponent_graveyard" | "top_of_deck" | "bottom_of_deck" | undefined;
            }[] | undefined;
            types?: {
                value: number;
                type: "Attack" | "Defence" | "Support" | "Spell";
            }[] | undefined;
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
