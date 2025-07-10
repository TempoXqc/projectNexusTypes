"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSchema = void 0;
const zod_1 = require("zod");
const LocalizedStringSchema = zod_1.z.object({
    fr: zod_1.z.string().min(1, 'Le nom en français ne peut pas être vide.'),
    en: zod_1.z.string().min(1, 'Le nom en anglais ne peut pas être vide.'),
    es: zod_1.z.string().min(1, 'Le nom en espagnol ne peut pas être vide.'),
});
const CardTypeSchema = zod_1.z.object({
    type: zod_1.z.enum(['Attack', 'Defence', 'Support', 'Spell']),
    value: zod_1.z.number().min(0),
});
const CardEffectSchema = zod_1.z.object({
    trigger: zod_1.z.enum([
        'OnPlay',
        'OnPurified',
        'OnHitNexus',
        'OnReveal',
        'OnDraw',
        'OnExhaust',
        'OnDestroyed',
        'V',
        'Aura',
        'AfterAttack',
        'Passive',
    ]),
    action: zod_1.z.enum([
        'purify',
        'damage',
        'restore_health',
        'draw',
        'shuffle_self_into_deck',
        'move_to_bottom_of_deck',
        'reveal_top_cards',
        'reorder_revealed_cards',
        'select_from_revealed',
        'shuffle_card_type_into_deck',
        'move_remaining_to_bottom',
        'deploy_self',
        'take_control_of_unit',
        'return_to_hand',
        'move_cards_from_graveyard_to_deck',
        'ignore_shield',
        'activate_own_V_ability',
        'choice',
        'reduce_cost_to_zero',
        'restore_health_per_hidden_assassins',
    ]),
    condition: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.object({
            'unit.level': zod_1.z.string().optional(),
            'target.type': zod_1.z.string().optional(),
            'another_unit_in_play': zod_1.z.string().optional(),
            'another_unit.faction': zod_1.z.string().optional(),
        }),
    ])
        .optional(),
    target: zod_1.z.enum(['self', 'opponent', 'opponent_nexus', 'self_nexus']).optional(),
    amount: zod_1.z.number().min(0).optional(),
    cardType: zod_1.z.string().optional(),
    token: zod_1.z.boolean().optional(),
    useAvailableTokenPool: zod_1.z.boolean().optional(),
    prompt: zod_1.z
        .object({
        en: zod_1.z.string().optional(),
        fr: zod_1.z.string().optional(),
        es: zod_1.z.string().optional(),
    })
        .optional(),
    moveTo: zod_1.z.enum(['opponent_graveyard', 'top_of_deck', 'bottom_of_deck']).optional(),
    options: zod_1.z
        .array(zod_1.z.object({
        title: LocalizedStringSchema,
        actions: zod_1.z.array(zod_1.z.any()),
    }))
        .optional(),
});
exports.CardSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'L’ID de la carte ne peut pas être vide.'),
    name: LocalizedStringSchema,
    image: LocalizedStringSchema,
    faction: zod_1.z.enum(['Celestial', 'Assassin', 'Viking', 'Engine', 'Dragon', 'Samurai', 'Wizard', 'Vampire']).optional(),
    cost: zod_1.z.number().min(0).optional(),
    effects: zod_1.z.array(CardEffectSchema).optional(),
    types: zod_1.z.array(CardTypeSchema).optional(),
    exhausted: zod_1.z.boolean().optional(),
});
