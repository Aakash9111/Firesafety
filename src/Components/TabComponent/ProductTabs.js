import React from "react";
import { useState } from "react";
import ProductAdd from "./AllTabs/ProductAdd";
import ProductList from "./AllTabs/ProductList";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Product List");
  const handleTab1 = ()=> { setActiveTab("Product List"); };
  const handleTab2 = ()=> { setActiveTab("Product Add");  };

  return (
    <div className="mx-4">
    <ul className=" border border-grey nav nav-pills" id="pills-tab" role="tablist">
  <li className="mt-2 nav-item" role="presentation">
    <button onClick={handleTab1} className="border border-grey nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Product List</button>
  </li>
  <li className="mt-2 nav-item" role="presentation">
    <button className="border border-grey nav-link"  onClick={handleTab2} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product Add</button>
  </li>
</ul>
<div className="border border-grey tab-content h-100" id="pills-tabContent">
   {activeTab === "Product List" ? <ProductList/> : <ProductAdd />}
</div>
    </div>
  );
};

export default ProductTabs;