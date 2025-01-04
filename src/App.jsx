import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import Register from "./components/Register.jsx";
import Paiement from "./components/Paiement.jsx";
import Success from "./components/Success.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Paiement />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
