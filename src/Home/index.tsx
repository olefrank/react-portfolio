import { paths } from "../constants";
import PortfolioItem from "./PortfolioItem";

export default function Home() {
  const { increment, todo, searchField, signupForm } = paths;
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Oles ReactJS Portfolio</h1>
      <div className="flex flex-wrap gap-4">
        <PortfolioItem title="Increment" path={increment} />
        <PortfolioItem title="Todo" path={todo} />
        <PortfolioItem title="Search Field" path={searchField} />
        <PortfolioItem title="Signup Form" path={signupForm} />
      </div>
    </div>
  );
}
