"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isClickedConnect, setClickConnect] = useState(false);

  const handleClick = () => {
    setClickConnect(!isClickedConnect);
  };

  return (
    <main>
      <header className="flex flex-row justify-center space-x-12 w-full max-w-screen-md mx-auto mt-6 mb-8 border-b-2 border-black pb-4">
        <p className="text-5xl font-semibold text-center">Yash Kumar</p>
      </header>
      <div className="flex h-screen font-sans text-lg">
        <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
          <p>Hi, I'm Yash!</p>
          <p>
            I'm a Data Science student at UBC with a strong machine learning,
            data analysis, and web and mobile app development background. I'm
            seeking an internship position to apply and further develop skills
            in dynamic and challenging environments.
          </p>
          <div>
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
            {isClickedConnect && (
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="p-1 flex items-center">
                  <Image
                    src="/envelope.png"
                    alt="email-icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="font-semibold mr-1">Email:</span>
                  <a className="underline" href="mailto:kyash03@student.ubc.ca">
                    kyash03@student.ubc.ca
                  </a>
                </p>
                <p className="p-1 flex items-center">
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="font-semibold mr-1">LinkedIn:</span>
                  <a
                    className="underline"
                    href="http://linkedin.com/in/kyash03/"
                    target="_blank"
                  >
                    Yash Kumar
                  </a>
                </p>
                <p className="p-1 flex items-center">
                  <Image
                    src="/github.png"
                    alt="GitHub icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="font-semibold mr-1">GitHub:</span>
                  <a
                    className="underline"
                    href="http://github.com/kyash03"
                    target="_blank"
                  >
                    Yash Kumar
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
