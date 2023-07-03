import { useState, useEffect } from "react";

const getWindowsDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export default function useWindowsDimensions() {
  const [windowsDimensions, setWindowsDimensions] = useState(
    getWindowsDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowsDimensions(getWindowsDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowsDimensions;
}
