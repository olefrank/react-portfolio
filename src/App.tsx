import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Increment from "./Increment";
import Todos from "./Todo";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> | <Link to="increment">Increment</Link> |{" "}
            <Link to="todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="increment" element={<Increment />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
