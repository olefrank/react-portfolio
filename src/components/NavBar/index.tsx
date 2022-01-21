import classNames from "classnames";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";

export default function NavBar(): ReactElement {
  const { increment, todo, searchField, signupForm } = paths;
  return (
    <nav className="px-4">
      <ul className="flex list-none flex-wrap p-0">
        <li className="p-0">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-4", "no-underline", {
                "text-sky-300": isActive,
              })
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="p-0">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-4", "no-underline", { "text-sky-300": isActive })
            }
            to={increment}
          >
            Increment
          </NavLink>
        </li>
        <li className="p-0">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-4", "no-underline", { "text-sky-300": isActive })
            }
            to={todo}
          >
            Todos
          </NavLink>
        </li>
        <li className="p-0">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-4", "no-underline", { "text-sky-300": isActive })
            }
            to={searchField}
          >
            SearchField
          </NavLink>
        </li>
        <li className="p-0">
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
