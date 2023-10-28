import React, { useState } from 'react'
import './dropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Dropdown({options}) {
  // for selecting option
const [selected,setSelected]=useState(null);
//for toggling dropdown

const [isDropdownOpen,setDropdownOpen]=useState(false);
//for setting icon up and down based on condtion
const [icon,setIcon]=useState(true);

const hanndleDropdownClick=()=>{
  setDropdownOpen(!isDropdownOpen);
 
}
const handleOptionClick=(item)=>{
  setSelected(item);
  setDropdownOpen(false)
}

  return (
    <div className='container'>
      <h1 className='headingtext'>should you use dropdown</h1>
<div className="dropdowncontainer">
<p className="select" onMouseEnter={()=>setIcon(false)}>select
</p>
<p className="icon" onClick={hanndleDropdownClick}
onMouseEnter={()=>setDropdownOpen(true)}




>{icon?<i class="bi bi-arrow-up-circle-fill"></i>:<i class="bi bi-arrow-down-circle-fill"></i>}</p>

</div>
{isDropdownOpen&&(
  <ul className='list'>
{options.map((option,index)=>(
  <li key={index}
  onClick={()=>handleOptionClick(option)}
  className='listitem'>{option}</li>
))}

  </ul>
)}

{selected&&(
  <div  
  onMouseEnter={()=>setIcon(true)}
  ><p className='selected'>selected:{selected}</p>

  </div>
)}


    </div>
  )
}
