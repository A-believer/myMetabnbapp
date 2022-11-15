import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
