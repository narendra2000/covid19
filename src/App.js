import React,{useState} from 'react';
import './App.css';

import Navbar from './Navbar'
import Contact from "./Contact"
import  "./image.css"
import Notifications from "./Notifications"
import Footer from './footer'
import Hospitals from './Hospital'
import Medical from './medical'
import Logo from './covid_gif.gif'

function App() {

  const [show, setShow] = useState(false);
  const [t1,sett1]=useState(false);
  const [t2,sett2]=useState(false);
  const [t3,sett3]=useState(false);
  const [t4,sett4]=useState(false);
  const [t5,sett5]=useState(true);

  function ta1()
  {
    sett1(true);
    sett2(false);
    sett3(false);
    sett4(false);
    sett5(false);
  }
  function ta2()
  {
    sett1(false);
    sett2(true);
    sett3(false);
    sett4(false);
    sett5(false);
  }
  function ta3()
  {
    sett1(false);
    sett2(false);
    sett3(true);
    sett4(false);
    sett5(false);
  }
  function ta4()
  {
    sett1(false);
    sett2(false);
    sett3(false);
    sett4(true);
    sett5(false);
  }
  function ta0()
  {
    sett5(true);
    sett1(false);
    sett2(false);
    sett3(false);
    sett4(false);
  }

//   window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
  
  
  
  return (
    <div className="back"  >
        <div id="navbar">
          <a className="covid" onClick={ta0}>COVID-19</a>
        </div>
        <div className="sidenav">
        <a className="navbar-brand" href="#">Analysis</a>

        <a className="nav-link" onClick={ta1}>Contact & Helpline Information <span className="sr-only">(current)</span></a>
  
        <a className="nav-link" onClick={ta2}>Notifications & advisories</a>
   
        <a className="nav-link" onClick={ta3}>Medical Colleges & Beds</a>
      
        <a className="nav-link " onClick={ta4}>Hospitals & Beds</a>
        </div>
        {t5&&<div >
          <img src={Logo}></img>
        </div>}

        <div className="main">
          {t1&&<Contact />}
          {t2&&<Notifications />}
          {t3&&<Medical />}
          {t4&&<Hospitals />}
          <Footer />
        </div>
    </div>
  )
}

export default App;
