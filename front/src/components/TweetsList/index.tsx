import React, { FC, Props, useState, VFC } from 'react';
import axios from 'axios';

const TweetsList: FC = () => {
    const [tweetsList, setTweetsList] = useState<any[]>([])
    let tweets: string[] = []
    let listItems: any[] = []
    const get_tweets = async () =>{
        await axios.get(`http://localhost:5000/get_tweets/`)
            .then(response => { tweets.push(response.data) })
        console.log(tweets)
        listItems = tweets.map((tw, index) =>
            <li key={index}>
                {tw}
            </li>)
        setTweetsList([...listItems])
    }

    return (
        <>
            <button onClick={get_tweets}>get_tweets</button>
            <ul>
                {tweetsList}
            </ul>
        </>
    )
}

export default TweetsList