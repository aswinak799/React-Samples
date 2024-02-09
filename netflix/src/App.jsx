
import NavBar from './components/NavBar'
import Banner from './components/banner/Banner'
import RowPost from './components/rowpost/RowPost'
import { actions, originals } from './urls'

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix Originals' url={originals}/>
    <RowPost title='Action' small url={actions} />
      
    </>
  )
}

export default App
