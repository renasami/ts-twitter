import React, { FC, useState } from 'react';
import './style.css';
import axios from 'axios';
import {useHistory, Route,BrowserRouter as Router} from 'react-router-dom'
import Result from '../Result';
import store from '../../store';

axios.get('http://127.0.0.1:5000/test').then(response => console.log(response.data))
axios.post('http://127.0.0.1:5000/users/?user_id=Fuck').then(response => console.log(response.data))

    
const Submit:  React.FC = () => {
    const his = useHistory();
    const submitTwitterAccount = async () => {
        if(!userId){
            setErr('you must type your user id');
            return
        }else if (userId[0] != '@'){
            setErr('you must start with @');
            return
        }
        setErr('')
        console.log(userId);
        await axios.post(`http://127.0.0.1:5000/users/?user_id=${userId}`)
        .then(response => setErr(response.data.user_id))
        store.getState().userId = userId
        console.log(store.getState())
        his.push("/Result")
        
    }

 

    const [userId, setUserId]  = useState('');
    const [err ,setErr] = useState('')
    const getValueId = (e: { target: { value: string; }; }) => {
        setUserId(() => e.target.value)
    }

    return (
        <>
            {/* <div className="tweets">
                    <TweetsList />
            </div> */}
            <div className="home">
                <h1>Enter Your Twitter account id</h1>
                <p>{ err }</p>
                <input type="text" value={userId} onChange={getValueId} />
                <button onClick={submitTwitterAccount} className="good">submit</button>
            </div>
            
        </>
    )
}
const Home =() => {
    return (
        <Router>
            <Route exact path="/Home" component={Submit}/>
            <Route exact path="/Result" component={Result}/>
        </Router>
    )
}
export default Home;