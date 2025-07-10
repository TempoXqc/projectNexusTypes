import { z } from 'zod';
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
}>;
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
    faction?: 'Celestial' | 'Assassin' | 'Viking' | 'Engine' | 'Dragon' | 'Samurai' | 'Wizard' | 'Vampire';
    cost?: number;
    effects?: CardEffect[];
    types?: CardType[];
    exhausted?: boolean;
}
export interface CardType {
    type: 'Attack' | 'Defence' | 'Support' | 'Spell';
    value: number;
}
export interface CardEffect {
    trigger: string;
    action: string;
    condition?: string | {
        [key: string]: any;
    };
    target?: 'self' | 'opponent' | 'opponent_nexus' | 'self_nexus';
    amount?: number;
    cardType?: string;
    token?: boolean;
    useAvailableTokenPool?: boolean;
    prompt?: {
        en: string;
        fr: string;
        es: string;
    };
    moveTo?: 'opponent_graveyard' | 'top_of_deck' | 'bottom_of_deck';
    options?: Array<{
        title: {
            en: string;
            fr: string;
            es: string;
        };
        actions: CardEffect[];
    }>;
}
