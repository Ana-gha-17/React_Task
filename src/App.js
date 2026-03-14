import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import CountdownTimer from "./CountdownTimer";
import Calculator from "./Calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<CountdownTimer />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;