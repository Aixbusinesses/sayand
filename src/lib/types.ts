import { type GeneratePartListOutput } from '@/ai/flows/generate-part-list';

export type Part = GeneratePartListOutput['parts'][number];
