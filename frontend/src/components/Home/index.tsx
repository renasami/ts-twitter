import React, { FC, useState } from 'react';
import './style.css';
import Button from '../atoms/Button'
import axios from 'axios'
type Props = {
    
}
axios.get('http://127.0.0.1:8000/').then(response => console.log(response.data))
axios.post('http://localhost:8000/users/?user_id=Fuck').then(response => console.log(response.data))

const Home:  React.FC<Props> = (props) => {
    const submitTwitterAccount = () => {
        if(!userId){
            setErr('you must type your user id');
            return
        }else if (userId[0] != '@'){
            setErr('you must start with @');
            return
        }
        setErr('')
        console.log(userId);
        axios.post(`http://localhost:8000/users/?user_id=${userId}`)
        .then(response => setErr(response.data.user_id))
    }
    const [userId, setUserId]  = useState('');
    const [err ,setErr] = useState('')
    const getValueId = (e: { target: { value: string; }; }) => {
        setUserId(() => e.target.value)
    }

    return (
        <div className="home">
            <h1>Enter Your Twitter account id</h1>
            <p>{ err }</p>
            <input type="text" value={userId} onChange={getValueId} />
            <button onClick={submitTwitterAccount}>submit</button>
        </div>
    )
}

export default Home;