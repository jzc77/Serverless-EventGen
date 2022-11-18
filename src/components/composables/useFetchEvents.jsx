import { useState } from "react"
import { useEffect } from "react"

const useFetchEvents = (url) => {
    const [userName, setUserName] = useState('')
    const [events, setEvents] = useState([])
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                let userData = data.filter((event) => event.user_id === 6)
                let friendData = data.filter((event) => event.user_id !== 6)
                console.log(userData)
                setEvents(friendData)
                setUserName(userData[0].user_name)
                setUserEvents(userData)
            })

    }, [url])

    return {userName, events, userEvents, setUserEvents}
}

export default useFetchEvents