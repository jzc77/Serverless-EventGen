import { React, useState, useEffect } from "react";
import "./LoginModal.css";
import { Form, Button } from "react-bootstrap";
import SignupModal from "./SignupModal";
import { AccountContext } from "../auth/Account"
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ChangePassword from "../auth/ChangePassword";

function LoginModal({ setOpenModal }) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useState(false)
  const [error, setError] = useState('')
  const [isPasswordReset, setIsPasswordReset] = useState(false)
  const [login, setLogin] = useState(true)
  const { authenticate } = useContext(AccountContext)

  const { getSession } = useContext(AccountContext)

  useEffect(() => {
    getSession()
      .then(() => {

      })
  }, [])

  const navigate = useNavigate()
  const switchToSignup = () => {
    setSignup(true)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data)
        fetch('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/getUser/' + email)
        .then(res => {
          return res.json()
        })
        .then(data => {
          let userId = data.rows[0].user_id
          console.log("Logged in user id:", data.rows[0].user_id)
          navigate(`/profile/${userId}`)
        })
        .catch (err => {
          console.error(err.message)
        })

        
      })
      .catch(err => {
        setError(err.message)
        console.error("Failed to login", err)
      })

  }

  const showPasswordReset = () => {
    setIsPasswordReset(true)
    setLogin(false)
  }
  return (
    <div className="modalBackground">
      {login && <div className="modalContainer" style={{ height: '65%' }}>
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
            <div className="d-flex justify-content-between">
              <p className="form-label">Password</p>
              <a onClick={showPasswordReset} style={{ color: 'blue' }}>Forgot password</a>
            </div>

            <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
          {error.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
        </form>

      </div>}
      {signup && <SignupModal setOpenModal={setOpenModal} />}
      {isPasswordReset && <ChangePassword />}
    </div>
  );
}

export default LoginModal;