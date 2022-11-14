import { useEffect } from "react"
import { useState } from "react"

const useFetchUsers = () => {
    const [users, setUsers] = useState([])
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
     
    
        fetch('http://localhost:5000/users')
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log(data)
            setUsers(data)
            setFriends(data)
          })
      }, [])

      return { users, friends, setUsers, setFriends }
}

export default useFetchUsers