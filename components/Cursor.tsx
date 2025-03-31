import { twMerge } from "tailwind-merge";

type CursorProps = {
  name: string;
  color?: string;
};

export const Cursor = ({ name, color }: CursorProps) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="feather feather-mouse-pointer size-5 text-white"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute left-full top-full">
        <label
          className={twMerge(
            "inline-flex rounded-full rounded-tl-none bg-blue-600 px-2 text-sm font-semibold",
            color === "red" && "bg-red-600"
          )}
        >
          {name}
        </label>
      </div>
    </div>
  );
};
