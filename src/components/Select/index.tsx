import { ReactElement, SelectHTMLAttributes } from "react";
import classNames from "classnames";

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  fullWidth?: boolean;
};

export default function Select({ fullWidth, ...props }: Props): ReactElement {
  return (
    <select
      className={classNames("p-1", "border", "border-gray-400", {
        "w-full": fullWidth,
      })}
      {...props}
    />
  );
}
