"use client";

import React from "react";
import ConstructionAnimation from "./manutencao";

interface AutoAlertProps {
  message: string;
}

const AutoAlert: React.FC<AutoAlertProps> = ({ message }) => {
  return (
    <div className="absolute flex justify-center w-full h-full z-10 bg-black text-white text-xl rounded-md text-center p-2 overflow-hidden">
      <ConstructionAnimation />
    </div>
  );
};

export default AutoAlert;
