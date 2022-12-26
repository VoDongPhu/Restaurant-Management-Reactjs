import axios from "axios";
import React , {useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import { deleteTable } from "../../../api/tableAPI";


//import { useNavigate } from "react-router-dom";
import "./styles.scss"

function TableManagement() {
  let Navigate = useNavigate()
   const [arrTables, setArrTables] = useState([]);
  
  
   
  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/tableType/getData"
      );
      if (res) {
        setArrTables(res?.data?.data);
      }
    } catch (error) {}
  }
  if (arrTables.length === 0) {
    return
  }
  const handleDelete = async (table) => {
    try{
      await deleteTable(table._id)
      getData()
    }catch(error) {
      console.log(error)
    }
  }
  const handleEdit =  (table) => {
    Navigate(`/admin/table/edit-table/${table._id}`)
   
  }
 return(
   <div className="table-container" >
    
    <div className="mx-1">
      <Link  className="btn btn-add-table px-3" to="/admin/table/add-table"><i class="fa-solid fa-plus"></i>Add new table</Link>
    </div>
       <div className='users-table mt-3 mx-1'>
            <table className='table'>
               <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions</th>
               </tr>
               { arrTables.map((item,index)=>{
                  return (
                     <>
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price} đ</td>
                        <td><img className="image-table" src={item.image}></img></td>
                        <td>
                          <button className="btn-edit" onClick={()=>handleEdit(item)}  ><i class="fa-solid fa-pencil "></i></button>
                          <button className="btn-delete" onClick={()=>handleDelete(item)}><i class="fa-solid fa-trash "></i></button>
                        </td>
                      </tr>       
                     </>
                     ) })}
            </table>
         </div>
       
   </div>
 )
}
export default TableManagement