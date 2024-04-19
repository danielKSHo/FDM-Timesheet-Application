import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Timesheet.css";
import {range, addDateBy, areDatesSame, getMonday} from './utils'
import Button from "../../components/Button";
import ClockButton from "../../components/ClockingButton";


const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const HOUR_HEIGHT = 28;
const HOUR_MARGIN_TOP = 10;

import styled from 'styled-components';
export  const WeeklyCalender: React.FC = () => {
  const hourNow = new Date().getHours(); 
  const minutesNow = new Date().getMinutes();
  const [worked, setWorked] = useState(10);
  const [mondayDate, setMondayDate] = useState(getMonday())
  const [events, setEvents]= useState([
    {date: new Date(2024, 3,8 , 9  ), client:"HSBC", location:"London", custom:"introduction", howLong:2},
    {date: new Date(2024, 3,13, 10 ), client:"Pink", location:"Lille", custom:"meeting", howLong:2},
    {date: new Date(2024, 3,9, 8 ), client:"Bear",  location:"Madrid",  custom:"phone call",howLong:6}


  ])
  const onAddEvent = (date) =>{
    let client = prompt('client')
    while(!(client) ||client == ""){
        alert("invalid, write a client tag");
        client = prompt('invalid, write a client tag')
    }
    let location = prompt('location')
    while(!(location) ||location == ""){
      alert("invalid, write a location tag");
      location = prompt('invalid, write a location tag')
  }
    let custom = prompt('custom')

    let from = (prompt('from'))
    while(!(from) ||from == ""){
      alert("invalid, write a start time");
      from = prompt('invalid, write a start time');
  }
    let to = prompt('to')
    while(!(to) ||to == ""){
      alert("invalid, write a end time");
      to = prompt('invalid, write an end time')
  }
    date.setHours(from-1)
    setWorked(worked + (to-from))
    setEvents ((prev) =>[...prev, {client, location, custom, date, howLong: to-from}])
  }

  return (
    <>
    <FlexBox>
      <p>today: {new Date().toDateString()}</p>
      <p>from: {mondayDate?.toDateString()}</p>
      <p>to: {addDateBy(mondayDate, 6).toDateString()}</p>
      <p>hours worked: {worked}</p>

    </FlexBox>
      <Wrapper>
        <HGrid first={'30px'} cols={1}>
          <VGrid rows={24}>
            {range(24).map((hour) => <p key={hour}>{hour}</p>)}
          </VGrid>
          <HGrid first={'120px'} cols={7}>
            {DAYS.map((day, index) => 
              <DayWrapper  
              onDoubleClick={()=>onAddEvent(addDateBy(mondayDate, index))}
              isToday={
                areDatesSame(new Date(), addDateBy(mondayDate, index))
              }>
                <p>{day}</p>
                {
                  events.map((event)=>(
                    areDatesSame(addDateBy(mondayDate, index), event.date) &&
                    (<Event
                       howLong={event.howLong}
                       fromTop={((event.date.getHours()-2) * HOUR_HEIGHT + (event.date.getMinutes() / 60) * HOUR_HEIGHT)}>
                        {event.client}<br/>
                        {event.location}<br/>
                        {event.custom}

                       </Event>

                    )
                
            
                  ))
                }

              </DayWrapper>
            )}
          </HGrid>
          <HourLine fromTop={(hourNow ) * HOUR_HEIGHT + (minutesNow / 60) * HOUR_HEIGHT + HOUR_MARGIN_TOP} /> 
        </HGrid>
      </Wrapper>
    </>
  );
};

const DayWrapper = styled.span`
  border: 2px solid;
  
  border-color: #5a59e3;
  display:relative ;
  width: 80%;
  background: ${({isToday}) => isToday? 'grey': ''};
  
`;
const Hour = styled.span`
  height: ${HOUR_HEIGHT}px;
  display: flex;
  align-items: center;
  
  
`;
const Wrapper = styled.div`
  width: calc(100% - 30px);
  border: 1px solid;
  margin: 15px;
  position: absolute;
`;
const HourLine = styled.div<{ fromTop: number }>` 
  position: absolute;
  width: 100%;
  top: ${({ fromTop }) => fromTop}px; 
  border: 1px solid;
  border-color: #ff78b5;

`;

const HGrid = styled.div` // Removed HGridProps since it's commented out
  display: grid;
  grid-template-columns: ${({ first }) => first || ''} repeat(${({ cols }) => cols}, 1fr);
`;
const VGrid = styled.div` // Removed VGridProps since it's commented out
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  &:first-child {
    margin-top: ${HOUR_MARGIN_TOP}px;
  }
`;
const FlexBox = styled.div `
display:flex;
justify-content: space-around;
font-size: 1.2rem`

const Event = styled.div<{ howLong: number }>`
  position: relative;
  top: ${({ fromTop }) => fromTop}px; 
 background-color: #83cbff;
;
  height: ${({ howLong }) => howLong * HOUR_HEIGHT}px; 
  color: black;
  padding: 5px;
  margin: 2px;
  border-radius: 6px;
  font-size: 9px;
`;


export default WeeklyCalender;

