import React, { FC, Props, useState, VFC } from 'react';
import axios from 'axios';

const TweetsList: FC = () => {
    const [tweetsList, setTweetsList] = useState<any[]>([])
    let tweets: string[] = []
    let listItems: any[] = []
    
    const get_tweets = async () =>{
        await axios.get(`http://127.0.0.1:5000/get_tweets/`)
            .then(response => { response.data.forEach((tweet: string) => tweets.push(tweet)) })
        console.log(tweets)
        listItems = tweets.map((tw, index) =>{
            return(
                <>
                    <li key={index}>
                        {tw}
                    </li>
                    <hr />
                </>
            )}
        )
        setTweetsList([...listItems])
        console.log(tweetsList)
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

