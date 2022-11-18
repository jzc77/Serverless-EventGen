import { useState } from "react"
import { Button } from "react-bootstrap";
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "../../utils/UserPool"
import LoginModal from "../Header/LoginModal";
import { useNavigate } from 'react-router-dom'
const ChangePassword = (setOpenModal) => {

    const [stage, setStage] = useState(1) // 1 = email stage, 2 = code stage
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const [isClosed, setIsClosed] = useState(true)
    const navigate = useNavigate()
    const getUser = () => {
        return new CognitoUser({
            Username: email.toLowerCase(),
            Pool: UserPool
        })
    }
    console.log(getUser)
    console.log("email: ", email)
    const sendCode = (event) => {
        event.preventDefault()
        getUser().forgotPassword({
            onSuccess: data => {
                console.log("onSuccess:", data)
            },
            onFailure: err => {
                console.error("onFailure:", err)
            },
            inputVerificationCode: data => {
                console.log('Input Code: ', data)
                setStage(2)
            }
        })
    }

    const resetPassword = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            console.error('Passwords are not the same!')
            setError('Passwords are not the same!')
            return
        }
        getUser().confirmPassword(code, password, {
            onSuccess: data => {
                console.log("onSuccess:", data)
                setStage(3)
            },
            onFailure: err => {
                console.error("onFailure:", err)
            },

        })


    }

    const closeModal = () => {
        navigate('/profile')

    }
    return (
        <div className="modalBackground">

            { stage === 1 && isClosed && <div className="modalContainer" style={{ height: '65%' }}>
                <div className="titleCloseBtn">
                    <button
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
                <form onSubmit={sendCode} style={{ margin: 'auto', marginTop: '50px', textAlign: 'center', width: '100%' }}>
                    <div className="mb-3">
                        <p className="form-label" style={{ textAlign: 'left' }}>Your email address</p>
                        <input type="text" value={email} className="form-control mb-2" onChange={(e) => setEmail(e.target.value)}/>
                        <Button type="submit">Send verification code</Button>
                    </div>

                </form>
            </div>
            }
            {stage === 2 && <div className="modalContainer" style={{ height: '65%' }}>
            <div className="titleCloseBtn">
                    <button
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
                <h1 style={{color: 'black', textAlign: 'center'}}>Reset Your Password</h1>
                <form onSubmit={resetPassword} style={{ margin: 'auto', marginTop: '50px', textAlign: 'center', width: '100%' }}>
                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left' }}>Verification Code</p>
                    <input type="password" value={code} className="form-control" required onChange={(e) => setCode(e.target.value)} placeholder="password" />
                </div>
                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left' }}>New Password</p>
                    <input type="password" value={password} className="form-control" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left' }}>Confirm new password</p>
                    <input type="password" value={confirmPassword} className="form-control" required onChange={(e) => setConfirmPassword(e.target.value)} placeholder="new password" />
                </div>
                <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
                    Change Password
                </Button>
                {error && <p style={{ color: 'red'}}>{ error }</p>}
            </form>
            </div>
            }
            {stage === 3 && <div className="modalContainer" style={{ height: '65%' }}>
            <div className="titleCloseBtn">
                    <button
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
                <h3 style={{color: 'black', textAlign: 'center'}}>You have successfully reset your password! Close this and go to home page re-login</h3>
    
            </div>
            }
            
        </div>
    );
}

export default ChangePassword;