// src/ai/flows/generate-part-list.ts
'use server';

/**
 * @fileOverview Generates a list of compatible parts and accessories for a Chevrolet Corsa based on a user's description.
 *
 * - generatePartList - A function that takes a description of desired modifications and returns a list of parts.
 * - GeneratePartListInput - The input type for the generatePartList function.
 * - GeneratePartListOutput - The return type for the generatePartList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePartListInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A description of the desired Chevrolet Corsa modification.'
    ),
});
export type GeneratePartListInput = z.infer<typeof GeneratePartListInputSchema>;

const PartSchema = z.object({
  name: z.string().describe('The name of the part.'),
  description: z.string().describe('A description of the part.'),
  estimatedCost: z.number().describe('The estimated cost of the part.'),
  installationGuide: z.string().describe('Link to the installation guide.'),
  compatibility: z.array(z.string()).describe('List of compatible Corsa models'),
});

const GeneratePartListOutputSchema = z.object({
  parts: z.array(PartSchema).describe('A list of parts and accessories.'),
});
export type GeneratePartListOutput = z.infer<typeof GeneratePartListOutputSchema>;

export async function generatePartList(input: GeneratePartListInput): Promise<GeneratePartListOutput> {
  return generatePartListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePartListPrompt',
  input: {schema: GeneratePartListInputSchema},
  output: {schema: GeneratePartListOutputSchema},
  prompt: `You are an expert Chevrolet Corsa modification assistant.

You will generate a list of compatible parts and accessories based on the user's description of their desired modification.
Include estimated costs and installation guides for each part.

User Description: {{{description}}}
`,
});

const generatePartListFlow = ai.defineFlow(
  {
    name: 'generatePartListFlow',
    inputSchema: GeneratePartListInputSchema,
    outputSchema: GeneratePartListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
