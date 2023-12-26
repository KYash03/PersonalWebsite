"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        {isClickedWorkExperience ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Work Experience
      </button>
      {isClickedWorkExperience && <WorkExperience />}
    </>
  );
}
