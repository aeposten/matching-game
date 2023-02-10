import Card from "../Card/Card";
import CardBack from "../CardBack/CardBack";

import "./CardGrid.css";

function CardGrid({ emojiCards, setSelectedCard }) {
  const cardGrid = emojiCards.map((emojiCard) => {
    return emojiCard.flipped ? (
      <Card
        key={emojiCard.id}
        emojiCard={emojiCard}
        setSelectedCard={setSelectedCard}
      />
    ) : (
      <CardBack
        key={emojiCard.id}
        setSelectedCard={setSelectedCard}
        emojiCard={emojiCard}
      />
    );
  });
  return <main className="card-grid">{cardGrid}</main>;
}

export default CardGrid;
