import React from "react";
import type { DictionaryResponse } from "@/types";
import { FaPlay } from "react-icons/fa";
import Meanings from "./Meanings";
const Word = ({ word }: { word: DictionaryResponse }) => {
  return (
    <div className="w-full">
      {word.map((w, i) => {
        return (
          <div className="w-full mb-20" key={w.word + "-" + i}>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="font-bold text-3xl capitalize">{w.word}</h2>
                <p className="text-purple-700 text-lg">{w.phonetic}</p>
              </div>
              <button className="p-5 text-purple-700 bg-purple-300 rounded-full">
                <FaPlay />
              </button>
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
