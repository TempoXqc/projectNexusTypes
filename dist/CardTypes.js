"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenCardSchema = exports.CardSchema = void 0;
const zod_1 = require("zod");
// --- Schémas Zod ---
const NameSchema = zod_1.z.object({
    fr: zod_1.z.string(),
    en: zod_1.z.string(),
    es: zod_1.z.string(),
});
const ImageSchema = zod_1.z.object({
    fr: zod_1.z.string(),
    en: zod_1.z.string(),
    es: zod_1.z.string(),
});
const TargetSchema = zod_1.z.object({
    owner: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    property: zod_1.z.string().optional(),
    filter: zod_1.z
        .object({
        max_value: zod_1.z.number().optional(),
        label: zod_1.z.array(zod_1.z.string()).optional(),
    })
        .optional(),
});
const MoveCardSchema = zod_1.z.record(zod_1.z.object({
    owner: zod_1.z.array(zod_1.z.string()).optional(),
    id: zod_1.z.array(zod_1.z.string()).optional(),
    amount: zod_1.z.number().optional(),
    type: zod_1.z.array(zod_1.z.string()).optional(),
    label: zod_1.z.array(zod_1.z.string()).optional(),
    filter: zod_1.z.any().optional(),
    where: zod_1.z
        .object({
        to_position: zod_1.z.string(),
    })
        .optional(),
    max_value: zod_1.z.number().optional(),
}));
const ConditionSchema = zod_1.z.object({
    type: zod_1.z.enum([
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
    property: zod_1.z.string().optional(),
    filter: zod_1.z
        .object({
        faction: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
        label: zod_1.z.array(zod_1.z.string()).optional(),
        type: zod_1.z.array(zod_1.z.string()).optional(),
        exclude_self: zod_1.z.boolean().optional(),
        owner: zod_1.z.array(zod_1.z.string()).optional(),
        max_value: zod_1.z.number().optional(),
    })
        .optional(),
    operator: zod_1.z.string().optional(),
    value: zod_1.z.any().optional(),
    event: zod_1.z.string().optional(),
    target: TargetSchema.optional(),
    against: TargetSchema.optional(),
});
const EffectSchema = zod_1.z.object({
    trigger: zod_1.z
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
    action: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => EffectSchema), zod_1.z.array(zod_1.z.lazy(() => EffectSchema))]),
    amount: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
    target: zod_1.z.union([TargetSchema, zod_1.z.array(TargetSchema)]).optional(),
    priority: zod_1.z.number().optional(),
    source: zod_1.z.object({
        id: zod_1.z.string(),
        zone: zod_1.z.string(),
    }),
    from: zod_1.z.union([MoveCardSchema, zod_1.z.string()]).optional(),
    to: zod_1.z.union([MoveCardSchema, zod_1.z.string()]).optional(),
    prompt: zod_1.z.record(zod_1.z.string()).optional(),
    options: zod_1.z
        .array(zod_1.z.object({
        title: zod_1.z.record(zod_1.z.string()),
        actions: zod_1.z.array(zod_1.z.lazy(() => EffectSchema)),
    }))
        .optional(),
    description: zod_1.z.record(zod_1.z.string()).optional(),
    max: zod_1.z.number().optional(),
    effect: zod_1.z.lazy(() => EffectSchema).optional(),
    trample: zod_1.z.boolean().optional(),
    ignore_defence: zod_1.z.boolean().optional(),
    selection: zod_1.z.string().optional(),
    duration: zod_1.z.enum(['this_turn', 'permanent']).optional(),
    token: zod_1.z.string().optional(),
    exhaust: zod_1.z.boolean().optional(),
    cost: zod_1.z
        .object({
        type: zod_1.z.string(),
        owner: zod_1.z.string().optional(),
        from: zod_1.z.string().optional(),
        filter: zod_1.z
            .object({
            faction: zod_1.z.string().optional(),
            type: zod_1.z.string().optional(),
        })
            .optional(),
        target: TargetSchema.optional(),
        amount: zod_1.z.number().optional(),
    })
        .optional(),
    order: zod_1.z.string().optional(),
    keyword: zod_1.z.string().optional(),
});
exports.CardSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: NameSchema,
    image: ImageSchema,
    faction: zod_1.z.enum(['assassin', 'celestial', 'dragon', 'engine', 'samurai', 'vampire', 'viking', 'wizard']),
    label: zod_1.z.array(zod_1.z.string()),
    cost: zod_1.z.number(),
    effects: zod_1.z
        .object({
        on_play: zod_1.z.array(EffectSchema).optional(),
        on_hit_nexus: zod_1.z.array(EffectSchema).optional(),
        on_reveal: zod_1.z.array(EffectSchema).optional(),
        on_draw: zod_1.z.array(EffectSchema).optional(),
        on_exhaust: zod_1.z.array(EffectSchema).optional(),
        on_purified: zod_1.z.array(EffectSchema).optional(),
        on_destroyed: zod_1.z.array(EffectSchema).optional(),
        on_attack: zod_1.z.array(EffectSchema).optional(),
        on_attack_resolve: zod_1.z.array(EffectSchema).optional(),
        on_discard: zod_1.z.array(EffectSchema).optional(),
        aura: zod_1.z.array(EffectSchema).optional(),
        reactions: zod_1.z.array(EffectSchema).optional(),
    })
        .default({}),
    types: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.enum(['unit', 'spell', 'token']),
        subTypes: zod_1.z.enum(['attack', 'defence', 'support', 'token']).optional(),
        target: zod_1.z.array(TargetSchema),
        value: zod_1.z.number(),
        trample: zod_1.z.boolean().optional(),
    })),
    exhausted: zod_1.z.boolean().optional(),
});
exports.HiddenCardSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.union([zod_1.z.string(), NameSchema]),
    image: zod_1.z.union([zod_1.z.string(), ImageSchema]),
    exhausted: zod_1.z.boolean(),
});
