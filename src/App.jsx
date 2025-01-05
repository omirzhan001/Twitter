import './App.css'
import { BrowserRouter } from 'react-router-dom';
import SideMenu from './components/SideMenuComponent'
import Home from './components/HomeComponent'
import Info from './components/homComponentInfo'

function App() {
  return (
    <>
      <div className="App d-flex mx-5">
        <SideMenu />
        <hr className='verticel-devider' />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        <hr className='verticel-devider ' />
        <Info />
      </div>
    </>
  )
}

export default App
