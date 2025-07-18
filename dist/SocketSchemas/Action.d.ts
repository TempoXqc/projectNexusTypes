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
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    tokenCount: number;
    tokenCard: {
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
    };
}, {
    gameId: string;
    tokenCount: number;
    tokenCard: {
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
    };
}>;
export declare const EmitPlaceAssassinTokenAtOpponentDeckBottomSchema: z.ZodObject<{
    gameId: z.ZodString;
    tokenCard: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    tokenCard: {
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
    };
}, {
    gameId: string;
    tokenCard: {
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
