import React,{useState} from 'react';
import {ChildPerson} from './ChildPerson'
export const Person =(props) =>{

  const [formdata,setFormData]=useState({
    name:'',
    email:"",
    age:""
  })

  const [count,setCount] = useState(0);

const {name,email,age}=formdata;

  const onChange =(e) =>{


      setCount(7+1)
    console.log(e.target.name);
    console.log(e.target.value);
   setFormData({...formdata,[e.target.name]:e.target.value})
  } 
  return(
    
    <div>
    <form>
    <input type="text" name="name" value={name} onChange={(e)=>onChange(e)}/>
    
    <input type="text" name="email" value={formdata.email} onChange={(e)=>onChange(e)}/>
    
    <input type="text" name="age"  value={formdata.age} onChange={(e)=>onChange(e)}/>

    </form>
{name}
<br/>
{email}
<br/>
{age}
<br/>
{count}
   </div>

 
  )
}

