import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import { Route, Routes } from "react-router-dom"
import Navbaar from './components/Navbaar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Details from './components/Details.js';




function App() {
  return (
    <>
      <Navbaar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
      </Routes>

    </>
  );
}

export default App;

// import React from 'react'
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import Navbaar from './elements/Navbaar.js'
// import Home from './elements/Home.js'
// import Register from './elements/Register.js';
// import { Route, Routes } from 'react-router-dom';


// function App() {
//   return (
//     <>
//       <Navbaar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/register" element={<Register />} />
//         {/* <Route exact path="/edit/:id" element={} />
//         <Route exact path="/view/:id" element={} /> */}
//       </Routes>

//     </>
//   )
// }

// export default App