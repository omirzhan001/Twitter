import './style.css';
import { COMMENTS, RETWEETS, LIKES, } from './images/index.jsx';


export default function Tweet(tweet) {
    return (
        <div >
            <div className="tweet">
                <div className="d-flex mx-3">
                    <img src={tweet.img} className='profile-img mx-2' />
                    <div className="mx-3">
                        <p>{tweet.authorName} <span>{tweet.authorUsername}</span></p>
                    </div>
                </div>
            </div>
            <div className="content-tweet mx-5">
                <div className="mt-3 mx-5 content-tweet-text "  >
                    <p>{tweet.content}</p>
                    <img className="content-tweet-img" src={tweet.img} alt=""  />

                </div>
                <div className="d-flex mt-2 mx-4">
                    <div className="tweet-content d-flex mx-5">
                        <div className="svg-post mx-2"> {COMMENTS}</div>
                        <p>{tweet.replies}</p>
                    </div>
                    <div className="tweet-content d-flex mx-5">
                        <div className="svg-post mx-2"> {RETWEETS}</div>
                        <p>{tweet.retweets}</p>
                    </div>
                    <div className="tweet-content d-flex mx-5">
                        <div className="svg-post mx-2"> {LIKES}</div>
                        <p>{tweet.likes}</p>
                    </div>

                </div>
            </div>
            <hr className=" .verticel-devider-twitter-1" />
        </div>
    );
}