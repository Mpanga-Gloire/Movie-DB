import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NewReleases from "./components/NewReleases/NewReleases";
import WhatsHot from "./components/WhatsHot/WhatsHot";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/new" element={<NewReleases />} />
          <Route path="/hot" element={<WhatsHot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
