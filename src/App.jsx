import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          {/* Add more routes as needed */}
          {/* Example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

