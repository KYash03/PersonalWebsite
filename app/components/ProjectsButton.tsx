"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Projects from "./Projects";

import { handleClick } from "../Helper";

export default function ProjectsButton() {
  const [isClickedProjects, setClickProjects] = useState(false);

  return (
    <>
      <button
        onClick={handleClick({
          setClickedState: setClickProjects,
          clickedState: isClickedProjects,
        })}
        className="mb-6 text-2xl font-semibold hover:underline flex items-center"
      >
        {isClickedProjects ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Projects
      </button>
      {isClickedProjects && <Projects />}
    </>
  );
}
