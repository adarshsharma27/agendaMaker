import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateAgenda from "./components/CreateAgenda";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateAgenda />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
