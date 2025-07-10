import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ ScrollToTop";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Terms from "./pages/Terms";



function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/terms" element={<Terms />}/>
          {/* Add more routes as needed */}
          {/* Example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

