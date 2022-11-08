import { React, useState } from "react";
import "./LoginModal.css";
import { Form, Button } from "react-bootstrap";



function LoginModal({ setOpenModal }) {

  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {/* <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div> */}
        <div className="body">
          <p>Sign Up</p>
        </div>
        <Form style={{ margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
          <div className="">
            <label className="col-sm-2 col-form-label">User name:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" style={{ height: '40px', width: '80%', marginBottom: '15px', borderRadius: '6px' }} required onChange={(e) => setUserName(e.target.value)} />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email Address:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" style={{ height: '40px', width: '80%', marginBottom: '15px', borderRadius: '6px' }} required onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" style={{ height: '40px', width: '80%', marginBottom: '15px', borderRadius: '6px' }} required onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <Button variant="primary" type="submit" style={{ height: '40px', width: '100px', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
            Submit
          </Button>
        </Form>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;