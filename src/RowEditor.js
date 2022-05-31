import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
const RowEditor = () => {
    let data= useLocation()
    const baseURL = "https://jsonplaceholder.typicode.com/users"
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
    let [received,setReceived]=useState({});
 
    const handelInput =(e)=>{
        switch (e.target.id) {
            case "name":
                setName(e.target.value)
               
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "phone":
                setPhone(e.target.value)
                break;
        
            default:
                break;
        }
    }
    const changeSubmit =(e)=>{
        

     
        e.preventDefault()
        axios
        .put(`${baseURL}/${data.state}`, {
            name:name,
            email:email,
            phone:phone
        })
        .then((response) => {
            setReceived( response.data)
        });
    }
  return (
    <div>
        <form onSubmit={changeSubmit}>
            <input type="text" placeholder='Enter Name' id='name' onChange={handelInput} />
            <input type="text"  placeholder='Enter Email' id='email' onChange={handelInput}/>
            <input type="text"  placeholder='Enter Contact No.' id='phone' onChange={handelInput}/>
            <button type="submit" value="Submit">Submit</button>
        </form>
        <Link to="/" state={received}>Go back to tabel</Link>
    </div>
  )
}

export default RowEditor