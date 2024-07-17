"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ConstructionAnimation: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const images = Array.from({ length: 8 }, (_, i) => `/character${i + 1}.webp`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 7 ? 1 : prevIndex + 1
      );
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" w-36 h-28">
        <Image
          src={images[currentImageIndex]}
          alt=""
          layout="fill"
          objectFit="contain"
          className="transition-transform translate-y-4 duration-600 w-36 h-28"
        />
      </div>
      <div className="absolute bottom-0 mt-4 text-lg font-semibold text-gray-700">
        <p className="text-white">Cadastro concluido com sucesso!</p>
        Conheça mais <LoadingDots />
      </div>
    </>
  );
};

const LoadingDots: React.FC = () => {
  return (
    <span className="inline-flex">
      <span className="animate-[blink_1.5s_infinite]">.</span>
      <span className="animate-[blink_1.5s_infinite] delay-[0.3s]">.</span>
      <span className="animate-[blink_1.5s_infinite] delay-[0.6s]">.</span>
    </span>
  );
};

export default ConstructionAnimation;
