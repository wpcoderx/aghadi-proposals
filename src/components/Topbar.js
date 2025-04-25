import React from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-lg font-semibold">
        <Link href="/"> Aghadi Infotech </Link>
      </h1>
      <div className="flex items-center gap-4">
        <AuthButton />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Topbar;
