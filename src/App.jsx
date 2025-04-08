import { createContext, useState } from "react";
import "./App.css";
import Counter from "./pages/Counter";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Counter />
      </LanguageProvider>
    </>
  );
}

export default App;
