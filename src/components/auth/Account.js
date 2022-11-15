import { createContext } from "react";
import UserPool from "../../utils/UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

import { useState } from "react";



const AccountContext = createContext()
const Account = (props) => {
    const [error, setError] = useState('')
    
    /**
     * @param Username email
     */
    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool: UserPool,
            })
    
            const authDetails = new AuthenticationDetails({
                Username,
                Password,
            })
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data)
                    resolve(data)
                    
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err)
                    setError(err.message)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data)
                    resolve(data)
                }
            })
            return error
        })
        
    }
    return (
        <AccountContext.Provider value={{ authenticate }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export { Account, AccountContext };