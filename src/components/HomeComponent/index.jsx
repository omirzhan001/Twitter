import './style.css';
export default function Home() {
  return (
    <div className="home-menu w-50">
          <ul className="home-menu-ul mt-3">
            <li className="nav-item">
              <a  href="#">For you</a>
            </li>
            <li className="nav-item">
              <a href="#">Following</a>
            </li>
          </ul>
          <hr className='linehr'/>
      </div>
  );
}