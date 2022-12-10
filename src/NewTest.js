import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import  {useLocation} from 'react-router-dom';

export default function NewTest() {
    const [data, setData] = useState([]);
    // const [userId, setUserId] = useState();
    
    const {state} = useLocation()
    console.log(state)
    
    const userId = state.id
    console.log(userId , 'check')
    
    const fetchData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    },[])
    // const submitHandler = () => {
    //     fetchData()
    // }
return (
    <div>
        <h2>{state.userId}</h2>
        <h2>{state.title}</h2>
        <h2>{state.body}</h2>
        
        {/* <input type="text" onChange={(e) => setUserId(e.target.value)} value={userId}/>
        <Button onClick={submitHandler}>submit</Button> */}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Post ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.postId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
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
