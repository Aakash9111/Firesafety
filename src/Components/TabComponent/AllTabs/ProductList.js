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

      <footer className="row mx-3 py-4" >
              <div className="col-lg-6" >
                <label className=" my-2 p-2">Showing 1 of 5 of 5 entries</label>
              </div>
              <div className="col-lg-6">
               <div className="row my-2">
               <label className="col p-2"></label>
                <label className="col-sm-2 p-2">Previous</label>
                <button className="btn btn-primary col-sm-1 mx-1">1</button>
                <label className="col-sm-1 p-2">Next</label>
                </div>
              </div>
      </footer>
   </>
  );
};
export default List;