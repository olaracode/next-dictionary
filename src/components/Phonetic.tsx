"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
const Phonetic = ({
  phoneticSound,
  phoneticAlt,
}: {
  phoneticSound: string;
  phoneticAlt: string;
}) => {
  const audio = new Audio(phoneticSound);
  const playSound = () => {
    audio.play();
  };

  return (
    <button
      className="p-5 text-purple-700 bg-purple-300 rounded-full"
      onClick={playSound}
    >
      <FaPlay />
    </button>
  );
};

export default Phonetic;
