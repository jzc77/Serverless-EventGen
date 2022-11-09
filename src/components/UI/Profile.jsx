import React from 'react'
import FriendEvent from './FriendEvent'
import Newletter from './Newsletter'
import UserEvent from './UserEvent'
import Pagination from './Pagination'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/hero.css'

import heroDarkImg from '../../images/pic-main-calendar.png'
import lightImg from '../../images/light-hero-bg.png'
import Services from './Services'
import { useEffect } from 'react'
import { useState } from 'react'

const Profile = ({ theme }) => {

  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage, setEventsPerPageUser] = useState(3)
  const [currentPageUser, setCurrentPageUser] = useState(1)
  const [eventsPerPageUser, setEventsPerPage] = useState(3)
  const [userName, setUserName] = useState('')
  const [isCancel, setIsCancel] = useState(false)
  const [event_id, setEventId] = useState("12343")

  const handleShow = (target_event) => {
    setIsCancel(true)
    setEventId(target_event)
    console.log(target_event)
  }

  const handleCloseTwo = () => {
    setIsCancel(false);
  }
  const handleClose = async () => {

  }
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
        console.log(userData[0].user_name)
        setUserName(userData[0].user_name)
        setUserEvents(userData)
      })
  }, [isCancel])

  // Get current events for user friends
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = events.slice(indexFirstEvent, indexOfLastEvent)

    // Get current events for user themselves
    const indexOfLastEventUser = currentPageUser * eventsPerPageUser
    const indexFirstEventUser = indexOfLastEventUser - eventsPerPageUser
    const currentEventsUser = userEvents.slice(indexFirstEventUser, indexOfLastEventUser)

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const paginateUser = (pageNumber) => {
    setCurrentPageUser(pageNumber)
  }


  const cancelEvent = (event_id) => {
    let filteredEvents = userEvents.filter(event => event.id !== event_id)
    console.log("filtered: ", filteredEvents)
    setUserEvents(filteredEvents)
    
  }
  return (


    <><section className='hero__section' id='home'>

      <div className='ms-5 d-flex justify-content-around'>

        <div className='d-flex align-items-center'>
          <h1 className='me-4'>Hello, {userName}</h1>
          <a style={{ color: 'white', cursor: 'pointer' }}>Log out</a>
        </div>

        <div className='newsletter__form'>
          <input type='email' placeholder='Search for "hiking"' />
          <button className='secondary__btn subscribe__btn'>Search</button>
        </div>
      </div>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='hero__content'>
            <div>
              <h2>Wanna see what your friends are up to? Click the Add Friends button below.</h2>
              <h2 className='highlight'>Find. Meet. Grow!</h2>
            </div>
            <div className='hero__btns'>
              <button className='secondary__btn'>Add Friends</button>
            </div>
          </div>
          <div className='hero__img'>
            <img
              src={theme === 'light-theme' ? lightImg : heroDarkImg}
              alt='pic-main-calendar' />
          </div>
        </div>

        <div className='container'>
          <div className='services__top-content'>

            {userEvents.length > 0 ? (<h2 style={{ textAlign: 'left' }}>Here are the events that you are attending</h2>) 
            : (<h2 style={{ textAlign: 'left' }}>Search the events in the search bar and add them to your events list!</h2>)
             }

          </div>

          <UserEvent userEvents={currentEventsUser} cancelEvent={cancelEvent}/>
          {userEvents.length > 3 && <Pagination eventsPerPage={eventsPerPageUser} userEvents={currentEventsUser} totalEvents={events.length} paginate={paginateUser} />}
          <Form >
            <Modal show={isCancel} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Warning!
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>You are about to cancel you event. Click confirm to proceed canceling your event</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTwo}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    </section><section id='service'>
        <div className='container'>
          <div className='services__top-content'>

            {events && <h2 style={{ textAlign: 'left' }}>Looks like your friends are busy!</h2>}

          </div>
          <div className="d-flex justify-content-center">
            <FriendEvent friendsEvents={currentEvents} />
          </div>

          {events.length > 3 && <Pagination eventsPerPage={eventsPerPage} totalEvents={events.length} paginate={paginate} />}

        </div>
      </section></>
  )
}

export default Profile