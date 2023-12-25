"use client";
import { useState } from "react";

import Image from "next/image";

import Connect from "./Connect";

import { handleClick } from "../Helper";

export default function ConnectButton() {
  const [isClickedConnect, setClickConnect] = useState(true);

  return (
    <>
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
    </>
  );
}
