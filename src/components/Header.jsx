import React from "react";
import Loog from "./Loog";
import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-opacity-0 sticky top-0 z-2[0] max-auto flex w-full items-center justify-between">
      <Loog />
      <Nav />
    </header>
  );
}

export default Header;
