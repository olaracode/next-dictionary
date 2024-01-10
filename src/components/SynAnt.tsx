import React from "react";
import Link from "next/link";
const SynonymsAntonyms = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => {
  return (
    <div className="mt-4">
      <h4 className="mb-1 text-gray-500 dark:text-white">{title}: </h4>
      <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-white">
        {list.map((s, i) => {
          return (
            <li key={title + i + s}>
              <Link
                href={`?search=${s}`}
                className="text-sm capitalize text-purple-700 dark:text-purple-300 hover:underline"
              >
                {s}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SynonymsAntonyms;
