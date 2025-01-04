import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG, GROK_SVG, COMMUNITIES_SVG,PREMIUM_SVG,VERIFIEDORGS_SVG,PROFILE_SVG,MORE_SVG,ICON_SVG} from './images';
import MenuItem from './Menuitem';
import './styles.css';

function SideMenu() {
  const menu = [
    { icon: ICON_SVG, name: '' },
    { icon: HOME_SVG, name: 'Home' },
    { icon: EXPLORE_SVG, name: 'Explore' },
    { icon: NOTIFICATIONS_SVG, name: 'Notifications' },
    { icon: MESSAGES_SVG, name: 'Messages' },
    { icon: GROK_SVG, name: 'Grok' },
    { icon: BOOKMARKS_SVG, name: 'Bookmarks' },
    { icon: COMMUNITIES_SVG, name: 'Communities' },
    { icon: PREMIUM_SVG, name: 'Premium' },
    { icon: VERIFIEDORGS_SVG, name: 'Verified Orgs' },
    { icon: PROFILE_SVG, name: 'Profile' },
    { icon: MORE_SVG, name: 'More' }
  ];

  return (
    <div className="w-25 mt-3 mx-5">
      <img src={MESSAGES_SVG} alt="Twitter X logo" className='logo-icon mb-2' />

      {menu.map((item, index) => <MenuItem item ={item} key={index} />)}
      <button><a>Post</a></button>
    </div>
  );
}
export default SideMenu;