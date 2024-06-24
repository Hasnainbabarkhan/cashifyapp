import './App.css';
import {PrimarySearchAppBar} from './pages/Header';
import SwipeableTextMobileStepper from './pages/slider';
import ImgMediaCard from './pages/PhoneCards';
import ProductCard from './pages/Refurbished';
import ActionAreaCard from './pages/Ad';
import Stores from './pages/Stores';
import Reviews from './pages/Reviews';
import Headlines from './pages/Headlines';
import Devices from './pages/Devices';
import PocketCards from './pages/PocketCards';
import Deals from './pages/Deals';
import FAQ from './pages/Faqs';
import MediaCard from './pages/articles.jsx';
import LastAd from './pages/LastAd.jsx';
import Blog from './pages/Typography.jsx';
import Footer from './pages/Footer.jsx'

function App() {
  return (
    <>
    <PrimarySearchAppBar />
    <SwipeableTextMobileStepper/>
    <ImgMediaCard/>
    <ProductCard/>
    <ActionAreaCard/>
    <Stores/>
    <Reviews/>
    <Headlines/>
    <Devices/>
    <PocketCards/>
    <Deals/>
    <FAQ/>
    <MediaCard/>
    <LastAd/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
