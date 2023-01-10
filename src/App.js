import React from 'react';
import Menu from './Pages/Menu';
import Navbars from './Pages/Navbars';
import NavLinks from './Pages/NavLinks';
import WatchCards from './Pages/WatchCards';
import Discount from './Pages/Discount';
import './Style.css'
function App() {
  return (
    <div>
       <Navbars/>
       <NavLinks/>
       <Menu/>
       <WatchCards/>   
       <Discount/>
    </div>
  );
}

export default App;
