import { useState } from "react";
import { Rnd } from "react-rnd";

export const MyHome = () => {
  const [state, setState] = useState([
    {
      x: 0, // x position
      y: 0, // y position
      width: 320, // width
      height: 200, // height
    },
    {
      x: 80, // x position
      y: 90, // y position
      width: 320, // width
      height: 200, // height
    },
  ]);

  const electronics = [
    {
      icon: "💡",
      name: "Light",
      usage: "120kw",
      status: "off",
    },
    {
      icon: "📺",
      name: "TV",
      usage: "80kw",
      status: "off",
    },
    {
      icon: "🖥",
      name: "Computer",
      usage: "120kw",
      status: "off",
    },
  ];

  return (
    <>
      {state.map((item, index) => (
        <Rnd
          size={{ width: item.width, height: item.height }}
          position={{ x: item.x, y: item.y }}
          onDragStop={(e, d) => {
            setState({ x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            const currState = [...state];
            currState[index] = {
              width: Number(ref.style.width),
              height: Number(ref.style.height),
              ...position,
            };
            setState(currState);
          }}
        >
          {
            <section className="flex justify-center items-center">
              <span className="text-5xl">{electronics[index].icon}</span>
              <div className="text-xs font-bold flex flex-col gap-1">
                <span>Item: {electronics[index].name}</span>
                <span>Current Usage: {electronics[index].usage} </span>
                <span>Status: {electronics[index].status}</span>
              </div>
            </section>
          }
        </Rnd>
      ))}
    </>
  );
};
