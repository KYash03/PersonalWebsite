"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        {isClickedEducation ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Education and Awards
      </button>
      {isClickedEducation && <Education />}
    </>
  );
}
