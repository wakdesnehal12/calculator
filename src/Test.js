import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Test() {
    const navigate = useNavigate();
    const [user, setUser] = useState([])
    
    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setUser(result)
        })
    }

    const handleClick = (item) => {
        console.log(item.id)
        // setUser(da.id)
        navigate('./newtest', {state:item})
    }
    useEffect(() => {
        loadData()
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>User Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item) => {
                        return (
                        <tr onClick={() => handleClick(item)} key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
 