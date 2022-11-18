import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AccountContext } from "./Account";

const Status = () => {
    
    const { getSession } = useContext(AccountContext)
    useEffect(() => {
        getSession()
            .then((session) => {
                console.log("Session: ", session)
                
            })
    }, [])
    // return ( 
    //     <div>{status ? <p style={{color: 'white'}}>You are logged in</p> : <p style={{color: 'white'}}>Please login</p>}</div>
    //  );

     
}
 
export default Status;