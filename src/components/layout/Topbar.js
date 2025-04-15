import React from "react";
import Image from "next/image";

const TopBar = () => {
  return (
    <header className="py-6 absolute right-0 left-0 z-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div>
              <a href="#" className="">
                <Image
                  src="/images/logo.svg"
                  alt="Hero"
                  width={160}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 items-center justify-end">
            <a href="#" className="bg-indigo-50 text-indigo-600 p-2 rounded-lg color-gray-50">
              <Image
                src="/images/whatsapp.png"
                alt="Hero"
                width={20}
                height={20}
                style={{ objectFit: "content" }}
              />
            </a>
            <a href="#" className="bg-indigo-50 from-indigo-900 to-purple-800 p-2 rounded-lg ">
                <Image
                  src="/images/skype.png"
                  alt="Hero"
                  width={20}
                  height={20}
                  style={{ objectFit: "content" }}
                />
              </a>
            <a href="#" className="bg-indigo-50 from-indigo-900 to-purple-800 p-2 rounded-lg ">
                <Image
                  src="/images/email.png"
                  alt="Hero"
                  width={20}
                  height={20} 
                  style={{ objectFit: "content" }}
                />
              </a>
              <a href="#" className="bg-indigo-50 from-indigo-900 to-purple-800 p-2 rounded-lg ">
                <Image
                  src="/images/moon.png"
                  alt="Hero"
                  width={20}
                  height={20}
                  style={{ objectFit: "content" }}
                />
              </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
