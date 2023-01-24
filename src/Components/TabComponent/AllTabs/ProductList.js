import React from "react";
const List = () => {
  return (
   <>
     <header className="row mx-3 py-4">
        <div className="col-lg-6">
            <div className="input-group">
            <label className="p-2" >Show</label>
            <select className="btn-outline">
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
   </>
  );
};
export default List;