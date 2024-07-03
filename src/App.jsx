// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/home'
// import LandingPage from './Pages/LandingPage'
// import Landing from './Pages/Landing'


// function App() {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/landingpage" element={<Landing/>} />
//       </Routes>
//     </>
//   )
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import IndukProps from "./Pages/induk.props";
import Landing from "./Pages/Landing";
import State from "./Pages/State";



function App() {
  return ( 
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/indukprops" element={<IndukProps/>}/>
          <Route path="/landingpage" element={<Landing/>}/>
          <Route path="/state" element={<State/>}/>
      </Routes>
    </>
   );
}

export default App;
