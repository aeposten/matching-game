import CardGrid from "./components/CardGrid/CardGrid";
import EMOJIS from "../public/emojiData";
function App() {

  return (
    <div className="App">
      <CardGrid emojis={EMOJIS}/>
    </div>
  );
}

export default App;
