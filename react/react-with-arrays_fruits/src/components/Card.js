import "./Card.css";

export default function Card({ id, name, color }) {
  return (
    <p className={`card card--${color} `}>
      {name} (ID: {id} )
    </p>
  );
}
