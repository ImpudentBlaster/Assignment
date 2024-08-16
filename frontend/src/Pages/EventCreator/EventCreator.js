import React, { useState } from 'react'
import axios from 'axios'
import './EventCreator.css'
function EventCreator() {

const [eventdata , setEventData] = useState({
  title:"" , desc :"" , date: "" , time:"" , location :""
})

async function handleClick(){
  let empty = Object.values(eventdata).some(val => val === "")
  if(empty) alert("All input fields are required")

    if(!empty){
     let response = axios.post('http://localhost:5000/addEvent' , {
     title: eventdata.title ,
     desc:eventdata.desc,
     date:eventdata.date,
     time:eventdata.time,
     location:eventdata.location
     })
     console.log("added")
    }


}

  return (
    <div className='event-creator-main'>
      <div className='event-creator-heading'>
        <h2>Create New Event</h2>
      </div>

      <div className='event-creator-inputs-main'>
          <div className='event-creator-inputs'>
            <p>Title</p>
            <input value={eventdata.title} type='text' placeholder='Enter Title' onChange={(event)=>{
              let data = event.target.value.trim()
              setEventData({...eventdata , title:data})
            }}></input>
          </div>
          <div className='event-creator-inputs'>
            <p>Description</p>
            <input value={eventdata.desc} type='text' placeholder='Enter Description' onChange={(event)=>{
              let data = event.target.value.trim()
              setEventData({...eventdata , desc:data})
            }}></input>
          </div>
          <div className='event-creator-inputs'>
            <p>Date</p>
            <input value={eventdata.date} type='date' onChange={(event)=>{
              setEventData({...eventdata , date:event.target.value.trim()})
            }}></input>
          </div>
          <div className='event-creator-inputs'>
            <p>Time</p>
            <input value={eventdata.time} type='time' onChange={(event)=>{
              setEventData({...eventdata , time:event.target.value.trim()})
            }}></input>
          </div>
          <div className='event-creator-inputs'>
            <p>Location</p>
            <input value={eventdata.location} type='text' placeholder='Enter location' onChange={(event)=>{
              let data = event.target.value.trim()
              setEventData({...eventdata , location:data})
            }}></input>
          </div>
      </div>

      <div className='event-creator-button'>
         <button onClick={()=>handleClick()}>Create</button>
      </div>
    </div>
  )
}

export default EventCreator