import MainLayout from "./components/MainLayout";
import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Demo from "./components/Views/Demo";
import Contact from "./components/Views/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "beercss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
