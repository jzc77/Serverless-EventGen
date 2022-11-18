import { useState } from 'react'
import Button from 'react-bootstrap/Button'
const CreateEvent = () => {

    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventType, setEventType] = useState('')
    const [time, setTime] = useState('')
    const onSubmit = () => {
        
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
                    <input type="date" className="form-control" required onChange={(e) => setTime(e.target.value)} placeholder="Date of your event" />
                </div>

                <div className="mb-3">
                    <p className="form-label" style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Time</p>
                    <input type="time" value={time} className="form-control" required onChange={(e) => setTime(e.target.value)} placeholder="Time of your event" />
                </div>
                <Button variant="primary" type="submit" style={{ height: '40px', width: '80%', borderRadius: '6px', background: '#0c123d', color: 'white', fontWeight: 'bold' }}>
                    Submit
                </Button>
            </form>

        </div>

    );
}

export default CreateEvent;