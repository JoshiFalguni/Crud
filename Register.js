import React,{useState,} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    const[txt,setTxt] = useState({
        
        name:"",
        age:"",
        city:"",
        marks:""
    }) 

  function txtHandler(e)
  {
    var name=e.target.name
    var value = e.target.value
    setTxt({...txt,[name]:value})
  }

  const navigate =useNavigate()

  function submitHandler(e)
  {
    e.preventDefault()
    console.log(txt)
    axios.post("http://localhost:3030/create",txt)
    navigate("/")
    
  }   

  



  return (
    <>
    <div className="container w-25 " style={{padding:'20px'}}>
    <form onSubmit={submitHandler}>
        <input type="text" name='name' placeholder='enter name' onChange={txtHandler} className='mb-3'></input>
        <br></br>
        <input type="text" name='age'  placeholder="enter age" onChange={txtHandler}  className='mb-3'></input>
        <br></br>
        <input type="text" name='city' placeholder='enter city' onChange={txtHandler} className='mb-3'></input>
        <br></br>
        <input type="text" name='marks' placeholder='enter marks' onChange={txtHandler} className='mb-3'></input>
        <br></br><br></br>
        <input type='submit' className='btn btn-primary' value="Add New Student"></input>
    </form>
    </div>
    </>
    
  )
}

export default Register