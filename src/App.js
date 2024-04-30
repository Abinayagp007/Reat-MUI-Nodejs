
import { Label } from '@material-ui/icons';
import BoxWithIcons from './component/BoxwithIcons';
import HomePage from './component/HomePage';
import HomePageTwo from './component/HomePageTwo';
import TempleVideoPlayer from './component/TempleVideoPlayer';
import LayoutPage from './component/LayoutPage';
import SliderComponent from './component/SliderComponent';
import SideTab from './component/SideTab';
import ItemList from './component/ItemList';
import DemoCard from './component/DemoCard';
import AdditionalServiceCard from './component/AdditionalServiceCard';
import AppContent from './Frontend/AppContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<HomePage/>} />
          <Route path="/Login" element={<AppContent/>} />
          </Routes>
         
         
          </BrowserRouter>

      {/* <HomePage/> */}
      {/* <TempleVideoPlayer/> */}
      {/* <HomePageTwo/> */}


    
    
    </div>
  );
}

export default App;
