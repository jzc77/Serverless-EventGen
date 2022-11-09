import { React, useState } from "react";
import "./LoginModal.css";
import { Form, Button } from "react-bootstrap";



function LoginModal({ setOpenModal }) {

  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{ height: '50%' }}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1 clasName="mb-5" style={{ textAlign: 'center', color: 'black', marginBottom: '10px' }}>Log in</h1>
        <div>
          <p style={{ textAlign: 'center' }}>Not a member yet? <a style={{ color: 'black', textDecoration: 'underline' }}>Sign up </a></p>
        </div>
        <Form style={{ margin: 'auto', marginTop: '50px', textAlign: 'center', width: '100%' }}>
          <div class="mb-3">
            <label className="form-label">User Name</label>
            <input type="username" class="form-control" required onChange={(e) => setUserName(e.target.value)} placeholder="username" />
          </div>

          <div class="mb-3">
            <label className="form-label">Email</label>
            <input type="email" class="form-control" required onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>

          <div class="mb-3">
            <label className="form-label">Password</label>
            <input type="password" class="form-control" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
        </Form>

      </div>
    </div>
  );
}

export default LoginModal;