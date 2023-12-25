"use client";
import { useState } from "react";

import Image from "next/image";

import WorkExperience from "./WorkExperience";

import { handleClick } from "../Helper";

export default function WorkExperienceButton() {
  const [isClickedWorkExperience, setClickWorkExperience] = useState(false);

  return (
    <>
      <button
        onClick={handleClick({
          setClickedState: setClickWorkExperience,
          clickedState: isClickedWorkExperience,
        })}
        className="mb-6 text-2xl font-semibold hover:underline flex items-center"
      >
        <Image
          src={isClickedWorkExperience ? "/down.png" : "/right.png"}
          alt="Toggle"
          width={20}
          height={20}
          className="mr-2"
        />
        Work Experience
      </button>
      {isClickedWorkExperience && <WorkExperience />}{" "}
    </>
  );
}
