import React from 'react';
import './style.css';
import TweetsList from './TweetsList.jsx';
import Omir_SVG from './images/omir.png';
import { MEDIA, C2, C3, C4, C5, C6 } from './images/index.jsx';

export default function TwitterFollowing() {
  return (
    <TweetsList>
       {({ content, onChangeTextInput, onTweet }) => (
        <div>
          <div className="d-flex ">
            <div>
              <img src={Omir_SVG} alt="Profile" className="profile-img mx-4 mt-2" />
            </div>
            <div className="profile-info">
              <input
                onChange={onChangeTextInput}
                value={content || ""}
                placeholder="What is happening?!"
                className="search-bar mx-3 my-2"
              />
              <div className="mx-4"><p>Everyone can reply</p></div>
              <hr className=".verticel-devider-twitter-1" />
            </div>
          </div>
          <div className="d-flex media-div">
            <div className="d-flex">
              <ul className="d-flex mx-5">
                <li className="media-svg mx-2"> {MEDIA}</li>
                <li className="media-svg mx-2"> {C2}</li>
                <li className="media-svg mx-2"> {C3}</li>
                <li className="media-svg mx-2"> {C4}</li>
                <li className="media-svg mx-2"> {C5}</li>
                <li className="media-svg mx-2"> {C6}</li>
              </ul>
            </div>
            <div>
              <button className="post-button" onClick={onTweet}>Post</button>
            </div>
          </div>
          <hr className=".verticel-devider-twitter-1" />
        </div>
      )}
    </TweetsList>
  );
}
