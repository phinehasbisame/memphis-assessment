"use client";
import { useState } from "react";

const useUserSize = () => {
  const [maxSize, setMaxSize] = useState<number>(10);
  const handleLoadFull = () => {
    setMaxSize(Infinity);
  };
  const handleLoadLess = () => {
    setMaxSize(10);
  };
  return { maxSize, handleLoadFull, handleLoadLess };
};

export default useUserSize;
