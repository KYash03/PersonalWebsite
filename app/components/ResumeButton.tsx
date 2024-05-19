"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        className="mb-4 text-3xl font-semibold hover:underline flex items-center"
      >
        {isClickedResume ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Résumé
      </button>
      {isClickedResume && <Resume />}
    </>
  );
}
