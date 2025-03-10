import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Properties from "./pages/properties/Properties";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property-deals" element={<Properties />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
