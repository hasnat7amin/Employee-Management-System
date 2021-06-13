import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function ProfileItem({employee}) {
  const deleteProfile = async (ID) =>{
    try {
      //const id = ID['_id']
      console.log(ID)
      const res = await axios.delete(`/employee/delete/${ID}`)
      console.log(res.data)
      alert("Employee is Deleted")
      window.location = "http://localhost:3000/profiles";
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <tr className="bg-light">
        <td>{employee.name}</td>
        <td>{employee.age}</td>
        <td>{employee.cnic}</td>
        <td>{employee.email}</td>
        <td>{employee.salary}</td>
        <td>{employee.designation}</td>
        <td className="text-center">
          <Link to='/editemployee'>
          <button className="btn btn-success px-4" onClick={()=>{
            localStorage.setItem('employee', JSON.stringify(employee))
          }}>Edit</button>
          </Link>
        </td>
        <td className="text-center">
          <button className="btn btn-danger px-4" onClick={()=>{deleteProfile(employee['_id'])}}>Delete</button>
        </td>
      </tr>
    
  )
}

export default ProfileItem
