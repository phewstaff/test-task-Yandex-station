import React, { useState } from "react";
import black from "../assets/2.jpg";
import blue from "../assets/3.jpg";
import red from "../assets/4.jpg";
import beige from "../assets/5.jpg";
import { useRef } from "react";

const Main = () => {
  const [activeColor, setActiveColor] = useState("bg-black");

  const images = [
    { src: black, id: 1 },
    { src: blue, id: 2 },
    { src: red, id: 3 },
    { src: beige, id: 4 },
  ];
  const colors = [
    { color: "bg-indigo-950", id: 1 },
    { color: "bg-indigo-700", id: 2 },
    { color: "bg-red-700", id: 3 },
    { color: "bg-amber-100", id: 4 },
  ];

  const itemsRef = useRef(null);

  const scrollToId = (itemId) => {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  return (
    <>
      <section className="flex w-full justify-center pr-44 md:pr-44 lg:pr-72">
        <div className="flex items-center">
          <h1 className="text-[7vw] font-light ">Дизайн</h1>
          <p className="ml-4 flex h-10 max-w-[6rem] items-center text-start text-[1vw] md:max-w-[14rem]">
            Преемственность форм, световая панель управления и четыре новых
            цвета
          </p>
        </div>
      </section>

      <section className=" m-auto mt-4 max-w-md overflow-x-hidden rounded-[3rem] sm:max-w-3xl">
        <div className="relative -z-20  ">
          <div className="flex h-96 gap-2 sm:h-auto">
            {images.map((item) => {
              return (
                <img
                  ref={(node) => {
                    const map = getMap();
                    if (node) {
                      map.set(item.id, node);
                    } else {
                      map.delete(item.id);
                    }
                  }}
                  key={item.id}
                  className="rounded-[3rem] "
                  src={item.src}
                />
              );
            })}
          </div>

          {/* <button className="absolute left-[1%] top-1/2 -translate-y-1/2 transform text-3xl text-white">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>

          <button className="absolute right-[1%] top-1/2 -translate-y-1/2 transform text-3xl text-white">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button> */}
        </div>
      </section>

      <section className="m-auto mb-10 mt-3 flex gap-2">
        {colors.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveColor(item.color);
                scrollToId(item.id);
              }}
              className={`${
                activeColor === item.color
                  ? " outline outline-offset-4 outline-black"
                  : null
              } ${item.color} h-4 w-7 rounded-full`}
            ></button>
          );
        })}
      </section>
    </>
  );
};

export default Main;
