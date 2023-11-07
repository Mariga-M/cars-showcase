'use client';
import { CustomButtonProps } from "@/types";
import Image from "next/image"
import { FC } from "react";

const CustomButton : FC<CustomButtonProps> = ({title, containerStyles, handleClick, btnType}) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className= {'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton