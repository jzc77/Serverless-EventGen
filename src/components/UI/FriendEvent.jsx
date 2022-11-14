

const FriendEvent = ({ friendsEvents }) => {
    return (
        <div className='service__item-wrapper'>
            {friendsEvents && friendsEvents.map((event) => (

                <div className='services__item key={index}'>
                   
                        <span>
                            <p className='description' style={{ fontWeight: 'bold' }}>{event.user_name}</p>
                        </span>
                        <h3 className='service__title'>{event.eventName}</h3>
                        <p className='description' style={{ marginBottom: '10px' }}>{event.event_description}</p>
                        {<button className='secondary__btn'>Join</button>}
                    
                </div>

            ))
            }

        </div >



    );


}

export default FriendEvent;