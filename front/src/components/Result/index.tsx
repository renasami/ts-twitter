import React, { useState } from 'react';
import axios from 'axios';
import store from '../../store';
import TweetsList from '../TweetsList';
import './style.css';


const Result : React.FC = () => {
    let id = store.getState().userId
    const [num, setNum] = useState<number>();
    const [all, setAll] = useState<number>();
    const [per, setPer] = useState<number>();

    (async() => {
        await axios.post(`http://127.0.0.1:5000/all/?userId=${id}`).then(response => setAll(response.data))
        await axios.post(`http://127.0.0.1:5000/test/?userId=${id}`)
            .then(response => setNum(response.data))
            setPer(num!/all! *100)
      })();
    return (
        <div className="results">  
            <div className="fas">
                <div className="child">
                <TweetsList />
                </div>
            </div>
            <div className="fas">
                <h2 className="child">There are <span>{num}</span>  tweets that contain bad words</h2>
            </div>
            <div className="fas">
                <h3 className="child"><span>{per}%</span> tweets have bad words</h3> 
            </div>
        </div>
    )
}

export default Result;