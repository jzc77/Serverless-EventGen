import { useState } from "react"
import { useEffect } from "react"


const useFetchEvents = (userId) => {
    const [userName, setUserName] = useState('')
    const [events, setEvents] = useState([])
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        console.log("Current user id: ", userId)
        const fetchEventsData = async () => {
            const data = await fetch('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/getEvents/')
            const eventsData = await data.json()
            console.log("Events data: ", eventsData)
            let friendData = eventsData.body.rows.filter((event) => event.owner_id !== userId)
            setEvents(friendData)
            let userEventsData = eventsData.body.rows.filter((event) => event.owner_id === userId)
            setUserEvents(userEventsData)
            console.log("user events: ", userEvents)
            console.log("Friends events: ", events)
        }
        fetchEventsData()

    }, [])


    return { userName, events, userEvents, setUserEvents }
}

export default useFetchEvents