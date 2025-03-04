import NavTool from '@/components/commonElement/NavTool'
import Table from '@/components/commonElement/Table'
import React, { useState } from 'react'

const Clients = () => {

  const placeHolder = [
    "Name",
    "Phone Number",
    "Email",
    "Location",
    "Status",
  ];
  const tableTitle = [
    "NAME",
    "PHONE NUMBER",
    "EMAIL",
    "LOCATION",
    "STATUS",
  ];
  const data = [
    {
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },
    {
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },{
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },{
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },{
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },{
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },{
      img:'https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg',
      name:"Random Guy",
      phoneNumber:"9876543210",
      email:"spare@gmail.com",
      location:"Durgapur, India",
      status:"Active",
    },
  ]
  const [selectedOption, setSelectedOption] = useState(null);
  const naveToolData = {
    button : [
      {
        title : 'Add',
        onClick : ()=>{}
      }
    ],
    dropDownSelector : [
      {
        title:'All Employees',
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
    ]
  }
  return (
    <>
      <div className="container">
      <NavTool title="Clients" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>
      <Table tableName={'Clients'} tableTitle={tableTitle}>
                <tr>
                  {placeHolder.map((item: any, i: number) => (
                    <td key={i}>
                      <input placeholder={item} name={tableTitle[i]} />
                    </td>
                  ))}
                </tr>
                {data?.map((item: any, i: number) => (
                  <tr key={i} >
                    <td>
                      <div className='d-flex justify-content-center gap-1 align-items-center px-1' style={{maxWidth:'fit-content',height:'35px',backgroundColor:'#3BCBBE80',borderRadius:'50px'}}>
                      <h5>M</h5>
                      <span>CLient M</span>
                      </div>
                    </td>
                    <td>{item?.phoneNumber}</td>
                    <td style={{color:'#2684FF'}}>{item?.email}</td>
                    <td style={{fontSize:'12px'}}>{item?.location}</td>
                    <td>
                      <button style={{backgroundColor:`${item?.status==='Inactive'?'#FFAB2D':''}`}}>{item?.status}</button>
                    </td>
                  </tr>
                ))}
            </Table>
      </div>
    </>
  )
}

export default Clients;