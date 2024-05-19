"use client";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        className="mb-4 text-3xl font-semibold hover:underline flex items-center"
      >
        {isClickedConnect ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        Connect
      </button>
      {isClickedConnect && <Connect />}
    </>
  );
}
