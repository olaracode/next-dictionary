"use client";
import React from "react";
import { useRouter } from "next/navigation";
const SearchError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();
  React.useEffect(() => {
    console.log(error, "error");
  }, [error]);

  return (
    <div className="text-center my-10">
      <h1 className="font-bold">
        {error.message === "Word not found" ||
        error.message === "There has been an error"
          ? error.message
          : "Ha ocurrido un error"}
      </h1>
      <button
        className="bg-purple-500 text-white rounded p-2 mt-5"
        onClick={() => router.push("/")}
      >
        Volver al inicio para seguir buscando
      </button>
    </div>
  );
};

export default SearchError;
