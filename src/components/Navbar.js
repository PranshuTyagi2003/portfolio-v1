import React from 'react'
import "../components/style.css"
const Navbar = () => {

  return (
  
    <>
    <nav className="navbar navbar-expand-lg navbar-dark shadow-6-strong py-4">
  <div className="container-fluid">
    <div className="text-light me-5" style={{"fontSize":"60px", "fontWeight":"bold", "fontFamily": "Edu TAS Beginner", "marginLeft": "20px"}}>Pranshu Tyagi</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent" style={{ "fontSize":"30px", "fontFamily": "Source Sans Pro"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item" style={{"margin":"0px 30px", "fontWeight":"bolder"}}>
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item" style={{"margin":"0px 30px", "fontWeight":"bolder"}}>
          <a className="nav-link" aria-current="page" href="#projects">Projects</a>
        </li>
        <li className="nav-item" style={{"margin":"0px 30px", "fontWeight":"bolder"}}>
          <a className="nav-link" aria-current="page" href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

