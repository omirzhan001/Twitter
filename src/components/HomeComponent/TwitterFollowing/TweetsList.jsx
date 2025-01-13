import KZ_IMG_PATH from "./images/kz.png";
import NFACTOR from "./images/nFactorial.png";
import Tweet from "./Tweet.jsx";
import React from "react";
import SearchInput from "../../homComponentInfo/SearchInput.jsx";

class TweetsList extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      searchTerm: '',
      tweets: [
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
          img: NFACTOR,
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
      ]
    };

    this.onChangeTextInput = this.onChangeTextInput.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  onChangeTextInput = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: 'Omirzhan',
      authorUsername: 'Amirkhan',
      img: KZ_IMG_PATH,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      topic: 'a'
    };

    this.setState({
      tweets: [...this.state.tweets, newTweet],
      content: ''
    });
  };

  deleteTweet = (tweetId) => {
    this.setState({
      tweets: this.state.tweets.filter(tweet => tweet.id !== tweetId)
    });
  };

  render() {
    const { tweets, content, searchTerm } = this.state;
    const filteredTweets = tweets.filter(tweet =>
      tweet.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>

        {this.props.children({
                 searchTerm,
                 setSearchTerm: this.setSearchTerm,
          content,
          onChangeTextInput: this.onChangeTextInput,
          onTweet: this.addToTweets,
        })}
        {filteredTweets.map(tweet => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            deleteTweet={() => this.deleteTweet(tweet.id)}
          />
        ))}
      </div>
    );
  }
}

export default TweetsList;
