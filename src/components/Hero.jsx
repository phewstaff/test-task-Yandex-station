import React from "react";
import heroImg from "../assets/1.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center  text-center">
      <h1 className="text-[7vw] font-light">Новая Яндекс Станция</h1>
      <div className="flex w-full justify-center text-center">
        <p className="w-3/5 text-[2vw] font-extralight" text->
          Умная колонка второго поколения с лаконичным дизайном и чистым звуком
          станет центром вашего умного дома с Алисой
        </p>
      </div>

      <div>
        <img src={heroImg} alt="колонка Яндекс Станция" />
      </div>
    </div>
  );
};

export default Hero;
