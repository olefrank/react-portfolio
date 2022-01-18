import { ReactElement, ButtonHTMLAttributes } from "react";
import spinner from "./spinner.gif";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  showSpinner?: boolean;
};

export default function Button({ showSpinner, ...props }: Props): ReactElement {
  return (
    <button
      className="rounded-sm border border-sky-500 py-2 px-3 bg-sky-400 hover:bg-sky-600 text-white"
      {...props}
    >
      <div className="flex gap-4 items-center">
        {showSpinner ? (
          <img
            className="h-6 m-0"
            role="progressbar"
            src={spinner}
            alt="Loading..."
          />
        ) : null}
        <span className="m-0">{props.children}</span>
      </div>
    </button>
  );
}
