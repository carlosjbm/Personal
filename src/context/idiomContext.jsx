import { useState } from "react";
import { createContext } from "react";

export const idiomContext = createContext();

// eslint-disable-next-line react/prop-types
export function IdiomProvider({ children }) {
  const [english, setEnglish] = useState(false);

  const handleEnglish = () => {
    english ? setEnglish(false) : setEnglish(true);
  };

  return (
    <idiomContext.Provider value={{ english, handleEnglish }}>
      {children}
    </idiomContext.Provider>
  );
}
