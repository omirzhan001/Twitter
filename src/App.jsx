import './App.css'
import SideMenu from './components/SideMenuComponent'
import Home from './components/HomeComponent'

function App() {

  return (
    <>
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className='verticel-devider'></div>
      <Home />
    </div>
    </>
  )
}

export default App
