import React from "react";
import { useState } from "react";
import ProductAdd from "./AllTabs/ProductAdd";
import ProductList from "./AllTabs/ProductList";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Product List");
    const handleTab1 = ()=>{
      setActiveTab("Product List");
      
    };
    const handleTab2 = () => {
      setActiveTab("Product Add");
    };

  return (
    <div className="container">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button onClick={handleTab1} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Product List</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link"  onClick={handleTab2} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product Add</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
   {activeTab === "Product List" ? <ProductAdd/> : <ProductList />}
</div>
    </div>
  );
};

export default ProductTabs;