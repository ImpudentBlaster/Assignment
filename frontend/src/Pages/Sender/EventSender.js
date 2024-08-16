import React, { useEffect, useState } from 'react'
import './EventSender.css'
import axios from 'axios'

function EventSender() {
    const [email, setEmail] = useState()
    const [userData, setUserData] = useState("")
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get('http://localhost:5000/showUser')
            setUserData(response.data)
        }
        fetchData()
    }, [])

    function handleChange() {
        console.log(list)
        console.log(email)
        userData.map(item => {
            if (item.email.startsWith(email)) {
                console.log(item.email.startsWith(email))
                console.log(item)
                setList([...list, item])
                console.log(list)
            } else {
                setList([])
            }
        })
    }
console.log(list)
    return (
        <>
            <div className='event-sender-main'>
                <div className='event-sender-box'>
                    <div>
                        <input value={email} placeholder='Enter the email' onChange={(event) => {
                            setEmail(event.target.value.trim())
                        }} ></input> <button onClick={() => handleChange()}>🔍</button>
                    </div>

                    <div className='event-sender-emails-box'>
                        <ul>
                            {
                                list.length === 0 ? <p>Loading...</p> : list.map(item => {
                                    return (
                                        <>

                                            <li ><p>Username : {item.username}</p></li>
                                            <li><p>Email : {item.email}</p></li>
                                            <br></br>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EventSender