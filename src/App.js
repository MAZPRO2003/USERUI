import Home from "./pages/Home";
import NewHome from "./pages/NewHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NextPage from "./pages/NextPage";







function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NewHome" element={<NewHome/>}/>
        <Route path="/NextPage" element={<NextPage/>}/>
     
      </Routes>
    </Router>
    </div>
  );
}

export default App;

