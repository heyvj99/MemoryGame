import "./style.css";

function Card({ name, handler, url }) {
  const newHandleClick = () => {
    handler(name);
  };

  return (
    <>
      <div className="card" onClick={newHandleClick}>
        <h2>{name}</h2>
        <img src={url} />
      </div>
    </>
  );
}

export default Card;
