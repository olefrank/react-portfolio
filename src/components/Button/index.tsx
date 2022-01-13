import React, { ReactElement, MouseEvent } from "react";

export type Props = {
  color?: "white";
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: any;
};
export default function Button({
  color,
  children,
  onClick,
}: Props): ReactElement {
  return (
    <button
      className="rounded-sm border border-sky-500 py-1 px-2 bg-sky-400 hover:bg-sky-600 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
