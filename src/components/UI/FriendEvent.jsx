

const FriendEvent = ({ friendsEvents }) => {
    return (
        <div className='service__item-wrapper'>
            {friendsEvents && friendsEvents.map((event) => (

                <div className='services__item key={index}' key={event.id}>
                   
                        <span>
                            <p className='description' style={{ fontWeight: 'bold' }}>{event.user_name}</p>
                        </span>
                        <h3 className='service__title'>{event.name}</h3>
                        <p className='description' style={{ marginBottom: '10px' }}>{event.description}</p>
                        <p className='description' style={{ marginBottom: '10px' }}>Time: {new Date(event.time).toDateString()}</p>
                        {<button className='secondary__btn'>Join</button>}
                    
                </div>

            ))
            }

        </div >



    );


}

export default FriendEvent;