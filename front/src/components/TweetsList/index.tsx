import React, { FC, useState, VFC } from 'react';
import axios from 'axios';
import store from '../../store';

const TweetsList: FC = () => {
    const [tweetsList, setTweetsList] = useState<any[]>([])
    let tweets: string[] = []
    let listItems: any[] = []
    
    const get_tweets = async () =>{
        let id = store.getState().userId
        await axios.post(`http://127.0.0.1:5000/get_tweets/?userId=${id}`)
            .then(response => { response.data.forEach((tweet: string) => tweets.push(tweet)) })
        console.log(tweets)
        listItems = tweets.map((tw, index) =>{
            return(
                <>
                    <li key={index} className="list">
                        {tw}
                    </li>
                </>
            )}
        )
        setTweetsList([...listItems])
        console.log(tweetsList)
    }

    return (
        <>
            <button onClick={get_tweets}>show bad tweet</button>
         
                <ul>
                    {tweetsList}
                </ul>
        </>
    )
}

export default TweetsList

