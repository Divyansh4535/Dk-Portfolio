import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Skill from "./Screens/Skill";
import Work from "./Screens/Work";
import Footer from "./Components/Footer";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
        <div className="w-full">
          <div
            className={`fixed transition-all duration-500 ease-in-out top-0 lg:left-0 ${
              navOpen === true ? "left-0" : "-left-80"
            } z-[60]`}
          >
            <Navbar open={navOpen} setOpen={setNavOpen} />
          </div>
          {/* #000428 -> #004e92 */}
          <div className="w-full flex flex-col lg:w-[calc(100vw-140px)]  bg-[#1d1d1d] ml-auto min-h-screen relative overflow-hidden">
            <img
              src="./static/images/logo-light.png"
              alt="Divyanshu"
              className="absolute top-5 right-3 sm:right-10 w-40 z-50"
            />
            <Routes>
              <Route path="/" element={<Home open={navOpen} />} />
              <Route path="/about" element={<About />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
            </Routes>
            <Footer />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
