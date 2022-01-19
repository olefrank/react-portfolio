import { Link } from "react-router-dom";
import { paths } from "../constants";

export default function Home() {
  const { increment, todo, searchField, signupForm } = paths;
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Oles ReactJS Portfolio</h1>
      <div className="flex flex-wrap gap-4">
        <Link to={increment} className="no-underline">
          <div className="w-40 h-40 p-4 border hover:bg-black hover:text-white">
            <div className="text-4xl font-bold break-all">Increment</div>
          </div>
        </Link>
        <Link to={todo} className="no-underline">
          <div className="w-40 h-40 p-4 border hover:bg-black hover:text-white">
            <div className="text-4xl font-bold break-all">Todos</div>
          </div>
        </Link>
        <Link to={searchField} className="no-underline">
          <div className="w-40 h-40 p-4 border hover:bg-black hover:text-white">
            <div className="text-4xl font-bold break-all">Search Field</div>
          </div>
        </Link>
        <Link to={signupForm} className="no-underline">
          <div className="w-40 h-40 p-4 border hover:bg-black hover:text-white">
            <div className="text-4xl font-bold break-all">Signup Form</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
