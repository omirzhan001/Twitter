import './style.css';
import TwitterForyou from './TwitterForyou';
import TwitterFollowing from './TwitterFollowing';
import { Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  const userId = '12345'; // Пример userId, который можно заменить динамическим значением

  return (
    <div className="home-menu w-50">
      <header className="header-menu mt-4 mb-4">
        <Link to="/">For You</Link>
        <Link to={`/following/${userId}`}>Following</Link>
      </header>
      <div className="linehr"> </div>
     <div className="content-menu mt-4">
      <Routes >
        <Route path="/" element={<TwitterForyou />} />
        <Route path="/following/:id" element={<TwitterFollowing />} />
        <Route path="*" element={<div className="not-found">404 - Страница не найдена</div>} />
      </Routes>
      </div>
    </div>
  );
}
