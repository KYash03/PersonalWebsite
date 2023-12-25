"use client";
import { useState } from "react";

import Image from "next/image";

import TechnicalSkills from "./TechnicalSkills";

import { handleClick } from "../Helper";

export default function TechnicalSkillsButton() {
  const [isClickedTechnicalSkills, setClickTechnicalSkills] = useState(false);

  return (
    <>
      <button
        onClick={handleClick({
          setClickedState: setClickTechnicalSkills,
          clickedState: isClickedTechnicalSkills,
        })}
        className="mb-6 text-2xl font-semibold hover:underline flex items-center"
      >
        <Image
          src={isClickedTechnicalSkills ? "/down.png" : "/right.png"}
          alt="Toggle"
          width={20}
          height={20}
          className="mr-2"
        />
        Top Technical Skills
      </button>
      {isClickedTechnicalSkills && <TechnicalSkills />}
    </>
  );
}
