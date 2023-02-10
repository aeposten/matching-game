import Card from "../Card/Card";

import "./CardGrid.css";

function CardGrid({ emojis }) {
  const cardGrid = emojis.map((emoji) => <Card emoji={emoji} />);
  return <main className="card-grid">{cardGrid}</main>;
}

export default CardGrid;
