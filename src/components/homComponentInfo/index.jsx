import './style.css';

export default function info() {
  return (
    <div className="w-25 ">
      <div className="container">
        <div className="input-container">
          <div className="search-wrapper mt-3">
            <input className="styled-input" placeholder="Search..." />
            <button className="search-icon">🔍</button>
          </div>
        </div>
        <div className="rounded-box mt-3">
          <h3>Try Premium for free today</h3>
          <br />
          <span>Upgrade your experience with less ads, power tools, and more with Premium.</span>
          <br />
          <button className='button-14'>Start free 14-day trial</button>
        </div>

        <div className="rounded-box mt-3">
          <h3>Try Premium for free today</h3>
          <br />
          <span>
            Trending in Kazakhstan
            Алматы
          </span>
          <br />
          <span>
            Trending in Kazakhstan
            Kazakhstan
          </span>
          <br />
          <span>
            Trending in Kazakhstan
            #Web3
          </span>
          <br />
          <span>
            Trending in Kazakhstan
            Казахстана
          </span>
        </div>
      </div>
    </div>
  );
}