import Image from "next/image";
import type { DictionaryResponse } from "@/types";
import Word from "@/components/Word";

async function getWordFromDictionary(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
  );
  if (res.status === 404) throw new Error("Word not found");
  if (res.status !== 200) throw new Error("There has been an error");
  return await res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const search: DictionaryResponse = await getWordFromDictionary(
    searchParams.search || "hello"
  );
  return (
    <main className="flex min-h-screen my-10">
      <Word word={search} />
    </main>
  );
}
