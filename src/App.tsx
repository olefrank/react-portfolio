import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Increment from "./Increment";
import Todos from "./Todo";
import SearchField from "./SearchField";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="prose">
      <NavBar />
      <div className="w-screen p-4">
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
