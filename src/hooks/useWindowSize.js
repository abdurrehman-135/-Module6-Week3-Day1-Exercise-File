import { useEffect, useState } from "react";

function getWindowSize() {
  if (typeof window === "undefined") {
    return { width: 1280, height: 720 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export function useWindowSize() {
  const [size, setSize] = useState(getWindowSize);

  useEffect(() => {
    function handleResize() {
      setSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

