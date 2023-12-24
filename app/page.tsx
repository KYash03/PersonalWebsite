"use client";

import { useState } from "react";
import Image from "next/image";
import Connect from "./components/Connect";
import Header from "./components/Header";
import Intro from "./components/Intro";

export default function Home() {
  const [isClickedConnect, setClickConnect] = useState(false);

  const handleClick = () => {
    setClickConnect(!isClickedConnect);
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
              onClick={handleClick}
              className="mb-2 text-2xl font-semibold hover:underline flex items-center"
            >
              {isClickedConnect ? (
                <Image
                  src="/down.png"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
              ) : (
                <Image
                  src="/right.png"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}{" "}
              Connect
            </button>
            {isClickedConnect && <Connect />}

            {/* EDUCATION */}
          </div>
        </div>
      </div>
    </main>
  );
}
