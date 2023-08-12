import { useState } from "react";
import { Rnd } from "react-rnd";

export const MyHome = () => {
  const [state, setState] = useState({
    x: 0, // x position
    y: 0, // y position
    width: 320, // width
    height: 200, // height
  });
  return (
    <Rnd
      size={{ width: state.width, height: state.height }}
      position={{ x: state.x, y: state.y }}
      onDragStop={(e, d) => {
        setState({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          width: Number(ref.style.width),
          height: Number(ref.style.height),
          ...position,
        });
      }}
    >
      <section className="flex justify-center items-center">
        <span className="text-5xl">💡</span>
        <div className="text-xs font-bold flex flex-col gap-1">
          <span>Current Usage: {"120kw"} </span>
          <span>Status: {"off"}</span>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <span className="text-5xl">♨️</span>
        <div className="text-xs font-bold flex flex-col gap-1">
          <span>Current Usage: {"120kw"} </span>
          <span>Status: {"on"}</span>
        </div>
      </section>
    </Rnd>
  );
};
