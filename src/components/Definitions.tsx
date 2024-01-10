import React from "react";
import { DefinitionT } from "@/types";
const Definitions = ({ definition }: { definition: DefinitionT }) => {
  return (
    <li className="list-disc">
      <p className="text-sm">{definition.definition}</p>
      {definition.example && (
        <p className="text-gray-500 dark:text-white text-sm italic ml-2">
          {definition.example}
        </p>
      )}
    </li>
  );
};

export default Definitions;
