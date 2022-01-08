import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Increment from "./Increment";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> | <Link to="increment">Increment</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="increment" element={<Increment />} />
      </Routes>
    </div>
  );
}

export default App;
