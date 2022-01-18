import { ReactElement, InputHTMLAttributes } from "react";
import classNames from "classnames";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export default function Input({ fullWidth, ...props }: Props): ReactElement {
  return (
    <input
      className={classNames("p-1", "border", "border-gray-400", {
        "w-full": fullWidth,
      })}
      {...props}
    />
  );
}
