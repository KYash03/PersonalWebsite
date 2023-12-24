"use client";

import { useState } from "react";
import Image from "next/image";
import Connect from "./components/Connect";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Education from "./components/Education";

interface Click {
  clickedState: boolean;
  setClickedState: (value: boolean) => void;
}

export default function Home() {
  const [isClickedConnect, setClickConnect] = useState(false);
  const [isClickedEducation, setClickEducation] = useState(false);

  const handleClick =
    ({ setClickedState, clickedState }: Click) =>
    () => {
      setClickedState(!clickedState);
    };

  return (
    <main>
      <Header />
      <div className="flex h-screen font-sans text-lg">
        <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
          <Intro />
          <div>
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

            {/* EDUCATION */}
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
              Education
            </button>
            {isClickedEducation && <Education />}
          </div>
        </div>
      </div>
    </main>
  );
}
