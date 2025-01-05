import './App.css'
import SideMenu from './components/SideMenuComponent'
import Home from './components/HomeComponent'
import Info from './components/homComponentInfo'  

function App() {
  return (
    <>
    <div className="App d-flex mx-5">
      <SideMenu />
      <hr className='verticel-devider'/>
      <Home />
      <hr className='verticel-devider '/>
      <Info />
    </div>
    </>
  )
}

export default App
