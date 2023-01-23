import React from "react";
import { useState } from "react";
import ProductTabs from "./ProductTabs";

const Tabs = () => {
  const [activeTab ,setActiveTab] = useState("Dashboard");

    const handleTab1 = ()=>{
      setActiveTab("Dashboard");
    };
    const handleTab2 = () => {
      setActiveTab("Clients");
    };
    const handleTab3 = ()=>{
      setActiveTab("Products");
    };
    const handleTab4 = () => {
      setActiveTab("Inspection");
    };
  
  return (
  <div>
  <ul className="mt-2 ml-4 border border-grey nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="mt-2 nav-item" role="presentation">
    <button onClick={handleTab1} className="border border-grey nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dashboard</button>
  </li>
  <li className="mt-2  nav-item" role="presentation">
    <button onClick={handleTab2} className="border border-grey nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Clients</button>
  </li>
  <li className="mt-2 nav-item" role="presentation">
    <button onClick={handleTab3} className="border border-grey nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Products</button>
  </li>
  <li className="mt-2  nav-item" role="presentation">
    <button onClick={handleTab4} className="border border-grey nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Inspection</button>
  </li>
</ul>
<div className="border border-grey tab-content" id="pills-tabContent">
    {(() => {
        switch (activeTab) {	
          case "Dashboard":   return <></>;
          case "Clients":   return <></>;
          case "Products": return <ProductTabs />;
          case "Inspection":  return <></>;
          default : return <></>;
        }
      })()}
</div>
    
    </div>
  );

};

export default Tabs;