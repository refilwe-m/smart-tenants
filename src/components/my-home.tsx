import { useState } from "react";
import { Rnd } from "react-rnd";

export const MyHome = () => {
  const [myDevice, setMyDevice] = useState({
    x: 250, // x position
    y: 250, // y position
    width: 320, // width
    height: 200, // height
  });

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
    {
      x: 380, // x position
      y: 190, // y position
      width: 320, // width
      height: 200, // height
    },
  ]);

  const electronics = [
    {
      icon: "💡",
      name: "Light",
      usage: "120kw",
      status: "Off",
    },
    {
      icon: "📺",
      name: "TV",
      usage: "80kw",
      status: "Off",
    },
    {
      icon: "🖥",
      name: "Computer",
      usage: "10kw",
      status: "On",
    },
  ];
  const [saved, setSaved] = useState(false);
  return (
    <>
      {saved ? (
        state.map((item, index) => (
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
              console.log(currState);

              setState([...currState]);
            }}
          >
            {
              <section className="flex justify-center items-center gap-2">
                <span className="text-5xl">{electronics[index].icon}</span>
                <div className="text-xs font-bold flex flex-col gap-1">
                  <span>Item: {electronics[index].name}</span>
                  <span>Current Usage: {electronics[index].usage} </span>
                  <div>
                    Status:{" "}
                    <span
                      className={
                        electronics[index].status === "Off"
                          ? "text-red-500"
                          : "text-green-400"
                      }
                    >
                      {electronics[index].status}
                    </span>
                  </div>
                </div>
              </section>
            }
          </Rnd>
        ))
      ) : (
        <Rnd
          size={{ width: myDevice.width, height: myDevice.height }}
          position={{ x: myDevice.x, y: myDevice.y }}
          onDragStop={(e, d) => {
            setMyDevice({ x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setMyDevice({
              width: Number(ref.style.width),
              height: Number(ref.style.height),
              ...position,
            });
          }}
        >
          {
            <section className="flex justify-center items-center gap-2">
              <span className="text-5xl">{electronics[0].icon}</span>
              <div className="text-xs font-bold flex flex-col gap-1">
                <span>Item: {electronics[0].name}</span>
                <span>Current Usage: {electronics[0].usage} </span>
                <div>
                  Status:{" "}
                  <span
                    className={
                      electronics[0].status === "Off"
                        ? "text-red-500"
                        : "text-green-400"
                    }
                  >
                    {electronics[0].status}
                  </span>
                </div>
              </div>
            </section>
          }
        </Rnd>
      )}
      <button onClick={() => setSaved(true)}>Save</button>
    </>
  );
};
