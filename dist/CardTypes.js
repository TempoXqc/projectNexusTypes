"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSchema = void 0;
// types/CardTypes.ts
const zod_1 = require("zod");
exports.CardSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'L’ID de la carte ne peut pas être vide.'),
    name: zod_1.z.string().min(1, 'Le nom de la carte ne peut pas être vide.'),
    image: zod_1.z.string().min(1, 'L’image de la carte ne peut pas être vide.'),
    exhausted: zod_1.z.boolean().optional(),
});
