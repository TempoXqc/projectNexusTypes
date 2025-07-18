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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    }, {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }>, "many">;
        lifePoints: z.ZodOptional<z.ZodNumber>;
        tokenCount: z.ZodOptional<z.ZodNumber>;
        tokenType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["assassin", "engine", "viking", "celestial", "dragon", "samurai", "wizard", "vampire"]>>>;
    }, "strip", z.ZodTypeAny, {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    }, {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    } | undefined;
    player2?: {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        hand: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    } | undefined;
    player2?: {
        field: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[];
        graveyard: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        mustDiscard: boolean;
        hasPlayedCard: boolean;
        deck: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[];
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        opponentHand?: unknown[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
            faction: z.ZodEnum<["assassin", "celestial", "dragon", "engine", "samurai", "vampire", "viking", "wizard"]>;
            label: z.ZodArray<z.ZodString, "many">;
            cost: z.ZodNumber;
            effects: z.ZodOptional<z.ZodObject<{
                on_play: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_hit_nexus: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_reveal: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_draw: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_exhaust: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_purified: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_destroyed: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_attack_resolve: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                on_discard: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                aura: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
                reactions: z.ZodOptional<z.ZodArray<z.ZodType<import("../CardTypes").Effect, z.ZodTypeDef, import("../CardTypes").Effect>, "many">>;
            }, "strip", z.ZodTypeAny, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            }, {
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    }, {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    state: {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    };
}, {
    gameId: string;
    state: {
        lifePoints?: number | undefined;
        tokenCount?: number | undefined;
        field?: ({
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        } | null)[] | undefined;
        hand?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        graveyard?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        mustDiscard?: boolean | undefined;
        hasPlayedCard?: boolean | undefined;
        deck?: {
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
                on_play?: import("../CardTypes").Effect[] | undefined;
                on_hit_nexus?: import("../CardTypes").Effect[] | undefined;
                on_reveal?: import("../CardTypes").Effect[] | undefined;
                on_draw?: import("../CardTypes").Effect[] | undefined;
                on_exhaust?: import("../CardTypes").Effect[] | undefined;
                on_purified?: import("../CardTypes").Effect[] | undefined;
                on_destroyed?: import("../CardTypes").Effect[] | undefined;
                on_attack?: import("../CardTypes").Effect[] | undefined;
                on_attack_resolve?: import("../CardTypes").Effect[] | undefined;
                on_discard?: import("../CardTypes").Effect[] | undefined;
                aura?: import("../CardTypes").Effect[] | undefined;
                reactions?: import("../CardTypes").Effect[] | undefined;
            } | undefined;
            exhausted?: boolean | undefined;
        }[] | undefined;
        tokenType?: "assassin" | "celestial" | "dragon" | "engine" | "samurai" | "vampire" | "viking" | "wizard" | null | undefined;
    };
}>;
export declare const GameOverSchema: z.ZodObject<{
    winner: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    winner: string | null;
}, {
    winner: string | null;
}>;
