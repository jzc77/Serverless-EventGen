import { React, useState } from "react";
import "./SignupModal.css";
import { Form, Button } from "react-bootstrap";



function SignupModal({ setOpenModal }) {

  const [username, setUserName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{ height: '92%', marginTop: "-5%" }}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1 clasName="mb-5" style={{ textAlign: 'center', color: 'black', marginBottom: '10px' }}>Sign up</h1>
        <div>
          <p style={{ textAlign: 'center' }}>Already have an account? <a style={{ color: 'black', textDecoration: 'underline' }}>Log in</a></p>
        </div>
        <Form style={{ margin: 'auto', marginTop: '20px', textAlign: 'center', width: '100%' }}>
          <div class="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>User name</p>
            <input type="username" class="form-control" required onChange={(e) => setUserName(e.target.value)} placeholder="username" />
          </div>

          <div class="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>First name</p>
            <input type="firstname" class="form-control" required onChange={(e) => setFirstName(e.target.value)} placeholder="John" />
          </div>

          <div class="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>Last name</p>
            <input type="lastname" class="form-control" required onChange={(e) => setLastName(e.target.value)} placeholder="Smith" />
          </div>

          <div class="mb-3">
            <p className="form-label" style={{ textAlign: 'left' }}>Email</p>
            <input type="email" class="form-control" required onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>

          <div class="mb-3">
          <p className="form-label" style={{ textAlign: 'left' }}>Password</p>
            <input type="password" class="form-control" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
        </Form>

      </div>
    </div>
  );
}

export default SignupModal;