import Card from "../Card/Card";

import "./CardGrid.css";

function CardGrid({emojiCards}) {
    const cardGrid = emojiCards.map((emojiCard) => <Card key={emojiCard.id} emoji={emojiCard.emoji} />)
  return <main className="card-grid">
    {cardGrid}
  </main>;
}

export default CardGrid;
