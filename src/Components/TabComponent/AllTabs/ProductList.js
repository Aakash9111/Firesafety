import { useState } from "react";
import React from "react";

const List = () => {

  const [entries,setEntries]= useState()
  const changeEntries =(event)=>{
    setEntries(event.target.value)
  }

  return (
   <>
     <header className="row mx-3 py-4">
        <div className="col-lg-6">
            <div className="input-group">
            <label className="p-2" >Show</label>
            <select onChange={changeEntries} className="rounded btn-outline">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <labels className="p-2" >entries</labels>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="row">
            <label className="col-lg-6 p-2"></label>
            <label className="col-lg-2 text-center p-2">Search</label>
            <input type="text" className="col-lg-4"/>
            </div>
        </div>
      </header> 

      <div className="mx-3 py-2">
      <table class="table">
        <thead>
          <tr className="border border-grey">
            <th className="col-lg-2" scope="col">ID</th>
            <th className="col-lg-5" scope="col">Product</th>
            <th className="col-lg-3" scope="col">Type</th>
            <th className="col-lg-3" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>extingusher</td>
            <td>extingusher</td>
            <td>
              <button className="btn btn-primary mx-1" ><i class="bi bi-pencil-square"></i></button>
              <button className="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
          
        </tbody>
      </table>
      </div>
      

      <footer className="row mx-3 py-4" >
              <div className="col-lg-6" >
                <label className=" my-2 p-2">Showing 1 of 5 of {entries} entries</label>
              </div>
              <div className="col-lg-6">
               <div className="row my-2">
               <label className="col p-2"></label>
                <label className="col-sm-2 p-2">Previous</label>
                <button className="border border-grey rounded col-sm-1 ">1</button>
                <label className="col-sm-1 p-2">Next</label>
                </div>
              </div>
      </footer>
   </>
  );
};
export default List;