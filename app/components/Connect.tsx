"use client";

import { useState } from "react";
import Image from "next/image";

export default function Connect() {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClicked);
  };

  return (
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
  );
}
