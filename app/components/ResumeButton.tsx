"use client";
import { useState } from "react";

import Image from "next/image";

import Resume from "./Resume";

import { handleClick } from "../Helper";

export default function ResumeButton() {
  const [isClickedResume, setClickResume] = useState(false);

  return (
    <>
      <button
        onClick={handleClick({
          setClickedState: setClickResume,
          clickedState: isClickedResume,
        })}
        className="mb-6 text-2xl font-semibold hover:underline flex items-center"
      >
        <Image
          src={isClickedResume ? "/down.png" : "/right.png"}
          alt="Toggle"
          width={20}
          height={20}
          className="mr-2"
        />
        Résumé
      </button>
      {isClickedResume && <Resume />}
    </>
  );
}
