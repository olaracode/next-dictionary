export type DefinitionT = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

export type MeaningT = {
  partOfSpeech: string;
  definitions: DefinitionT[];
};
export type DictionaryResponse = [
  {
    word: string;
    phonetic: string;
    phonetics: {
      text: string;
      audio?: string;
    }[];
    origin: string;
    meanings: MeaningT[];
  }
];
