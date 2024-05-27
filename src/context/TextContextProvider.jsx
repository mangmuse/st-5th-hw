import { createContext, useEffect, useState } from "react";

export const TextsContext = createContext();

export function TextsContextProvider({ children }) {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );
  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };
  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);
  return (
    <TextsContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
}
