import { useState } from "react"


const FriendEvent = ({ friendsEvents, userId, handleRSVP }) => {

    const [rsvpSuccess, setRSVPSucess] = useState('false')

    // const handleRSVP = (id) => {
    //     let data = {
    //         event_id: id,
    //         user_id: userId
    //     }
    //     fetch('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/rsvp/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then((res) => res.json)
    //     .then((data) => {
    //         setRSVPSucess(true)
    //         console.log('Success: ', data)
    //     })
    //     .catch((error) => {
    //         console.error('Error: ', error)
    //     })

    // }
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
                        {<button onClick={() => handleRSVP(event.id)} className='secondary__btn'>Join</button>}
                    
                </div>
                

            ))
            }

        </div >



    );


}

export default FriendEvent;