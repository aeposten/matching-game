import { useState, useEffect } from "react";

import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import EMOJIS from "./emojiData";

import { nanoid } from "nanoid";

function App() {
  const [emojiObjects, setEmojiObjects] = useState([]);
  function generateEmojiObjects() {
    let generatedObjects = [];
    for (let i = 0; i <= 1; i++) {
      EMOJIS.map((emoji) => {
        return generatedObjects.push({
          emoji: emoji,
          id: nanoid(),
          matched: false,
        });
      });
    }
    setEmojiObjects((prevEmojiObjects) =>
      generatedObjects.sort((a, b) => 0.5 - Math.random())
    );
  }

  useEffect(() => {
    generateEmojiObjects();
  }, []);

  return <div className="App">
    <CardGrid emojiCards={emojiObjects} />  
  </div>;
}

export default App;
