import React from "react";

type FontVariantT = "serif" | "sans-serif" | "mono";

type FontVariants = {
  [key in FontVariantT]: string;
};

const fontVariants = {
  serif: "font-serif",
  "sans-serif": "font-sans",
  mono: "font-mono",
} as FontVariants;

const useTypography = () => {
  const [typography, setTypography] = React.useState<FontVariantT>("serif");
  const changeTypography = (variant: FontVariantT) => {
    setTypography(variant);
    localStorage.setItem("typography", variant);
  };
  React.useEffect(() => {
    const localTypography = localStorage.getItem("typography");
    if (localTypography && localTypography !== typography) {
      changeTypography(localTypography as FontVariantT);
      const root = window.document.body;
      root.classList.remove(
        ...Object.values(fontVariants).filter(
          (variant) => variant !== fontVariants[localTypography as FontVariantT]
        )
      );
      root.classList.add(fontVariants[localTypography as FontVariantT]);
      return;
    }
    const root = window.document.body;
    root.classList.remove(
      ...Object.values(fontVariants).filter(
        (variant) => variant !== fontVariants[typography]
      )
    );
    root.classList.add(fontVariants[typography]);
  }, [typography]);

  return { changeTypography, typography };
};

export default useTypography;
