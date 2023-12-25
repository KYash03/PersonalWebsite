"use client";
import { useState } from "react";

import Image from "next/image";

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
        <Image
          src={isClickedProjects ? "/down.png" : "/right.png"}
          alt="Toggle"
          width={20}
          height={20}
          className="mr-2"
        />
        Projects
      </button>
      {isClickedProjects && <Projects />}
    </>
  );
}
