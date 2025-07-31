import Header from "./components/sections/header";
import "./index.css";
import Home from "./components/pages/home";
import { Route, Routes } from "react-router";
import Cupcakes from "./components/card/cupCakes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cupcake" element={<Cupcakes />} />
      </Routes>
    </>
  );
}

export default App;
