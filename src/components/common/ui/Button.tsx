"use client";

import { ButtonProps } from "@/interfaces";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
