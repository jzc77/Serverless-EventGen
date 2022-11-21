import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from 'uuid';
import useFetchUsers from '../composables/useFetchUsers';
const CreateEvent = ({ handleCloseModalCreateEvent }) => {
    const userEmail = useParams();
    let userEmailString = userEmail.id
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventType, setEventType] = useState('')
    const [time, setTime] = useState('')
    const [isCancelCreateEvent, setIsCancelCreateEvent] = useState(false)
    console.log("user email: ", userEmailString)
    const { users } = useFetchUsers('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/getUsers', userEmailString)
    
    console.log("user: ", users)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(eventName)
        let eventDetails = {
            name : eventName,
            description: description,
            type: eventType,
            time: time,
            ownerId: users[0].user_id,
            id: uuidv4(),
        }
        console.log("Event details: ", eventDetails)
        fetch('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(eventDetails)
        })
        .then(() => {
            console.log("Details: ", eventDetails)
            console.log('Success')
            handleCloseModalCreateEvent()
          
        })
        .catch(err => {
          console.log(err.message)
        })

    }
    return (

        <div className='d-flex flex-column mt-3 '>
            <form onSubmit={onSubmit} style={{ margin: 'auto', marginTop: '20px', textAlign: 'center', width: '100%' }}>
                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Event name</p>
                    <input type="text" value={eventName} className="form-control" required onChange={(e) => setEventName(e.target.value)} placeholder="Give a title to your event!" />
                </div>

                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Event type</p>
                    <select className="p-2" value={eventType} name="eventtypes" id="eventtypes" style={{ height: '10%', width: '100%', borderRadius: '6px' }} onChange={(e) => setEventType(e.target.value)}>
                        <option value="default">[Select an event type]</option>
                        <option value="sports">Sports</option>
                        <option value="nature">Nature</option>
                        <option value="movie">Movie</option>
                        <option value="concert">Concert</option>
                    </select>
                </div>

                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Event description</p>
                    <textarea style={{ height: '170px' }} value={description} className="form-control" required onChange={(e) => setDescription(e.target.value)} placeholder="Describe your event" />
                </div>

                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Date</p>
                    <input type="date" value={time} className="form-control" required onChange={(e) => setTime(e.target.value)} placeholder="Date of your event" />
                </div>

                {/* <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Time</p>
                    <input type="time" value={time} className="form-control" required onChange={(e) => setTime(e.target.value)} placeholder="Time of your event" />
                </div> */}
                <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
                    Submit
                </Button>
            </form>

        </div>

    );
}

export default CreateEvent;