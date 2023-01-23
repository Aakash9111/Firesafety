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
    <>
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="m-1 nav-item" role="presentation">
    <button onClick={handleTab1} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dashboard</button>
  </li>
  <li className="m-1 nav-item" role="presentation">
    <button onClick={handleTab2} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Clients</button>
  </li>
  <li className="m-1 nav-item" role="presentation">
    <button onClick={handleTab3} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Products</button>
  </li>
  <li className="m-1 nav-item" role="presentation">
    <button onClick={handleTab4} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Inspection</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  {/* <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div> */}
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
    
    </>
  );

};

export default Tabs;