import React from "react";
const Add = () => {
  return (
  <div className="contianer">
      <header className="row mx-5">
        <h5 className="col py-4">Add New Product</h5>
        <form className="row py-4 col-sm-4">
        <div class="input-group">
        <input type="file" accept=".csv" class="form-control" />
        <button class="btn btn-primary" type="button" >Import</button>
        </div>
        </form>
      </header>
     
      <div className="container">
        <form method="post"> 
          <div className="row">
              <div className="col my-3">
                <label><b>Product Name:</b></label>
                <div>
                <input className="form-control" type="text" required/>
                </div>  
              </div>

              <div className="col my-3">
                <label><b>Manufactured Date:</b></label>
                <div>
                <input className="form-control" type="date" required/>
                </div>
              </div>
          </div>

        <div className="row">
           <div className="col my-3">
                <label><b>Extingusher Type:</b></label>
                <div>
                <input className="form-control" type="text" required/>
                </div>
           </div>
           <div className="col my-3">
                <label><b>Extingusher Next Due Date:</b></label>
                <div>
                <input className="form-control" type="date" required/>
                </div>
              </div>
        </div>

        <div className="row">
              <div className="col my-3">
                <label><b>Extingusher Capacity:</b></label>
                <div>
                <input className="form-control" type="text" required/>
                </div>
              </div> 
              <div className="col my-3">
                <label><b>Remark:</b></label>
                <div>
                <textarea className="w-100" required></textarea>
                </div>
              </div>
        </div>
         
        <div className="text-center my-2">
                <button type='submit' className="btn btn-primary">Save Data</button>
        </div>    
        </form>
      </div>

  </div>
  );
};
export default Add;