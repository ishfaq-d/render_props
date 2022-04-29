export default function Cat({ position }) {
  return (
    <img
      src="https://friendlystock.com/wp-content/uploads/2018/05/2-cat-chasing-mouse-cartoon-clipart.jpg"
      alt="Cat"
      width="100px"
      height="60px"
      style={{ position: "absolute", left: position.x, top: position.y }}
      className="cat"
    />
  );
}
