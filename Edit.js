import React,{useEffect, useState,} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

function Edit() {

    const apiUrl = "http://localhost:3030/student"

    const  {id} =useParams()

    const[txt,setTxt] = useState({
        
        name:"",
        age:"",
        city:"",
        marks:""
    }) 

    useEffect(()=>{
        fetchPosts()
    },[])
    
    const fetchPosts = async ()=>{
        const res = await axios.get(`${apiUrl}/${id}`);
        setTxt(res.data)
       };

  function txtHandler(e)
  {
    var name=e.target.name
    var value = e.target.value
    setTxt({...txt,[name]:value})
  }

  const navigate =useNavigate()

  
  
  const  updateHandler = async (e)=>  {
    e.preventDefault()
    await axios.put(`${apiUrl}/${id}`,txt)
    return navigate('/')
    

  }



  return (
    <>
    <div className="container w-25 " style={{padding:'20px'}}>
    <form onSubmit={updateHandler}>
        <input type="text" value={txt.name} name='name' placeholder='enter name' onChange={txtHandler} className='mb-3'></input>
        <br></br>
        <input type="text" value={txt.age} name='age'  placeholder="enter age" onChange={txtHandler}  className='mb-3'></input>
        <br></br>
        <input type="text" value={txt.city} name='city' placeholder='enter city' onChange={txtHandler} className='mb-3'></input>
        <br></br>
        <input type="text" value={txt.marks} name='marks' placeholder='enter marks' onChange={txtHandler} className='mb-3'></input>
        <br></br><br></br>
        <input type='submit' className='btn btn-primary' value="Update Student" ></input>
    </form>
    </div>
    </>
    
  )
}

export default Edit