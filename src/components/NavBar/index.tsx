import classNames from "classnames";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";

export default function NavBar(): ReactElement {
  const { increment, todo, searchField, signupForm } = paths;
  return (
    <nav>
      <ul className="flex p-0 list-none">
        <li className="after:content-['|'] after:ml-1">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-1", "no-underline", { "text-sky-300": isActive })
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="after:content-['|'] after:mx-1">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-1", "no-underline", { "text-sky-300": isActive })
            }
            to={increment}
          >
            Increment
          </NavLink>
        </li>
        <li className="after:content-['|'] after:mx-1">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-1", "no-underline", { "text-sky-300": isActive })
            }
            to={todo}
          >
            Todos
          </NavLink>
        </li>
        <li className="after:content-['|'] after:mx-1">
          <NavLink
            className={({ isActive }) =>
              classNames("no-underline", { "text-sky-300": isActive })
            }
            to={searchField}
          >
            SearchField
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              classNames("no-underline", { "text-sky-300": isActive })
            }
            to={signupForm}
          >
            Signup form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
