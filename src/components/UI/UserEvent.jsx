import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserEvent = ({ userEvents, cancelEvent }) => {
    return (
        <div className='service__item-wrapper'>
            {userEvents && userEvents.map((event) => (
                <div className='services__item key={index}'>
                    <h3 className='service__title'>{event.eventName}</h3>
                    <p className='description' style={{ marginBottom: '10px' }}>{event.event_description}</p>
                    {<button className='secondary__btn' onClick={() => cancelEvent(event.id)}>Cancel</button>}
                </div>

            ))}
        </div>
    );
}

export default UserEvent;