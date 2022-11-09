import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import EventCard from './eventCard';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EventStack(props) {
    const [eventList, setEventList] = React.useState([]);
  
    React.useEffect(() => {
        console.log(props.data);
      setEventList(props.data);
    }, [props.data]);

    //generate the table data to columns
     const generateEventStack = () => {
        if (eventList.length > 0) {
            return eventList.map((event) => (
                <Item>
                    <EventCard
                        title={event[0]}
                        date={event[1]}
                        location={event[2]}
                        details={event[3]}
                        owner={event[4]}
                    />
                </Item>
            ));
        }
        else {
            return (
                <Item>
                    <h3>No Events Found.</h3>
                </Item>
            )
        }
    };

  return (
    <Box sx={{ width: '100%' }}>
      {/* <Stack direction="row"  divider={<Divider orientation="vertical" flexItem />} spacing={2}> //experimenting with row orientation */}
      <Stack spacing={2}>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
        {generateEventStack()}
      </Stack>
    </Box>
  );
}

export default EventStack;