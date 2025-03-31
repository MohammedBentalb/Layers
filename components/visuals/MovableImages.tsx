import Image from "next/image";
import { DragImages } from "@/motion/DragImages";
import { firstDesignExample, secondDesignExample } from "@/public/assets";

export const MovableImages = () => {
  return (
    <>
      <DragImages className="absolute -left-32 bottom-[-6.05rem] z-10 max-lg:hidden">
        <Image
          draggable={false}
          src={firstDesignExample}
          alt="Design example"
          className="hover:cursor-grab active:cursor-grabbing"
        />
      </DragImages>
      <DragImages className="absolute -right-64 bottom-[-5.9rem] z-10 max-lg:hidden">
        <Image
          draggable={false}
          src={secondDesignExample}
          alt="Design example"
          className="hover:cursor-grab active:cursor-grabbing"
        />
      </DragImages>
    </>
  );
};
