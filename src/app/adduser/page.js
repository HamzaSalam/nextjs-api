"use client"
import React, { useState } from 'react'

const Page = () => {
    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [email,setEmail] = useState();
    const adduser = async ()=>{
        let respone = await fetch("http://localhost:3000/api/user",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        respone = await respone.json()
        console.log(respone)
        if(respone.success){
            alert("new user created")
        }else{
            alert("some error in data")
        }
    }
  return (
    <div >
    <h1>Add use page</h1>
      <input type='text' value={name} placeholder='Enter name' onChange={(e)=>(setName(e.target.value))}></input>
      <input type='text' value={age} placeholder='Enter age' onChange={(e)=>(setAge(e.target.value))}></input>
      <input type='text' value={email} placeholder='Enter email' onChange={(e)=>(setEmail(e.target.value))}></input>
      <button onClick={adduser}>Add user</button>
    </div>
  )
}

export default Page
