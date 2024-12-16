import "./style.css";

function Card({ imgURL, name, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default Card;
