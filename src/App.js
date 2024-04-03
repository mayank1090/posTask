import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topinfobar from './Components/Topinfobar/Topinfobar';
import Infocard from './Components/Infocard/Infocard';
import {
    faSackDollar ,faArrowUp,faClipboardList, faArrowDown, faWallet,faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import Bargraph from './Components/bargraph/Bargraph';
import BookingGraph from './Components/bargraph/Bargraph';
import PieChart from './Components/Piegraph/Piegraph';
import PieChartComponent from './Components/Piegraph/Piegraph';
import DonutChart from './Components/Piegraph/Piegraph';
import { useState ,useEffect } from 'react';

function App() {

  const [showsidebar, setsidebar]=useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App flex overflow-hidden relative  ">
      <div className='sidembarparnt absolute  md:static'>
      {screenWidth<768? (showsidebar&&<Sidebar/>) :<Sidebar/>}
      </div>
      <div className='rightsidebigparentforflex overflow-y-auto w-full '>
        <Topinfobar setsidebar={setsidebar} showsidebar={showsidebar}/>
        <div className='loersubinforcards flex justify-evenly flex-wrap'>
         <div className='oneinforcardparentone'>
         <Infocard cardiconof={faSackDollar} uppertext="Earning" amount={315} directionone={faArrowUp} background="rgb(165, 239, 165)" iconbackground="rgb(55, 117, 55)" progresspercentage={38} />
         </div>
         <div className='oneinforcardparentone'>
         <Infocard cardiconof={faClipboardList} uppertext="Orders" amount={2.4} directionone={faArrowDown} background="rgb(215, 183, 245)" iconbackground="rgb(113, 54, 168)" progresspercentage={2} />
         </div>
         <div className='oneinforcardparentone'>
         <Infocard cardiconof={faWallet} uppertext="Balance" amount={2.9} directionone={faArrowDown} background="rgb(114, 211, 249)" iconbackground="rgb(52, 114, 237)" progresspercentage={2.4} />
         </div>
         <div className='oneinforcardparentone'>
         <Infocard cardiconof={faSuitcase} uppertext="Earning" amount={315} directionone={faArrowUp} background="rgb(255, 194, 225)" iconbackground="rgb(169, 42, 42)" progresspercentage={38} />
         </div>
        </div>
       <div className='anybodyhasddr w-full flex justify-evenly'>
        <div className='biggrapgparent  bg-white'><BookingGraph/></div>
        <div className='piechartgrapghparent bg-white'><DonutChart/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
