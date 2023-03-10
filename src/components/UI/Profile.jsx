import React from 'react'
import FriendEvent from './FriendEvent'
import UserEvent from './UserEvent'
import Pagination from './Pagination'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../../styles/hero.css'
import '../../styles/profile.css'
import { useNavigate, useParams } from 'react-router-dom'

import heroDarkImg from '../../images/eventgen-profile.png'
import lightImg from '../../images/light-hero-bg.png'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetchUsers from '../composables/useFetchUsers'
import useFetchEvents from '../composables/useFetchEvents'
import { useContext } from 'react'
import { AccountContext } from '../auth/Account'
import CreateEvent from '../partials/CreateEvent'
import LoginModal from '../Header/LoginModal'

const Profile = ({ theme }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage, setEventsPerPageUser] = useState(3)
  const [currentPageUser, setCurrentPageUser] = useState(1)
  const [eventsPerPageUser, setEventsPerPage] = useState(3)
  const [isCancel, setIsCancel] = useState(false)
  const [isCancelAddFriend, setIsCancelAddFriend] = useState(false)
  const [isCancelCreateEvent, setIsCancelCreateEvent] = useState(false)
  const [event_id, setEventId] = useState("12343")
  const [rsvpModal, setRSVPModal] = useState(false)


  const userIdObject = useParams();
  let userId = userIdObject.id
  // users here means the current logged in user. Need to change this variable
  const { users, friends, setUsers, setFriends } = useFetchUsers('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/getUsers', userId) 
  const { events, userEvents, userName, setUserEvents } = useFetchEvents(userId)
  console.log("user events: ", userEvents)

  console.log("Users profile: ", users)
  const { getSession, logout } = useContext(AccountContext)
  const [status, setStatus] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await getSession()
        console.log("Session: ", res)
        setStatus(true)
      } catch (err) {

        navigate('/')
      }
    }

    fetchData()
    // getSession()
    //     .then((session) => {
    //         console.log("Session: ", session)
    //         setStatus(true)
    //         if (!status) {
    //         }
    //     })
    // console.log("Status: ", status)

  }, [])

  const logoutUser = () => {
    logout()
    navigate('/')

  }

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
    setIsCancel(true)
    setEventId(event_id) // This sets the event_id declared with Hook, which will be used by handleCancelEvenConfirm function to filter out the event that has an id equals event_id
  }

  const handleCloseModal = () => {
    setIsCancel(false);
  }

  const handleCancelEventConfirm = () => {
    let filteredEvents = userEvents.filter(event => event.id !== event_id)
    console.log("filtered: ", filteredEvents)
    setUserEvents(filteredEvents)
    setIsCancel(false)
  }

  const handleAddFriend = () => {
    setIsCancelAddFriend(true)
  }

  const handleCloseModalAddFriend = () => {
    setIsCancelAddFriend(false)
  }


  const handleCreateEvent = () => {
    setIsCancelCreateEvent(true)
  }

  const handleCloseModalCreateEvent = () => {
    setIsCancelCreateEvent(false)
  }

  const handleCloseModalRSVP = () => {
    setRSVPModal(false)
  }

  const handleRSVP = (id) => {
    let data = {
        event_id: id,
        user_id: userId
    }
    fetch('https://5gosohqqhi.execute-api.us-west-2.amazonaws.com/test/rsvp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json)
    .then((data) => {
      setRSVPModal(true)
        console.log('Success: ', data)
        console.log("rsvp: ", rsvpModal)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })

}

  const searchFriends = (event, users) => {
    console.log(event.target.value)
    console.log("Users to add:", users)
    let chars = []
    let possibleFriends = []
    let char = event.target.value
    chars.push(char.toLowerCase())
    let string = chars.join()

    for (let i = 0; i < users.length; i++) {

      if (patternSearching(users[i].user_name.toLowerCase(), string)) {
        console.log(patternSearching(users[i].user_name, string))
        possibleFriends.push(users[i])
      }
    }
    setFriends(possibleFriends)
  }

  const patternSearching = (string, pattern) => {

    for (let i = 0; i <= string.length - pattern.length; i++) {
      let j = 0
      while (j < pattern.length) {
        if (string[i + j] !== pattern[j]) {
          return false
        }
        j = j + 1
      }
      if (j === pattern.length) {
        return true
      }
    }

  }

  return (

    <><section className='hero__section' id='home'>

      <div className='ms-5 d-flex justify-content-around'>

        <div className='d-flex align-items-center'>
          <h1 className='me-4'>Hello, {userName}</h1>
          <a onClick={logoutUser} style={{ color: 'white', cursor: 'pointer' }}>Log out</a>
        </div>

        <div className='newsletter__form'>
          <input type='text' placeholder='Search for "hiking"' onKeyUp={e => searchFriends(e)} />
          <button className='secondary__btn subscribe__btn'>Search</button>
        </div>
      </div>
      <div className='container'>
        <div className='hero__wrapper'>

          <div className='profile__img'>
            <img
              src={theme === 'light-theme' ? lightImg : heroDarkImg}
              alt='eventgen-profile' />
            <div className='hero__btns'>
              <button className='secondary__btn' onClick={handleAddFriend}>Add Friends</button>
              <button className='secondary__btn' onClick={handleCreateEvent}>Create Event</button>
            </div>

          </div>

          <div className='profile__aboutme'>
            <div>
              {/* <h3 style={{ color: 'white ' }}>About Me</h3> */}
              <h4 style={{ color: 'white ' }}>
                <br />
                What your friends are up to? Click the Add Friends button to find out!
                <br /><br />
                Wanna create your own event? Click the Create Event button.
                <br /><br />
                <span className='highlight'>Let???s start the conversation!</span>
              </h4>
            </div>

          </div>

        </div>

        <div className='container'>
          <div className='services__top-content'>

            {userEvents.length > 0 ? (<h2 style={{ textAlign: 'left' }}>Here are the events that you are attending</h2>)
              : (<h2 style={{ textAlign: 'left' }}>Search the events in the search bar and add them to your events list!</h2>)
            }

          </div>

          <UserEvent userEvents={currentEventsUser} cancelEvent={cancelEvent} />
          {userEvents.length > 3 && <Pagination eventsPerPage={eventsPerPageUser} userEvents={currentEventsUser} totalEvents={events.length} paginate={paginateUser} />}

          <Modal show={isCancel}>
            <Modal.Header closeButton>
              <Modal.Title>
                Warning!
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>You are about to cancel your event. Click confirm to proceed canceling your event</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" type="submit" onClick={handleCancelEventConfirm}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Add Friend Modal */}
          <Modal className="addFriend" show={isCancelAddFriend} users={users}>
            <Modal.Header>
              <Modal.Title onClick={handleCloseModalAddFriend}>
                X
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="d-flex justify-content-between">
                <input className="form-control-lg" type='text' id='myFriends' placeholder='Type a name' onKeyUp={e => searchFriends(e, users)} style={{ width: '100%' }} />
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </div>
              <div className='d-flex flex-column mt-3 '>
                {friends && friends.map((user) => (
                  <div className='d-flex justify-content-between align-items-center friendBox'>
                    <h4 className='pb-5 pt-5' style={{ color: 'black' }}>{user.user_name}</h4>
                    <Button variant="primary" type="submit" style={{ height: '50px' }}>
                      Add friend
                    </Button>
                  </div>

                ))}

              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalAddFriend}>
                Cancel
              </Button>

            </Modal.Footer>
          </Modal>
          
          {/* RSVP modal */}
          <Modal className="" show={rsvpModal} >
            <Modal.Header>
              <Modal.Title onClick={handleCloseModalRSVP}>
                X
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
             
              <div className='d-flex flex-column mt-3 '>
                  <p>You have successfully RSVPed to this event. We are looking forward to seeing you!</p>

              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalRSVP}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>

          {/* Create an event Modal */}
          <Modal className="addFriend" show={isCancelCreateEvent}>
            <Modal.Header>
              <Modal.Title onClick={handleCloseModalCreateEvent}>
                X
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              
                  <CreateEvent handleCloseModalCreateEvent={handleCloseModalCreateEvent}/>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalCreateEvent}>
                Cancel
              </Button>

            </Modal.Footer>
          </Modal>


        </div>
      </div>
    </section><section id='service'>
        <div className='container'>
          <div className='services__top-content'>

            {events ? (<h2 style={{ textAlign: 'left', marginTop: -35 }}>Looks like your friends are busy!</h2>) : <h2 style={{ textAlign: 'left' }}>Looks like your friends are pretty chill right now!</h2>}

          </div>
          <div className="d-flex justify-content-center">
            <FriendEvent friendsEvents={currentEvents} userId={userId} handleRSVP={handleRSVP} />
          </div>

          {events.length > 3 && <Pagination eventsPerPage={eventsPerPage} totalEvents={events.length} paginate={paginate} />}

        </div>
      </section></>
  )
}

export default Profile