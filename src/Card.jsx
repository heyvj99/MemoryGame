import "./style.css";

function Card({ name, handler, url }) {
  const newHandleClick = () => {
    handler(name);
  };

  return (
    <>
      <div className="card" onClick={newHandleClick}>
        <img src={url} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default Card;
