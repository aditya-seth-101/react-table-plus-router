import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const RowDeleter = () => {
  let data= useLocation()

  const baseURL = "https://jsonplaceholder.typicode.com/users"
  axios
  .delete(`${baseURL}/${data.state.id}`)
  .then((response) => {
    console.log(data.state)
  })

  const delSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <span>Are you sure you want to delete this row</span>
      <form onSubmit={delSubmit}>
        <button type='submit' value="Submit">Submit</button>
      </form>
      <Link to="/" state={data.state}>Go back to tabel</Link>
    </>
  )
}

export default RowDeleter