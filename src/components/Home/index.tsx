import React, { FC, useState } from 'react';
import './style.css';
import Button from '../atoms/Button'
type Props = {
    
}


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
            <Button content="submit" func={submitTwitterAccount}/>
        </div>
    )
}

export default Home;