import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../context/TokenAuth'



function Header({ insideDashBoard }) {
  const{isAtherised, setIsAutherised} = useContext(tokenAuthContext)
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    setIsAutherised(false)
    navigate('/')
  }

  return (
    <Navbar style={{ zIndex: '1' }} className="card shadow top-0 position-fixed w-100">
      <Container>
        <Navbar.Brand>
          <Link className='fw-bolder' to={'/'} style={{ textDecoration: 'none' }}><i className='fa-brands fa-docker'></i>Project Fair</Link>
        </Navbar.Brand>
        {insideDashBoard && <div className="ms-auto">
          <button onClick={logout} className="btn btn-link">Logout <i className="fa-solid da-arrow-right"></i></button>
        </div>
        }
      </Container>
    </Navbar>
  )
}

export default Header