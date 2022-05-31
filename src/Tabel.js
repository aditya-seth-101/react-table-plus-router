import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Tabel = (props) => {
    let receivedData=useLocation()
    
    const [table, setTable] = useState([])
    const tableRender =table.map(
        (item) => (
            <>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td><Link to='/RowEditor' state={item.id}>Edit</Link>
                        
                    </td>
                    <td><Link to='/RowDeleter' state={item.id} >Delete</Link>
                        
                    </td>
                </tr>
            </>
        )
    )

    useEffect(() => {
        axios.get(
            'https://jsonplaceholder.typicode.com/users'
        ).then(res => {
            setTable(res.data)
            console.log(receivedData.state)
            for (let i = 0; i < res.data.length; i++) {
               if ( res.data[i].id==receivedData.state.id) {
                res.data[i] =receivedData.state;
                setTable(res.data)
               }
               if (res.data[i].id==(receivedData.state)) {
                   console.log(receivedData.state)
                res.data[i] =res.data.splice(i, 1);
                setTable(res.data)
               }
                
            }
            
        })
        
    }, [])
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRender}
                </tbody>
            </table>
        </>
    )
}

export default Tabel