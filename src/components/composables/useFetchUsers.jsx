import { useEffect } from "react"
import { useState } from "react"

const useFetchUsers = (url, userId) => {
    const [users, setUsers] = useState([])
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        fetch(url)
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log(data.rows)
            console.log("User email: ", userId)
            let friendsData = data.rows.filter((user) => user.id !== userId)
            let userData = data.rows.filter((user) => user.id === userId)
            console.log("Friends data: ", friendsData)
            console.log("User data: ", userData)
            setUsers(data.rows)
            setFriends(friendsData)
          })
      }, [])

      return { users, friends, setUsers, setFriends }
}

export default useFetchUsers