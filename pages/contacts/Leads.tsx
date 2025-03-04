import Modal from "@/components/commonElement/Modal";
import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import React, { useState } from "react";
import Styles from "@/styles/contact/leads.module.css";
import Selector from "@/components/commonElement/Selector";

const Leads = () => {
  const [isClicked, setIsClicked] = useState(false);

  const placeHolder = [
    "Name",
    "Phone Number",
    "Email",
    "Location",
    "Project",
    "Status",
  ];
  const tableTitle = [
    "NAME",
    "PHONE NUMBER",
    "EMAIL",
    "LOCATION",
    "PROJECT",
    "STATUS",
  ];
  const data = [
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
    {
      img: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      phoneNumber: "9876543210",
      email: "spare@gmail.com",
      location: "Durgapur, India",
      status: "Active",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const naveToolData = {
    button : [
      {
        title : 'Add',
        onClick : ()=>{setIsClicked(true)}
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
      <Modal show={isClicked} setShow={setIsClicked}>
        <div className={Styles.popup}>
          <h5>Add Candidates</h5>
          <span className="d-flex gap-4 align-items-start">
            <img
              style={{ backgroundColor: "#d4d4d4", border: "none" }}
              width={85}
              height={65}
            />
            <span>
              <span style={{}}>Image Url (optional)</span>
              <input placeholder="image" />
            </span>
          </span>
          <div>Full name</div>
          <input placeholder="Full name" />
          <span className="d-flex justify-content-between gap-4">
            <span>
              <div>Phone</div>
              <input placeholder="Phone" />
            </span>
            <span>
              <div>Email</div>
              <input placeholder="Email" />
            </span>
          </span>
          <div>Fiscal Information</div>
          <input placeholder="Fiscal Information" />
          <span className="d-flex justify-content-between gap-4 mt-1">
            <span>
              <div>contact type</div>
              <div style={{marginTop:'2px'}}>
              <Selector
                  placeholder={'Team'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"100%"}
                  height="30px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
            </span>
            <span>
              <div>project</div>
              <input placeholder="Project" />
            </span>
          </span>
          <div>Tags</div>
          <input placeholder="Tags" />
          <div>Address</div>
          <input placeholder="Address" />
          <span className="d-flex justify-content-between gap-4 mt-1">
            <span>
              <div>City</div>
              <input placeholder="City" />
            </span>
            <span>
              <div>Pincode</div>
              <input placeholder="Pincode" />
            </span>
          </span>
          <div>Address Line 1</div>
          <input placeholder="Address Line 2" />
          <div>Address Line 2</div>
          <input placeholder="Address Line 2" />
          <div className={Styles.popupButton}>
            <button onClick={() => setIsClicked(false)}>Save</button>
          </div>
        </div>
      </Modal>
      <div className="container">
      <NavTool title="Leads" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>
        <Table tableName={"Leads"} tableTitle={tableTitle}>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {data?.map((item: any, i: number) => (
            <tr key={i}>
              <td>
                <img src={item?.img} alt={item?.name} />
                <div>{item?.name}</div>
              </td>
              <td>{item?.phoneNumber}</td>
              <td style={{ color: "#2684FF" }}>{item?.email}</td>
              <td style={{ fontSize: "12px" }}>{item?.location}</td>
              <td>Website</td>
              <td>
                <button
                  style={{
                    backgroundColor: `${
                      item?.status === "Inactive" ? "#FFAB2D" : ""
                    }`,
                  }}
                >
                  {item?.status}
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Leads;
