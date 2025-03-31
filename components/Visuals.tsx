import React from "react";
import { Cursor } from "./Cursor";
import { MovableImages } from "./visuals/MovableImages";

export const Visuals = () => {
  return (
    <>
      <MovableImages />
      <div className="absolute max-md:hidden md:bottom-20 md:left-5 lg:bottom-[1.78rem] lg:left-56">
        <Cursor name={"Andrea"} />
      </div>
      <div className="absolute max-md:hidden md:right-44 md:top-5 lg:-top-4 lg:right-80">
        <Cursor name={"Bryan"} color={"red"} />
      </div>
    </>
  );
};
