import React, { FC, useState } from 'react';
import './style.css';
import Button from '../atoms/Button'
type Props = {
    
}


const Home:  React.FC<Props> = (props) => {

    const submitTwitterAccount = () => {
        if(!userId){
            alert('you must type your user id');
            return
        }else if (userId[0] != '@'){
            alert('you must start with @')
            return
        }
        console.log("hello");
        console.log(userId);
    }
    const [userId, setUserId]  = useState('');

    const getValueId = (e: { target: { value: string; }; }) => {
        setUserId(() => e.target.value)
    }

    return (
        <div className="home">
            <h1>Enter Your Twitter account id</h1>
            <input type="text" value={userId} onChange={getValueId} />
            <Button content="submit" func={submitTwitterAccount}/>
        </div>
    )
}

export default Home;