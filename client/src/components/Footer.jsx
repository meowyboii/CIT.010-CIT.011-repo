import React from "react";
import logoImg from "../assets/img/__LOGO.png";

export const Footer = () => {
  return (
    <footer className="h-auto bg-black p-20">
      <div className="flex items-center m-auto w-3/4 ">
        <div className="logo w-1/2 justify-center"><img src={logoImg} alt="Logo" style={{ width: 310 }}></img></div>
        <div className="text w-1/2">
          <div className="socials text-purple justify-center">
            <h1 className="text-xl">Facebook | Twitter | Reddit</h1>
          </div>
          <div className="copyright text-purple font-bold font-fredoka">
            <h2>Copyright 2023 Etits Games. All Rights Reserved</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
