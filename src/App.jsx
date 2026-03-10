
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SimpleBookmarking from './Components/SimpleBookmarking';
import SpeedySearching from './Components/SpeedySearching';
import EasySharing from './Components/EasySharing';
function App() {
  
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}>
          <Route index element = {<SimpleBookmarking/>}/>
          <Route path='Simplebookmarking' element={<SimpleBookmarking/>}/>
          <Route path='Speedysearching' element={<SpeedySearching/>}/>
          <Route path='easysharing' element={<EasySharing/>}/>
          </Route>
        
      </Routes>
   
     </BrowserRouter> */}
     <LandingPage/>
    </>
  )
}

export default App
