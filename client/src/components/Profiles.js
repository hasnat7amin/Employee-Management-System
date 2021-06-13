import React,{useEffect, useState} from 'react'
import ProfileItems from './ProfileItem'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SearchBar from "material-ui-search-bar";

function Profiles() {
  const [search, setSearch] = useState('')
  const [searchEmp, setSearchEmp] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [data, setData] = useState([])
  const [empdata, setEmpData] = useState([])
  const getEmployee = async () =>{
    try {
      
      const res = await axios.get(`/employee/all/${token}`)
      setData(res.data)

    } catch (err) {
      console.log(err)
    }
    
  }

  const getEmployeeSearch = async (Search) =>{
    
    try {
      console.log(search,typeof(searchEmp))
      console.log({name:search, token:token})
      const res = await axios.get(`/employee/search/${search}/${token}`)
      setEmpData(res.data)

    } catch (err) {
      console.log(err)
    }
    

  }

  useEffect(()=>{
    getEmployee()
  },[])
  return (
    <div>
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Employees Profiles</h1>
              <p className="lead text-center">List of employee details</p>
              <div className='container m-4' >
                <div class="row">
                  <div class="col-md-6">
                    <Link to='/addemployee'>
                      <button className='btn btn-dark'>Add New Employee</button>
                    </Link>
                    </div>
                    <div class="col-md-6 mx-2">
                    <SearchBar
                        value={search}
                        placeholder="Search An Employee With Name"
                        onChange={(vlue) => setSearch(vlue)}
                        onRequestSearch={() => (getEmployeeSearch(search))}
                      />
                  </div>
                </div>
               
              </div>
              <div class='container'></div>
              <table  id="dtHorizontalExample"  class="table table-striped table-bordered table-sm table-responsive" cellspacing="0" width="100%">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">CNIC</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Designation</th>
                    <th scope="col" className="text-center">Edit Employee</th>
                    <th scope="col" className="text-center">Delete Employee</th>
                  </tr>
                </thead>
                <tbody>{
                  !search? (
                  data.map((employee)=>{
                    return(
                      
                      <ProfileItems employee={employee}/>
                    )
                  })):(
                    empdata.map((employee)=>{
                      return(
                        
                        <ProfileItems employee={employee}/>
                      )
                    }
                  ))}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
