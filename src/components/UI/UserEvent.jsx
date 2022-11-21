
const UserEvent = ({ userEvents, cancelEvent }) => {
    return (
        <div className='service__item-wrapper'>
            {userEvents && userEvents.map((event) => (
                <div className='services__item key={index}' key={event.id}>
                    <h3 className='service__title'>{event.name}</h3>
                    <p className='description' style={{ marginBottom: '10px' }}>{event.description}</p>
                    <p className='description' style={{ marginBottom: '10px' }}>Time: {new Date(event.time).toDateString()}</p>
                    {<button className='secondary__btn' onClick={() => cancelEvent(event.id)}>Cancel</button>}
                </div>

            ))}
        </div>
    );
}

export default UserEvent;