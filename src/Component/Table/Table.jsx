import moment from 'moment/moment';
import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import {AiOutlineEdit,AiFillDelete} from "react-icons/ai";



const Table = ({collectData,addbutton,setInputData,setCollectData}) => {
  const editData = (i) => {
    setInputData(collectData[i]);
    addbutton();
  }

  const deleteData = (index) => { 
    const eraseData = [...collectData];
    eraseData.splice(index, 1);
    setCollectData(eraseData);
  }
  
  
  // const deleteData = (e) => { 
  //   const erase = collectData.splice(e,1)
  //       setCollectData([...collectData,erase]);
  // }     

  return (
    <>
      <div className="container mt-3">
        <div className="text-end my-3">
          <button
            type="button"
            className="btn btn-secondary text-center fw-bold"
            onClick={addbutton}>
            <AiOutlinePlus /> Add
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {collectData.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">
                  No data available
                </td>
              </tr>
            ) : (
              collectData.map((item,index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.fName}</td>
                  <td>{item.lName}</td>
                  <td>{item.email}</td>
                  <td>True</td>
                  <td>{moment(item.createdAt).format("MMM Do YY")}</td>
                  <td>{moment(item.createdAt).format("h:mm A")}</td>
                  <td> 
                    <div className='d-flex gap-3'>
        <button className='btn btn-link fs-5 p-0' onClick={()=>editData(index)}><AiOutlineEdit/></button>
        <button className='btn btn-link fs-5 p-0 text-danger' onClick={()=>{deleteData(index)}}><AiFillDelete/></button>
    </div>
    </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table