import React from "react";
import type { DictionaryResponse } from "@/types";
import { FaPlay } from "react-icons/fa";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
const Word = ({ word }: { word: DictionaryResponse }) => {
  return (
    <div className="w-full">
      {word.map((w, i) => {
        return (
          <div className="w-full mb-20" key={w.word + "-" + i}>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="font-bold text-3xl capitalize">{w.word}</h2>
                <p className="text-purple-700 dark:text-purple-300 text-lg">
                  {w.phonetic}
                </p>
              </div>
              {w.phonetics.length > 0 && w.phonetics[0].audio ? (
                <Phonetic
                  phoneticSound={w.phonetics[0].audio}
                  phoneticAlt={w.phonetics[0].text}
                />
              ) : (
                <button
                  className="p-5 text-purple-700 bg-purple-300 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
                  disabled
                >
                  <FaPlay />
                </button>
              )}
            </div>
            {w.meanings.map((m, i) => (
              <Meanings meaning={m} key={w.word + i} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default Word;
