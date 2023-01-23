import React from "react";
const Add = () => {
  return (
  <div className="contianer">
      <div className="container">
      <h5 className=" py-4">Add New Product</h5>
      </div>
      <div className="container">
        <form>
              <div className="form-group row my-3">
                <label><b>Product Name:</b></label>
                <div className="col-sm-6">
                <input className="form-control" type="text" />
                </div>
              </div>

              <div className="form-group row my-3">
                <label><b>Extingusher Type:</b></label>
                <div className="col-sm-6">
                <input className="form-control" type="text" />
                </div>
              </div>

              <div className="form-group row my-3">
                <label><b>Extingusher Capacity:</b></label>
                <div className="col-sm-6">
                <input className="form-control" type="text" />
                </div>
              </div>

              <div className="form-group row my-3">
                <label><b>Manufactured Date:</b></label>
                <div className="col-sm-6">
                <input className="form-control" type="date" />
                </div>
              </div>

              <div className="form-group row my-3">
                <label><b>Extingusher Next Due Date:</b></label>
                <div className="col-sm-6">
                <input className="form-control" type="date" />
                </div>
              </div>
              <div className="form-group row my-3">
                <label><b>Remark:</b></label>
                <div className="col-sm-6">
                <textarea  className="col-sm-6" ></textarea>
                </div>
              </div>
        </form>
      </div>
  </div>
  );
};
export default Add;