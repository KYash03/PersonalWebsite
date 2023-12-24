"use client";

import { useState } from "react";
import Image from "next/image";
import Connect from "./components/Connect";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience"; // Make sure you have this component

interface Click {
  clickedState: boolean;
  setClickedState: (value: boolean) => void;
}

export default function Home() {
  const [isClickedConnect, setClickConnect] = useState(true);
  const [isClickedEducation, setClickEducation] = useState(false);
  const [isClickedWorkExperience, setClickWorkExperience] = useState(false);

  const handleClick =
    ({ setClickedState, clickedState }: Click) =>
    () => {
      setClickedState(!clickedState);
    };

  return (
    <main className="bg-slate-200 h-screen">
      <Header />
      <div className="flex font-sans text-lg">
        <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
          <Intro />
          {/* CONNECT */}
          <button
            onClick={handleClick({
              setClickedState: setClickConnect,
              clickedState: isClickedConnect,
            })}
            className="mb-6 text-2xl font-semibold hover:underline flex items-center"
          >
            <Image
              src={isClickedConnect ? "/down.png" : "/right.png"}
              alt="Toggle"
              width={20}
              height={20}
              className="mr-2"
            />
            Connect
          </button>
          {isClickedConnect && <Connect />}
          {/* EDUCATION AND AWARDS */}
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
          {/* WORK EXPERIENCE */}
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
        </div>
      </div>
    </main>
  );
}
