import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column text-light mt-5 shadow"
      style={{ width: "100%", height: "300px" }}>

      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">

        <div style={{ width: '400px', }} className="website text-white">
          <h4 className="text-white">
            <i style={{ height: '25px', color: 'white' }} className="fa-brands fa-docker me-2"></i>Project Fair
          </h4>
          <h6 className="text-white">
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors.
          </h6>
          <h6 className="text-white">Code licensed Luminar, docs CC BY 3.0 .</h6>
          <p className="text-white">Currently v1.0.0</p>
        </div>

        <div className="links d-flex flex-column">
          <h4 className="text-white">Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login </Link>
          <Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4 className="text-white">Guides</h4>
          <Link to={'https: //getbootstrap. com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https: //react-bootstrap. github. io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
        </div>

        <div className="contact d-flex flex-column flex-wrap">
          <h4 className="text-white">Contact Us</h4>
          <div className="d-flex">
            <input className="form-control" placeholder="Enter your Mail" />
            <button className="btn btn-warning ms-3"><i className="fa-solid fa-arrow-right fa-beat"></i></button>
          </div>

          <div className="icons mt-3 d-flex justify-content-between fs-5">
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter fa-1x"></i></Link>
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram fa-1x"></i></Link>
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook fa-1x"></i></Link>
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-linkedin fa-1x"></i></Link>
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-github fa-1x"></i></Link>
            <Link to={"https://react.dev/"} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-phone fa-1x"></i></Link>
          </div>
        </div>
      </div>


      <p className="text-white">Copyright @ 2023 Project Fair. Built with React .</p>
    </div>

  )
}

export default Footer