import NavTool from '@/components/commonElement/NavTool'
import Table from '@/components/commonElement/Table'
import TableActionPopUp from '@/components/commonElement/TableActionPopUp';
import React, { useState } from 'react'

const Employee = () => {
  const [showActions, setShowActions] = useState(-1);

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
    "ACTION"
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
      status:"Inactive",
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
  const [selectedOption, setSelectedOption] = React.useState(null);
  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {},
      },
    ],
    dropDownSelector: [
      {
        title: "All Employees",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
    ],
  };
  return (
    <>
      <div className="container">
      <NavTool title="Epmloyee" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>


      <Table tableName={'Epmloyee'} tableTitle={tableTitle}>
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
                      <img
                        src={item?.img}
                        alt={item?.name}
                      />
                      <div>{item?.name}</div>
                    </td>
                    <td>{item?.phoneNumber}</td>
                    <td style={{color:'#2684FF'}}>{item?.email}</td>
                    <td style={{fontSize:'12px'}}>{item?.location}</td>
                    <td>
                      <button style={{backgroundColor:`${item?.status==='Inactive'?'#FFAB2D':''}`}}>{item?.status}</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                    <img
                      onClick={() => setShowActions(i)}
                      src="/assets/3dotV.svg"
                      style={{cursor:'pointer'}}

                      alt={item?.name}
                    />
                      <TableActionPopUp show={showActions === i} setShow={setShowActions}>
                        <div style={{cursor:'pointer'}} className="p-1">
                          <img
                            title="edit"
                            src="/assets/editIcon.svg"
                            alt=""
                          />
                          Edit
                        </div>
                        <div style={{cursor:'pointer'}} className="p-1">
                          <img
                            title="remove"
                            src="/assets/deleteIcon.svg"
                            alt=""
                          />
                          delete
                        </div>
                      </TableActionPopUp>
                  </td>
                  </tr>
                ))}
            </Table>
      </div>
    </>
  )
}

export default Employee