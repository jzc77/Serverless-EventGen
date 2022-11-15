import { React, useState } from "react";
import "./SignupModal.css";
import { Form, Button } from "react-bootstrap";
import UserPool from "../../utils/UserPool";
import { useNavigate } from 'react-router-dom'
import LoginModal from "./LoginModal";

function SignupModal({ setOpenModal }) {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const switchToLogin = () => {
    setLogin(true)
    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        setError(err.message)
        console.log(err)
      } else {
        console.log(data)
        navigate('/profile')
      }
      
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
        <h1 className="mb-1" style={{ textAlign: 'center', color: 'black', marginBottom: '10px' }}>Sign up</h1>
        <div>
          <p style={{ textAlign: 'center' }}>Already have an account? <a onClick={switchToLogin} style={{ textDecoration: 'underline'}}>Log in</a></p>
        </div>
        <form onSubmit={onSubmit} style={{ margin: 'auto', marginTop: '20px', textAlign: 'center', width: '100%' }}>
          <div className="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>User name</p>
            <input type="username" value={username} className="form-control" required onChange={(e) => setUserName(e.target.value)} placeholder="username" />
          </div>

          <div className="mb-3">
            <p className="form-label" style={{ textAlign: 'left' }}>Email</p>
            <input type="email" value={email} className="form-control" required onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>

          <div className="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>Password</p>
            <input type="password" value={password} className="form-control" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
        
      </div>
      {login && <LoginModal setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default SignupModal;