import React from "react";

export const useMediaQuery = (query: string) => {
  const firstTime = React.useRef(true);
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaQuery.matches);

  React.useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
      console.log("render");
    };

    if (!firstTime.current) mediaQuery.addEventListener("change", handler);
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return matches;
};
