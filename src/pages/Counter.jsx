import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LanguageContext } from "../context/LanguageContext";

const Counter = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [comment, setComment] = useState("");
  const textAreaRef = useRef(null);
  console.log(lang);
  
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert(`Comment submitted in ${lang.toUpperCase()}: ${comment}`);
      setComment("");
    },
    [comment, lang]
  );

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <div className="counter-container">
      <div className="lang-select">
        <select value={lang} onChange={handleLangChange}>
          <option value="uz">UZ</option>
          <option value="ru">RUS</option>
          <option value="en">ENG</option>
        </select>
      </div>

      <div className="textarea-wrapper">
        <textarea
          ref={textAreaRef}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave your comment..."
        />
      </div>

      <div className="submit-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Counter;
