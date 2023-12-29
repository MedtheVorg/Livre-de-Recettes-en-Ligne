import React from "react";
import platimage from "../assets/images/2.png";
function HomePage() {
  return (
    <>
      <div>
        <div className="w-1/2">
          <h1 className="font-blod text-3xl md:text-5xl">
            Welcome to our website
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            natus. Pariatur sapiente atque esse repellendus nulla consequatur
            consectetur autem laboriosam.
          </p>
          <button className="btn btn-outline border-t-cyan-400">Accent</button>
        </div>
        <div className="w-1/2">
          <img src={platimage} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
