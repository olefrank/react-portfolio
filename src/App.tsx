import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Increment from "./Increment";
import Todos from "./Todo";
import SearchField from "./SearchField";

function App() {
  return (
    <div className="prose">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="increment">Increment</Link>
            {" | "}
            <Link to="todos">Todos</Link>
            {" | "}
            <Link to="search-field">SearchField</Link>
          </li>
        </ul>
      </nav>
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="increment" element={<Increment />} />
          <Route path="todos" element={<Todos />} />
          <Route path="search-field" element={<SearchField />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
