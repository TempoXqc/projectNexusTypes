// types/CardTypes.ts
import { z } from 'zod';

const LocalizedStringSchema = z.object({
  fr: z.string().min(1, 'Le nom en français ne peut pas être vide.'),
  en: z.string().min(1, 'Le nom en anglais ne peut pas être vide.'),
  es: z.string().min(1, 'Le nom en espagnol ne peut pas être vide.'),
});


const CardTypeSchema = z.object({
  type: z.enum(['Attack', 'Defence', 'Support', 'Spell', 'token']),
  value: z.number().min(0),
});


const CardEffectSchema = z.object({
  trigger: z.enum([
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
    'OnDetected',
  ]),
  action: z.enum([
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
    'return_to_owner_hand',
  ]),
  condition: z
      .union([
        z.string(),
        z.object({
          'unit.level': z.string().optional(),
          'target.type': z.string().optional(),
          'another_unit_in_play': z.string().optional(),
          'another_unit.faction': z.string().optional(),
        }),
      ])
      .optional(),
  target: z.enum(['self', 'opponent', 'opponent_nexus', 'self_nexus']).optional(),
  amount: z.number().min(0).optional(),
  cardType: z.string().optional(),
  token: z.boolean().optional(),
  useAvailableTokenPool: z.boolean().optional(),
  prompt: z
      .object({
        en: z.string().optional(),
        fr: z.string().optional(),
        es: z.string().optional(),
      })
      .optional(),
  moveTo: z.enum(['opponent_graveyard', 'top_of_deck', 'bottom_of_deck']).optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  max: z.number().min(0).optional(),
  options: z
      .array(
          z.object({
            title: LocalizedStringSchema,
            actions: z.array(z.any()),
          }),
      )
      .optional(),
});

// Schéma principal pour une carte
export const CardSchema = z.object({
  id: z.string().min(1, 'L’ID de la carte ne peut pas être vide.'),
  name: LocalizedStringSchema,
  image: LocalizedStringSchema,
  faction: z.enum(['Celestial', 'Assassin', 'Viking', 'Engine', 'Dragon', 'Samurai', 'Wizard', 'Vampire']).optional(),
  cost: z.number().min(0).optional(),
  effects: z.array(CardEffectSchema).optional(),
  types: z.array(CardTypeSchema).optional(),
  exhausted: z.boolean().optional(),
  quantity: z.number().min(0).optional(),
});


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
  quantity?: number;
}

export interface CardType {
  type: 'Attack' | 'Defence' | 'Support' | 'Spell' | 'token';
  value: number;
}

export interface CardEffect {
  trigger: string;
  action: string;
  condition?: string | { [key: string]: any };
  target?: 'self' | 'opponent' | 'opponent_nexus' | 'self_nexus';
  amount?: number;
  cardType?: string;
  token?: boolean;
  useAvailableTokenPool?: boolean;
  prompt?: { en?: string; fr?: string; es?: string };
  moveTo?: 'opponent_graveyard' | 'top_of_deck' | 'bottom_of_deck';
  from?: string;
  to?: string;
  max?: number;
  options?: Array<{ title: { en: string; fr: string; es: string }; actions: CardEffect[] }>;
}