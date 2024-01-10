import React from "react";

export type FontVariantT = "serif" | "sans-serif" | "monospace";

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
    }
  }, [typography]);

  React.useEffect(() => {
    document.body.style.fontFamily = typography;
  }, [typography]);

  return { changeTypography, typography };
};

export default useTypography;
