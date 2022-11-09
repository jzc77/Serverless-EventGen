import React, { useState, useEffect } from "react";
import EventStack from "./eventStack";

export const EventPage = (props) => {
    // States
	const [data, setData] = useState({
		events: [
        ["eventName", "date", "location", "sample details", "owner", "eventType"], 
        ["Steve's Birthday Bash", "November 12, 2022", "Pizza Planet", "Celebration time", "Max", "Party"],
        ["Clown Convention", "December 8th, 2022", "BCIT Burnaby Campus", "haha", "Nabil", "Convention"]
        ]
	});
    // sample eventdata array: ["eventTitle", "date", "location", "details", "owner"] 

    const [searchQuery, setSearchQuery] = useState({
		query: "",
	});
    const [location, setLocation] = useState({
		location: "",
	});
    const [type, setType] = useState({
		eventType: "",
	});


    return (
        <div className='container'>
            <h1>Events</h1>
            
            <EventStack data={data.events}/>
        </div>
    )
}