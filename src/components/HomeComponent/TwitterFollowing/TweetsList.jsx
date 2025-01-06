import KZ_IMG_PATH from "./images/kz.png";
import NFACTOR from "./images/nFactorial.png";
/* import KZ_IMG_PATH from "./images/kz.png"; */
import Tweet from "./Tweet.jsx"; 

export default function TweetsList() {
    const tweets = [
        {
            id: 1,
            authorName: "Omirzhan",
            authorUsername: "Amirkhan",
            img: KZ_IMG_PATH,
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora debitis autem voluptates, ducimus aut ipsa! Consequatur nisi corrupti, aliquid repellat odit repudiandae natus rerum vitae ullam modi distinctio ducimus!',
            replies: 100,
            retweets: 2000,
            likes: 300
        },
        {
            id: 2,
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTOR ,
            content: 'Data analytics course starts today',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        },
        {
            id: 3,
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: KZ_IMG_PATH,
            content: 'Black Friday! Успей купить все курсы!',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        }
    ];

    return (
        <div>
            {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </div>
    );
}
