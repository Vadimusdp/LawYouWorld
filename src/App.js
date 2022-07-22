import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './style/App.css';
import './modal/modal.css';
import OurServises from "./pages/OurServises";
import Main from "./pages/Main";
import Post from "./pages/Post";
import VadimusDP from "./pages/VadimusDP";
import Settings from "./pages/Settings";

function App() {
  // const [isMain, setIsMain] = useState(true)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
          <Route path="/Servises" element={<OurServises/>}/>
          <Route path="/Post:id" element={<Post/>}/>
          <Route path="*" element={<Main/>}/>
          <Route path="/VadimusDP" element={<VadimusDP/>}/>
          <Route path="/Settings" element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
