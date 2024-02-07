
import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState()
  const handleSubmit= (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{email,password})
    .then(result=>console.log(result))
    .catch(err =>console.log(err))
  }


  return (
    <>
      <div class="ho" >
       <form onSubmit={handleSubmit}>
       <h3 class='og'>sighn</h3>
       <div className='emi'>
         <label>email</label>
         <input type="email" placeholder="Enteremail"  onChange={(e)=>setEmail(e.target.value)}              />

       </div>
       <div className='pas'>
         <label>password</label>
         <input type="password" placeholder="Enter pasword" onChange={(e)=>setPassword(e.target.value)}   />

       </div>
       <div class="btn1"> < button>login</button>
       </div>

       
       <p3>you are agree to term and policies</p3> 
       <div class="btn2"><button >create account</button></div>
       
 </form>




      </div>

    </>
  )
}

export default App
