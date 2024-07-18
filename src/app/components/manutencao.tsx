"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ConstructionAnimation: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationStage, setAnimationStage] = useState("fade-in");
  const images = Array.from({ length: 8 }, (_, i) => `/character${i + 1}.webp`);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationStage === "fade-in") {
        setAnimationStage("fade-out");
      } else if (animationStage === "fade-out") {
        setAnimationStage("horizontal-fly");
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 8 ? 0 : prevIndex + 1
          );
          setAnimationStage("fade-in");
        }, 2000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [animationStage]);

  const transitionDuration = 700 + currentImageIndex * 50;

  return (
    <>
      <div className=" w-36 h-28">
        <Image
          src={images[currentImageIndex]}
          alt=""
          layout="fill"
          objectFit="contain"
          className={`image ${animationStage}`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
        />
      </div>
      <div className="absolute bottom-0 mt-4 pb-2 text-lg font-semibold text-gray-700">
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
