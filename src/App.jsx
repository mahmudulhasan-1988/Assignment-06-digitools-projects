import { useState } from 'react';
import './App.css';
import ActiveUsers from './component/ActiveUser/ActiveUsers';
import Banner from './component/BannerSection/Banner';
import Footer from './component/Footer/Footer';
import GetStarted3 from './component/GetStarted/GetStarted3';
import NavBar from './component/NavBar/NavBar';

import Pricing from './component/PricingCard/Pricing';
import Workflow from './component/ReadyWorkflow/Workflow';
import Models from './component/PremiumCard/Models';
import Cart from './component/PremiumCard/Cart';
import CartTitle from './component/PremiumCard/CartTitle';


const getModels = async () => {
  const response = await fetch('/models.json');
  return response.json();
}
const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
   
  <NavBar carts={carts}></NavBar>
 
  <Banner></Banner>
  <ActiveUsers></ActiveUsers>
  
<CartTitle></CartTitle>
  {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent mt-10">

  <input
    type="radio"
    name="tabs"
    className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
    aria-label="Products"
    defaultChecked
    onClick={() => setActiveTab("Products")}
  />

  <input
    type="radio"
    name="tabs"
    className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
    aria-label={`Cart (${carts.length})`}
    onClick={() => setActiveTab("Cart")}
  />

</div>

  {activeTab === "Products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

  {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}

  <GetStarted3></GetStarted3>

  
  <Pricing></Pricing>

    
    <Workflow></Workflow>

   <Footer></Footer>
    </>
  )
}

export default App
