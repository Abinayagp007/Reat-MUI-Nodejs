import React from 'react'
import BoxWithIcons from './BoxwithIcons'
import LayoutPage from './LayoutPage';
import SliderComponent from './SliderComponent';
import SideTab from './SideTab';
import ItemList from './ItemList';
import DemoCard from './DemoCard';
import AdditionalServiceCard from './AdditionalServiceCard';
import AppContent from '../Frontend/AppContent';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import PlatformsPage from './PlatformsPage';
import Visitors from './Visitors';

export default function Home() {
  return (
    <div> 
         <BoxWithIcons/>
    <SliderComponent/>
    <SideTab/>
    {/* <DemoCard/> */}
    <div style={{marginTop:"20px", marginBottom:"25px", marginLeft:"22rem"}}>
    <AdditionalServiceCard/>
    
    </div>
    {/* <LayoutPage/> */}
    <ItemList/>
    {/* <AppContent/> */}
    {/* <LayoutPage/> */}
    <BackToTopButton/>
    <PlatformsPage sx={{marginBottom:"30px",}}/>
    <AdditionalServiceCard/>
    <Visitors />
    <div>
     
    <Footer sx={{marginTop:"25px"}}/>
    </div>

    </div>
  )
}
