"use client";

import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-4 text-3xl font-semibold hover:underline flex items-center"
      >
        {isOpen ? (
          <KeyboardArrowDownIcon className="mr-2" />
        ) : (
          <KeyboardArrowRightIcon className="mr-2" />
        )}
        {title}
      </button>
      {isOpen && children}
    </>
  );
}
