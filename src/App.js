import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import CountdownTimer from "./CountdownTimer";
import Calculator from "./Calculator";
import RandomColor from "./RandomColor";
import FilterProducts from "./FilterProducts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<CountdownTimer />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/filter-products" element={<FilterProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;