import "./CardBack.css";
function CardBack({
  emojiCard,
  setSelectedCard,
  emojiObjects,
  generateChoices,
}) {
  return (
    <section
      className="card-back"
      onClick={() => {
        setSelectedCard(emojiCard.id, emojiCard.emoji);
        generateChoices(emojiObjects, emojiCard.id);
      }}
    >
      Check out the back of the card!
    </section>
  );
}
export default CardBack;
