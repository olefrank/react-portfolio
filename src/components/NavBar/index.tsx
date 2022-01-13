import classNames from "classnames";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(): ReactElement {
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
            to="increment"
          >
            Increment
          </NavLink>
        </li>
        <li className="after:content-['|'] after:mx-1">
          <NavLink
            className={({ isActive }) =>
              classNames("mr-1", "no-underline", { "text-sky-300": isActive })
            }
            to="todos"
          >
            Todos
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) =>
              classNames("no-underline", { "text-sky-300": isActive })
            }
            to="search-field"
          >
            SearchField
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
