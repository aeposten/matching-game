import "./Card.css";
function Card({ emojiCard, setSelectedCard, emojiObjects, generateChoices }) {
  return (
    <section
      className="card"
      onClick={() => {
        setSelectedCard(emojiCard.id, emojiCard.emoji);
        generateChoices(emojiObjects, emojiCard.id);
      }}
    >
      {emojiCard.emoji}
    </section>
  );
}
export default Card;
