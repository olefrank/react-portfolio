import { ReactElement } from "react";
import { Link } from "react-router-dom";

export type Props = {
  title: string;
  path: string;
};

export default function PortfolioItem({ title, path }: Props): ReactElement {
  return (
    <Link to={path} className="no-underline">
      <div className="w-40 h-40 p-4 border bg-black text-white hover:bg-white hover:text-black">
        <div className="text-4xl font-bold break-all">{title}</div>
      </div>
    </Link>
  );
}
