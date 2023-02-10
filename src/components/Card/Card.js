import "./Card.css"
function Card({emoji}) {
    return (
        <section className="card">
           {emoji}
        </section>
    )
}
export default Card;