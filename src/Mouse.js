import { useState } from "react";

export default function Mouse(props) {
  const [position, setPosition] = useState({});

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="box">
      {props.render(position)}
    </div>
  );
}
