import React from "react";
const Add = () => {
  return (
  <div className="contianer">
      <div className="row mx-5">
      <h5 className="col py-4">Add New Product</h5>
      <form className="row py-4 col-sm-4">
      <div class="input-group">
      <input type="file" class="form-control" aria-describedby="inputGroupFileAddon04" />
      <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Import</button>
    </div>
      </form>
      </div>
      <div className="container">
        <form method="post"> 
          <div className="row">
              <div className="col my-3">
                <label><b>Product Name:</b></label>
                <div>
                <input className="form-control" type="text" />
                </div>  
              </div>

              <div className="col my-3">
                <label><b>Manufactured Date:</b></label>
                <div>
                <input className="form-control" type="date" />
                </div>
              </div>
          </div>

        <div className="row">
           <div className="col my-3">
                <label><b>Extingusher Type:</b></label>
                <div>
                <input className="form-control" type="text" />
                </div>
           </div>
           <div className="col my-3">
                <label><b>Extingusher Next Due Date:</b></label>
                <div>
                <input className="form-control" type="date" />
                </div>
              </div>
        </div>

        <div className="row">

              <div className="col my-3">
                <label><b>Extingusher Capacity:</b></label>
                <div>
                <input className="form-control" type="text" />
                </div>
              </div> 
              <div className="col my-3">
                <label><b>Remark:</b></label>
                <div>
                <textarea className="w-100"></textarea>
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