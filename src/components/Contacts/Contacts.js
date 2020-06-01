import React from 'react'
import './Contacts.css'
// import{useState} from 'react'

function Contacts () {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')
    
    // const handleName = (event) =>{
    //     setName(event.target.value);
    // }
    // const handleEmail =(event)=>{
    //     setEmail(event.target.value)
    // }
    // const handleMessage = (event)=>{
    //     setMessage(event.target.value)
    // }
    // const handleSubmit= (event)=>{
    //     event.preventDefault()
    //     fetch('/send', {
	// 				method: 'POST',
	// 				headers: {
	// 					'Accept': 'application/json',
	// 					'Content-Type': 'application/json',
    //                 },
    //                 body:JSON.stringify({
    //                     name:name,
    //                     email:email,
    //                     message:message}
    //                 )
	// 			});
    // }
    return (
			<div>
				<div className='style-line'></div>
				<h6>CONTACTS</h6>
				<p>Phone- xxx-xxx-xxxx</p>
				<p>Email - tkthedesigner@gmail.com</p>
                <p>or checkout links below</p>
			</div>
			// <div><form onSubmit={handleSubmit} method='post' encType='text/plain'>
			// Name
			// <input type='text' name='name' onChange={handleName}></input>
			// Email
			// <input type='tex' name='email' onChange={handleEmail}></input>
			// Message
			// <input type='textarea' name='message' onChange={handleMessage}></input>
			// <input type='submit' value='Send'></input>
			// <input type='reset' value='Reset'></input>
			// </form></div>
		);
}

export default Contacts