import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link}from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function NodeApi() { 

  var apiUrl="http://localhost:3030"

       const [post,setPost]=useState([])

       const fetchPosts = async ()=>{
        const res = await axios.get(`${apiUrl}/list`);
        setPost(res.data)
       };

    useEffect(()=>{
    
        fetchPosts();
        
        },[])         

  

    const handleDelete = async(stud)=>{
      setPost(post.filter((p)=>p._id !== stud._id))
      await axios.delete(`${apiUrl}/delete/${stud._id}`)
    }

    const navigate = useNavigate();   

    const handleUpdate = async(stud)=>{
     navigate(`/edit/${stud._id}`)
    }


  return (
    <>   
   <h2>Node Api calling</h2>
   <table className='table table-bordered p-3' style={{width:'300px'}}> 
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Marks</th>
      <th colspan={2}>Action</th>
    </tr>
    {
      post.map((e)=>{
        return(
          <>
          <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.marks}</td>
            <td><button onClick={() => handleUpdate(e)}
                    className="btn btn-primary">Edit</button></td>
            <td><button
                    onClick={() => handleDelete(e)}
                    className="btn btn-danger"
                  >Delete</button></td>
          </tr>
          </>
        )
      })
    }
   </table>
   <a><Link to='/add'>Add New Student</Link></a>
    
  

    </>
  )
}

export default NodeApi