import React from 'react'

const Input = ({label,type,value,setValue,placeholder}:any) => {
  return (
    <>
     <div className=''>
       <label>{label}</label>
       <input type={type} 
       placeholder={placeholder}
       value={value}
       onChange={(e)=>setValue(e.target.value)}

       />
     </div>
    </>
  )
}

export default Input