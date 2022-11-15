import { React, useState } from "react";
import "./LoginModal.css";
import { Form, Button } from "react-bootstrap";
import SignupModal from "./SignupModal";
import { AccountContext } from "../auth/Account"
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

function LoginModal({ setOpenModal }) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useState(false)
  const [error, setError] = useState('')
  const { authenticate, err } = useContext(AccountContext)
  const navigate = useNavigate()
  const switchToSignup = () => {
    setSignup(true)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data)
        navigate('/profile')
      })
      .catch(err => {
        setError(err.message)
        console.error("Failed to login", err)
      })
    
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{ height: '65%' }}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1 className="mb-1" style={{ textAlign: 'center', color: 'black', marginBottom: '10px' }}>Log in</h1>
        <div>
          <p style={{ textAlign: 'center' }}>Not a member yet? <a onClick={switchToSignup} style={{ color: 'black', textDecoration: 'underline' }}>Sign up </a></p>
        </div>
        <form onSubmit={onSubmit} style={{ margin: 'auto', marginTop: '50px', textAlign: 'center', width: '100%' }}>

          <div className="mb-3">
            <p className="form-label" style={{ textAlign: 'left' }}>Email</p>
            <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>

          <div className="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>Password</p>
            <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
          {error.length > 0 && <p style={{color: 'red'}}>{ error }</p>}
        </form>

      </div>
      { signup && <SignupModal setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default LoginModal;