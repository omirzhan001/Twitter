import React, { useEffect, useState } from "react";

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      const apiToken = "ВАШ_BEARER_TOKEN"; // Замените на ваш токен
      const url = "https://api.twitter.com/2/tweets?ids=YOUR_TWEET_IDS"; // Замените YOUR_TWEET_IDS на нужные ID твитов

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        setTweets(data.data); // Убедитесь, что ключи совпадают с вашей структурой данных
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTweets();
  }, []);

  if (error) {
    return <div>Ошибка загрузки: {error}</div>;
  }

  return (
    <div>
      <h1>Последние твиты</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterFeed;
