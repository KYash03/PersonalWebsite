"use client";
import { useState } from "react";

import Image from "next/image";

import Education from "./Education";

import { handleClick } from "../Helper";

export default function EducationButton() {
  const [isClickedEducation, setClickEducation] = useState(false);

  return (
    <>
      <button
        onClick={handleClick({
          setClickedState: setClickEducation,
          clickedState: isClickedEducation,
        })}
        className="mb-6 text-2xl font-semibold hover:underline flex items-center"
      >
        <Image
          src={isClickedEducation ? "/down.png" : "/right.png"}
          alt="Toggle"
          width={20}
          height={20}
          className="mr-2"
        />
        Education and Awards
      </button>
      {isClickedEducation && <Education />}
    </>
  );
}
