import React, { useState } from 'react'
import Input from '../formElement/Input'
import Select from '../formElement/Select';
import { useGetAllDepartmentsQuery, useGetAllTeamsQuery } from '@/store/services/organizationsApi'

const AddOrganisation = () => {
    const [orgName, setOrgName]=useState('')
    const [team, setTeam]=useState('')
    console.log({orgName});
    const { data: GetTeam }: any = useGetAllTeamsQuery('')
    console.log({GetTeam:GetTeam?.data});
    
  return (
    <div className='addOrg'>
        <h3>Add Organisation</h3>
        <Input
          type='text'
          label='Organisation Name'
          placeHolder='Organisation Name'
          value={orgName}
          setValue={setOrgName}
          />
          <Select
          setValue={setTeam}
          value={team}
          label='Team'
          >
           {GetTeam?.data?.map(({item,index}:any)=>{
            return(
                <option key={index} >{item?.teamName}</option>
            )
           })}
          </Select>
    </div>
  )
}

export default AddOrganisation