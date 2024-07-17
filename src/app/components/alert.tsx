"use client";

import React, { useEffect } from "react";
import ConstructionAnimation from "./manutencao";

interface AutoAlertProps {
  message: string;
  onDismiss: () => void;
}

const AutoAlert: React.FC<AutoAlertProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDismiss();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onDismiss]);

  return (
    <div className="absolute flex justify-center w-full h-full z-10 bg-black text-white text-xl rounded-md text-center p-2 overflow-hidden">
      <ConstructionAnimation />
    </div>
  );
};

export default AutoAlert;
