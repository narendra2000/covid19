import React,{useState} from 'react';
import './App.css';

import Navbar from './Navbar'
import Contact from "./Contact"
import  "./image.css"
import Notifications from "./Notifications"
import Footer from './footer'
import Hospitals from './Hospital'
import Medical from './medical'

function App() {

  const [show, setShow] = useState(false);
  const [t1,sett1]=useState(true);
  const [t2,sett2]=useState(false);
  const [t3,sett3]=useState(false);
  const [t4,sett4]=useState(false);

  function ta1()
  {
    sett1(true);
    sett2(false);
    sett3(false);
    sett4(false);
  }
  function ta2()
  {
    sett1(false);
    sett2(true);
    sett3(false);
    sett4(false);
  }
  function ta3()
  {
    sett1(false);
    sett2(false);
    sett3(true);
    sett4(false);
  }
  function ta4()
  {
    sett1(false);
    sett2(false);
    sett3(false);
    sett4(true);
  }
  
  
  
  return (
    <div className="back"  >

      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">COVID-19</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" onClick={ta1}>Contact & Helpline Information <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={ta2}>Notifications & advisories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={ta3}>Medical Colleges & Beds</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " onClick={ta4}>Hospitals & Beds</a>
      </li>
    </ul>
  </div>
</nav> 
{t1&&<Contact />}
{t2&&<Notifications />}

{t3&&<Medical />}




{t4&&<Hospitals />}

    
      <Footer />

    
    </div>
  )
}

export default App;
