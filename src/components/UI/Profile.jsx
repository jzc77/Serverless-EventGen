import React from 'react'
import FriendEvent from './FriendEvent'
import Newletter from './Newsletter'
import UserEvent from './UserEvent'
import Pagination from './Pagination'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/hero.css'
import '../../styles/profile.css'

import heroDarkImg from '../../images/pic-main-calendar.png'
import lightImg from '../../images/light-hero-bg.png'
import Services from './Services'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../composables/useFetchEvents'
import useFetchUsers from '../composables/useFetchUsers'
import useFetchEvents from '../composables/useFetchEvents'

const Profile = ({ theme }) => {
  // const [users, setUsers] = useState([])
  // const [friends, setFriends] = useState([])
  // const [events, setEvents] = useState([])
  // const [userEvents, setUserEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage, setEventsPerPageUser] = useState(3)
  const [currentPageUser, setCurrentPageUser] = useState(1)
  const [eventsPerPageUser, setEventsPerPage] = useState(3)
  // const [userName, setUserName] = useState('')
  const [isCancel, setIsCancel] = useState(false)
  const [isCancelCreateEvent, setIsCancelCreateEvent] = useState(false)
  const [isCancelAddFriend, setIsCancelAddFriend] = useState(false)
  const [event_id, setEventId] = useState("12343")

  const { events, userEvents, userName, setUserEvents } = useFetchEvents('http://localhost:5000/events')

  const { users, friends, setUsers, setFriends } = useFetchUsers('http://localhost:5000/users')
  // useEffect(() => {
  //   // fetch('http://localhost:5000/events')
  //   //   .then(res => {
  //   //     return res.json()
  //   //   })
  //   //   .then(data => {
  //   //     console.log(data)
  //   //     let userData = data.filter((event) => event.user_id === 6)
  //   //     let friendData = data.filter((event) => event.user_id !== 6)
  //   //     console.log(userData)
  //   //     setEvents(friendData)
  //   //     console.log(userData[0].user_name)
  //   //     setUserName(userData[0].user_name)
  //   //     setUserEvents(userData)
  //   //   })

  //   fetch('http://localhost:5000/users')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setUsers(data)
  //       setFriends(data)
  //     })
  // }, [])

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

  const handleCloseModalCreateEvent = () => {
    setIsCancelAddFriend(false)
  }

  const searchFriends = (event, users) => {
    console.log(event.target.value)
    console.log("Users to add:", users)
    let chars = []
    let possibleFriends = []
    // let char = document.getElementById('friend')
    let char = event.target.value
    chars.push(char.toLowerCase())
    let string = chars.join()
    console.log("Serch String:", string)
    console.log(string)
    console.log("user length:", users.length)
    for (let i = 0; i < users.length; i++) {
      console.log(i)
      console.log("User length", users[i].user_name.length)
      console.log("True or False:", patternSearching(users[i].user_name, string))
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
          <a style={{ color: 'white', cursor: 'pointer' }}>Log out</a>
        </div>

        <div className='newsletter__form'>
          <input type='text' placeholder='Search for "hiking"' onKeyUp={e => searchFriends(e)} />
          <button className='secondary__btn subscribe__btn'>Search</button>
        </div>
      </div>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='hero__content'>
            <div>
              <h3 style={{color: 'white '}}>Wanna see what your friends are up to? Click the Add Friends button below.</h3><br/><br/>
              <h3 style={{color: 'white '}}>Wanna create your own event? Click the Create Event button below.</h3>
              <h2 className='highlight'>Find. Meet. Grow!</h2>
            </div>
            <div className='hero__btns'>
              <button className='secondary__btn' onClick={handleAddFriend}>Add Friends</button>
              <button className='secondary__btn' onClick={handleAddFriend}>Create Event</button>
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
                    <Button variant="primary" type="submit" style={{height: '50px'}}>
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

          {/* Create an event Modal */}
          <Modal className="addFriend" show={isCancelCreateEvent}>
            <Modal.Header closeButton>
              <Modal.Title>

              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
              <div className="d-flex justify-content-between">
                <input className="form-control-lg" type='text' placeholder='Type a name' style={{ width: '100%' }} onKeyDown={e => searchFriends(e)}/>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </div>
              <div className='d-flex flex-column mt-3 '>
                {users && users.map((user) => (
                  <div className='d-flex justify-content-between align-items-center friendBox'>
                    <h4 className='pb-5 pt-5' style={{ color: 'black' }}>{user.user_name}</h4>
                    <Button variant="primary" type="submit" style={{height: '50px'}}>
                      Add friend
                    </Button>
                  </div>

                ))}

              </div>
              </Form>
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