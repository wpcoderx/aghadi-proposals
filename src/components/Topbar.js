"use client";
import ThemeToggle from "./ThemeToggle";


const Topbar = () => {

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-lg font-semibold">Aghadi Infotech</h1>
      <ThemeToggle />
    </div>
  );
};

export default Topbar;
