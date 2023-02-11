import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";

const List = () => {
  const [entries,setEntries]= useState(5)
  const changeEntries =(event)=>{
    setEntries(event.target.value)
    setEnd(event.target.value)
    
  }

  const [items, setItems] = useState([]);  
  useEffect(() => {
    const fetchProducts = async () => {
       const res = await axios.get("http://localhost:5000/api/product/list");              
       setItems(res.data['products']);              
    };
    fetchProducts();
  },[]);


  const [current_page, setCurrentPage] = useState(1);
  const [start,setStart] = useState(0); 
  const [end,setEnd]= useState(entries);
  const results = [];

  const onnext =()=>{
       if(current_page < total_pages){
          setCurrentPage(current_page+1)
          setStart(end)
          setEnd(parseInt(end)+parseInt(entries))
       }
  }
  const onprevious =()=>{
    if(current_page>1){
      setCurrentPage(current_page-1)
      setStart(start-entries)
      setEnd(end-entries)
    }
  }

  items.forEach(item => {
    results.push(
      <tr key={item._id}>
        <td>{item._id}</td>
        <td>{item.product_name}<br/>
        {item.product_extinguisher_type} {item.product_extinguisher_capacity}<br/>
        {item.product_manufactured_date.slice(0,10)} | {item.product_due_date.slice(0,10)}</td>
        <td>{item.product_extinguisher_type}</td>
        <td>
          <button className="btn btn-primary mx-1" ><i className="bi bi-pencil-square"></i></button>
          <button className="btn btn-danger mx-1"><i className="bi bi-trash"></i></button>
        </td>
      </tr>
    );
  });
  const total_pages= Math.ceil(results.length/entries)

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
            <label className="p-2" >entries</label>
          
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

      <table className="table">
        <thead>
          <tr className="border border-grey">
            <th className="col-lg-3" scope="col">ID</th>
            <th className="col-lg-5" scope="col">Product</th>
            <th className="col-lg-2" scope="col">Type</th>
            <th className="col-lg-2" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {results.slice(start,end)}
        </tbody>
      </table>
      </div>

      <footer className="row mx-3 py-4" >
              <div className="col-lg-6" >
                <label className=" my-2 p-2">Showing {current_page} of {total_pages} of {entries} entries</label>
              </div>
              <div className="col-lg-6">
               <div className="row my-2">
               <label className="col p-2"></label>
               { current_page>1 &&
                 <label onClick={onprevious} className="col-sm-2 p-2">Previous</label>   
                }
                <button className="border border-grey rounded col-sm-1 ">{current_page}</button>
                { current_page!==total_pages &&
                   <label onClick={onnext}  className="col-sm-1 p-2">Next</label>
                }
               
                  </div>
              </div>
      </footer>
   </>
  );
};
export default List;