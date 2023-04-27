import React from "react";
import img from "../assets/Yandex.svg";
import img2 from "../assets/logoText.svg";
import Button from "./Button";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mb-24">
      <div className="fixed flex w-full items-center justify-around bg-white font-roboto font-extrabold">
        <div className=" z-50 flex w-full items-center justify-between bg-white p-5 md:w-auto ">
          <div className="flex h-12 items-center">
            <img
              className="mr-2 h-8 text-center md:cursor-pointer "
              src={img}
              alt=""
            />
            <img className="" src={img2} alt="" />
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="flex cursor-pointer items-center text-3xl md:hidden"
          >
            <ion-icon name={`${open ? "close" : "menu-outline"}`}></ion-icon>
          </div>
        </div>
        <ul className="hidden items-center gap-5 font-normal text-zinc-400 md:flex">
          <li>
            <a href="#">Алиса</a>
          </li>
          <li>
            <a href="#">Умные колонки</a>
          </li>
          <li>
            <a href="#">Яндекс ТВ</a>
          </li>
          <li>
            <a href="#">Умный дом</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button />
        </div>

        {/* mobile nav */}
        <ul
          className={`absolute top-20 z-20  min-h-screen w-full  bg-gray-200 py-5  pl-4 font-normal duration-500 ease-out md:hidden ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <li>
            <a className="my-4 block max-w-fit" href="#">
              Алиса
            </a>
          </li>
          <li>
            <a className="my-4 block max-w-fit" href="#">
              Умные колонки
            </a>
          </li>
          <li>
            <a className="my-4 block max-w-fit" href="#">
              Яндекс ТВ
            </a>
          </li>
          <li>
            <a className="my-4 mb-5 block max-w-fit" href="#">
              Умный дом
            </a>
          </li>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
