import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Beer from "./Beer";
import Contacto from "./Contacto";

function App() {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/beer/:id" element={<Beer />} />
        
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
