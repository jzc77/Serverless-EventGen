import { useEffect, useContext } from "react"
import { AccountContext } from "./Account"
import ChangePassword from "./ChangePassword"

export default () => {
    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(() => {
                setLoggedIn(true)
            })
    }, [])
    return (
        <div>
            <ChangePassword />
        </div>
    )
}