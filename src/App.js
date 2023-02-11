import { useState, useEffect } from "react";

import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import EMOJIS from "./emojiData";

import { nanoid } from "nanoid";

function App() {
  const [started, setStarted] = useState(false);
  const [emojiObjects, setEmojiObjects] = useState([]);
  const [cardChoices, setCardChoices] = useState({
    cardOne: null,
    cardTwo: null,
  });

  function setSelectedCard(cardId) {
    setEmojiObjects((prevEmojiObjects) =>
      prevEmojiObjects.map((emojiObject) => {
        return emojiObject.id === cardId
          ? {
              ...emojiObject,
              flipped: !emojiObject.flipped,
            }
          : emojiObject;
      })
    );
  }

  function generateChoices(emojiObjects, cardId) {
    emojiObjects.map((emojiObject) => {
      return emojiObject.id === cardId
        ? !cardChoices.cardOne
          ? setCardChoices((prevCardChoices) => ({
              ...prevCardChoices,
              cardOne: emojiObject,
            }))
          : setCardChoices((prevCardChoices) => ({
              ...prevCardChoices,
              cardTwo: emojiObject,
            }))
        : emojiObject;
    });
  }

  console.log(cardChoices);
  function generateEmojiObjects() {
    let generatedObjects = [];
    for (let i = 0; i <= 1; i++) {
      EMOJIS.map((emoji) => {
        return generatedObjects.push({
          emoji: emoji,
          id: nanoid(),
          flipped: false,
          matched: false,
        });
      });
    }
    setEmojiObjects((prevEmojiObjects) =>
      generatedObjects.sort((a, b) => 0.5 - Math.random())
    );
  }

  function startGame() {
    setStarted((prevStarted) => !prevStarted);
  }
  useEffect(() => {
    generateEmojiObjects();
  }, [started]);

  return (
    <div className="App">
      {!started ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <CardGrid
          emojiCards={emojiObjects}
          setSelectedCard={setSelectedCard}
          emojiObjects={emojiObjects}
          generateChoices={generateChoices}
        />
      )}
    </div>
  );
}

export default App;
