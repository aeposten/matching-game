import "./CardBack.css"
function CardBack({emojiCard, setSelectedCard}) {
    return (
        <section className="card-back" onClick={() => setSelectedCard(emojiCard.id)}>
            Check out the back of the card!
        </section>
    )
}
export default CardBack;