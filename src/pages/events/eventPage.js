import React, { useState, useEffect } from "react";
import EventStack from "./eventStack";
import Filter from "./filterBox";
import {
	Input,
	FormControl,
	InputAdornment,
	Typography,
	Button,
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import "./filterBox.css"

export const EventPage = (props) => {
    // States
	const [data, setData] = useState({
		events: [
        ["eventName", "date", "location", "sample details", "owner", "eventType"], 
        ["Steve's Birthday Bash", "November 12, 2022", "Pizza Planet", "Celebration time", "Max", "Party"],
        ["Clown Convention", "December 8th, 2022", "BCIT Burnaby Campus", "haha", "Nabil", "Convention"]
        ]
	});

    const filters = ["Today", "This weekend", "Free", "Music", "Food & Drink"];

    const [workingData, setWorkingData] = useState([]);
    // sample eventdata array: ["eventTitle", "date", "location", "details", "owner"] 

    // For Search/Filter
    const [searchQuery, setSearchQuery] = useState({
		query: "",
	});
    const [location, setLocation] = useState({
		location: "",
	});
    const [type, setType] = useState({
		eventType: "",
	});

    const [queryParams, setQueryParams] = useState([]);

    const handleFilterClick = (filter) => {

        if (!(queryParams.includes(filter))) {
            setQueryParams(queryParams => [...queryParams, filter]);
 
        } else if (queryParams.includes(filter)) {
            setQueryParams(queryParams.filter((query) => query != filter));
        }       
     }
 
     const pushToUrl = (queryParams) => {
 
         var queryString = "";
         queryParams.forEach((query) => {
             queryString = queryString + "?" + query + "=" + "true"
         });
 
         var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + queryString;
         window.history.pushState({path: newURL}, '', newURL);
     };


    // Handler for search (This is called whenever the search field changes)
    const handleSearchChange = (prop) => (event) => {
		setSearchQuery({
			...searchQuery,
			[prop]: event.target.value,
		});
	};

    const search = () => {
        let matchingEvents = data.events; 
        // query 
        if (searchQuery.query.length > 0) { // Search by event Name
			matchingEvents = [...matchingEvents.filter((event) => event[0].toLowerCase().includes(searchQuery.query.toLowerCase()))];
		}

        setWorkingData(matchingEvents);
    };

    const resetSearch = () => {
        setWorkingData(data.events);   // reset working data to original events list
        setSearchQuery({ query: "" }); // reset search bar to empty
    };

    useEffect(() => {
        // get event data from backend here.
        // setData(data.events)
        setWorkingData(data.events); // set working data array to data from backend.
    }, []);

    useEffect(() => {
        pushToUrl(queryParams);
    }, [queryParams])


    return (
        <div className='container'>
            <h1>Your Events</h1>
            <div className='container'>
            <FormControl>
                <Input 
                    sx={{ m: 1 }}
                    style = {{color: "whitesmoke"}} 
                    variant="standard"
                    id="standard-adornment-amount"
                    value={searchQuery.query}
                    placeholder='Search events your events'
                    onChange={handleSearchChange("query")}
                    startAdornment={<InputAdornment position="start"><SearchIcon style={{color: "whitesmoke"}}/></InputAdornment>}
                />
                <Input
                sx = {{m: 1}}
                style= {{color:"whitesmoke"}}
                variant = "standard"
                value= {location.query}
                placeholder="Vancouver"
                startAdornment={<InputAdornment position="start"> <PlaceIcon style={{color: "whitesmoke"}}/></InputAdornment>}>
                </Input>
            </FormControl>
            <Button
                variant="contained"
                onClick={search}
            >
                <Typography style={{ color: "#FFFFFF", textTransform: "none" }}>Search</Typography>
            </Button>
            <div className="filters">

            {filters.map((filter, index) => {
                return (
                    <Filter
                     className="filters"
                     key = {index}
                     title = {filter}
                     isActive = {queryParams.includes(filter)}
                     onClick = { () => {handleFilterClick(filter)}}/>
                )
            })}
              </div>

            </div>
            <br></br>
            <EventStack data={workingData}/>
        </div>
    )
}