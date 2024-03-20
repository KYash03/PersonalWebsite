"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        className="mb-6 text-3xl font-semibold hover:underline flex items-center"
      >
        {isClickedTechnicalSkills ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Technical Skills
      </button>
      {isClickedTechnicalSkills && <TechnicalSkills />}
    </>
  );
}
