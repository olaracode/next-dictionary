import React from "react";
import type { MeaningT } from "@/types";
import Definitions from "./Definitions";
import SynonymsAntonyms from "./SynAnt";
const Meanings = ({ meaning }: { meaning: MeaningT }) => {
  const allSynonyms = meaning.definitions.map((d) => d.synonyms).flat();
  const allAntonyms = meaning.definitions.map((d) => d.antonyms).flat();
  return (
    <div className="my-5">
      <div className="flex items-center gap-6 mb-2">
        <h3 className="font-bold text-lg capitalize">{meaning.partOfSpeech}</h3>
        <hr className="flex-grow" />
      </div>
      <h4 className="mb-1 text-gray-500 dark:text-white">Meanings: </h4>
      <ul className="grid gap-4 ml-6 text-gray-700 dark:text-white">
        {meaning.definitions.map((d, i) => (
          <Definitions definition={d} key={d.definition + i} />
        ))}
      </ul>
      {allSynonyms.length > 0 && (
        <SynonymsAntonyms list={allSynonyms} title={"Synonyms"} />
      )}
      {allAntonyms.length > 0 && (
        <SynonymsAntonyms list={allAntonyms} title={"Antonyms"} />
      )}
    </div>
  );
};

export default Meanings;
