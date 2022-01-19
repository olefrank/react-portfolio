import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Increment from "./Increment";
import Todos from "./Todo";
import SearchField from "./SearchField";
import SignupForm from "./SignupForm";
import NavBar from "./components/NavBar";
import { paths } from "./constants";

const { increment, todo, searchField, signupForm } = paths;

function App() {
  return (
    <div className="prose">
      <NavBar />
      <div className="w-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={increment} element={<Increment />} />
          <Route path={todo} element={<Todos />} />
          <Route path={searchField} element={<SearchField />} />
          <Route path={signupForm} element={<SignupForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
