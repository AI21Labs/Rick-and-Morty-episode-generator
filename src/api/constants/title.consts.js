import { API_KEY } from './apiKey.consts'
export const TITLE_PROMPT_ENDPOINT =
  "https://api.ai21.com/studio/v1/j2-mid/complete";

export const DEFAULT_TITLE_PROMPT = `Generate a new made up Rick and Morty episode title: Rickwarium Full of Mortfish\n##\nGenerate a new made up Rick and Morty episode title: Where Do The Ricks Play\n##\nGenerate a new made up Rick and Morty episode title: The Mortysburg Syndrome\n##\nGenerate a new made up Rick and Morty episode title: Where The Wild Morties Go\n##\nGenerate a new made up Rick and Morty episode title: Outrickous\n##\nGenerate a new made up Rick and Morty episode title: The Birdperson Paradox\n##\nGenerate a new made up Rick and Morty episode title: Jerry's Space Addiction\n##\nGenerate a new made up Rick and Morty episode title: Morty Christ Superstar\n##\nGenerate a new made up Rick and Morty episode title:`;

export const DEFAULT_TITLE_OPTIONS = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    numResults: 1,
    maxTokens: 20,
    minTokens: 0,
    temperature: 0.9,
    topP: 1,
    topKReturn: 0,
    stopSequences: ["\n##"],
    frequencyPenalty: {
      scale: 1,
      applyToWhitespaces: true,
      applyToPunctuations: true,
      applyToNumbers: true,
      applyToStopwords: true,
      applyToEmojis: true,
    },
    presencePenalty: {
      scale: 0,
      applyToWhitespaces: true,
      applyToPunctuations: true,
      applyToNumbers: true,
      applyToStopwords: true,
      applyToEmojis: true,
    },
    countPenalty: {
      scale: 0,
      applyToWhitespaces: true,
      applyToPunctuations: true,
      applyToNumbers: true,
      applyToStopwords: true,
      applyToEmojis: true,
    },
    prompt: DEFAULT_TITLE_PROMPT,
  }),
};
