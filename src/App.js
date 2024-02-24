import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { NightPharmaciesScreen } from "./screens/NightPharmaciesScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import UsefulInformation from './components/header/UsefulInformation';


function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<NightPharmaciesScreen />} />
          <Route path="/faydalibilgiler" element={<UsefulInformation />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
