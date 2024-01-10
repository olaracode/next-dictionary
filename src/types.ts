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

export type Phonetic = {
  text: string;
  audio?: string;
};
export type DictionaryResponse = [
  {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    origin: string;
    meanings: MeaningT[];
  }
];
