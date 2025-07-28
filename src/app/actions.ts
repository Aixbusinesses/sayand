'use server';

import { generatePartList, GeneratePartListInput, GeneratePartListOutput } from "@/ai/flows/generate-part-list";

export async function getPartSuggestions(input: GeneratePartListInput): Promise<{
    success: boolean;
    data?: GeneratePartListOutput;
    error?: string;
}> {
    try {
        const result = await generatePartList(input);
        return { success: true, data: result };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to generate part list. Please try again later.` };
    }
}
