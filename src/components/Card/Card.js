import "./Card.css";
function Card({ emojiCard, setSelectedCard }) {
  return (
    <section className="card" onClick={() => setSelectedCard(emojiCard.id)}>
      {emojiCard.emoji}
    </section>
  );
}
export default Card;
