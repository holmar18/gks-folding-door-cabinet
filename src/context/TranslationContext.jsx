import {createContext, useState, useContext, useEffect} from "react";
import translations from "../utils/translations";

const Translation = createContext();

// Create a hook to use the context
export function useTranslationContext() {
  return useContext(Translation);
}

const TranslationContext = ({children}) => {
  const [currentTranslation, setCurrentTranslation] = useState("Icelandic");
  const [translation, setTranslation] = useState(
    translations(currentTranslation)
  );

  useEffect(() => {
    setTranslation(translations(currentTranslation));
  }, [currentTranslation]);

  const toggle = () => {
    if (currentTranslation === "Icelandic") {
      setCurrentTranslation("English");
    } else {
      setCurrentTranslation("Icelandic");
    }
  };

  return (
    <Translation.Provider
      value={{
        currentTranslation: currentTranslation,
        setCurrentTranslation: toggle,
        translations: translation,
      }}>
      {children}
    </Translation.Provider>
  );
};

export default TranslationContext;
