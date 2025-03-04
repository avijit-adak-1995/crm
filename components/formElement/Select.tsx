import React from 'react'

const Select = ({label,children,setValue ,value}:any) => {
    // "slectData"  should be array  
  return (
    <>
      <div>
        <label >{label}</label>
        <select onChange={(e)=>setValue(e.target.value)} value={value} >
         {children}
        </select>
      </div>
    </>
  )
}

export default Select