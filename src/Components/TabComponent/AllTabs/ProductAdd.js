import React from "react";
import { useState } from "react";


const Add = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data= {
     "product_name": name,
    "product_extinguisher_type": exttype,
     "product_extinguisher_capacity": extcap,
     "product_manufactured_date": new Date(mfgdate),
    "product_due_date": new Date(extduedate),
    "product_remarks": remark
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://127.0.0.1:5000/api/product/create', requestOptions)
        .then((response) => {
          if(response.status===200){
            alert("Product Saved")
            setExtcap("")
            setExtduedate(new Date(""))
            setExttype("")
            setName("")
            setRemark("")
            setMfgdate(new Date(""))
          }else{
            alert("Something went Wrong ")
          }
        });
   };
  
  const [name,setName]= useState("");
  const [mfgdate,setMfgdate]= useState("");
  const [exttype,setExttype]= useState("");
  const [extduedate,setExtduedate]= useState("");
  const [extcap,setExtcap]= useState("");
  const [remark,setRemark]= useState("");
 const namechange = (event)=>{ setName(event.target.value); }
 const mfgdatechange = (event)=>{ setMfgdate(event.target.value); }
 const exttypechange = (event)=>{ setExttype(event.target.value); }
 const extduedatechange = (event)=>{ setExtduedate(event.target.value); }
 const extcapchange = (event)=>{ setExtcap(event.target.value); }
 const remarkchange = (event)=>{ setRemark(event.target.value); }



  return (
  <div className="contianer">
      <header className="row mx-5">
        <h5 className="col py-4">Add New Product</h5>
        <form className="row py-4 col-sm-4">
        <div className="input-group">
        <input type="file" accept=".csv" className="form-control" />
        <button className="btn btn-primary" type="button" >Import</button>
        </div>
        </form>
      </header>
     
      <div className="container">
        <form onSubmit={handleSubmit}> 
          <div className="row">
              <div className="col my-3">
                <label><b>Product Name:</b></label>
                <div>
                <input name="name"  value={name} onChange={namechange} className="form-control" type="text" required/>
                </div>  
              </div>

              <div className="col my-3">
                <label><b>Manufactured Date:</b></label>
                <div>
                <input name="mfgdate" value={mfgdate} onChange={mfgdatechange}  className="form-control" type="date" required/>
                </div>
              </div>
          </div>

        <div className="row">
           <div className="col my-3">
                <label><b>Extingusher Type:</b></label>
                <div>
                <input name="exttype" value={exttype}  onChange={exttypechange} className="form-control" type="text" required/>
                </div>
           </div>
           <div className="col my-3">
                <label><b>Extingusher Next Due Date:</b></label>
                <div>
                <input name="extduedate"  value={extduedate} onChange={extduedatechange} className="form-control" type="date" required/>
                </div>
              </div>
        </div>

        <div className="row">
              <div className="col my-3">
                <label><b>Extingusher Capacity:</b></label>
                <div>
                <input name="extcap"   value={extcap} onChange={extcapchange} className="form-control" type="text" required/>
                </div>
              </div> 
              <div className="col my-3">
                <label><b>Remark:</b></label>
                <div>
                <textarea name="remark" value={remark}  rows='4' onChange={remarkchange} className="w-100" required></textarea>
                </div>
              </div>
        </div>
         
        <div className="text-center my-2">
            <button type="submit"  className="btn btn-primary">Save Data</button>
        </div>    
        </form>
      </div>

  </div>
  );
};
export default Add;