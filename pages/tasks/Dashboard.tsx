import Table from "@/components/commonElement/Table";
import React, { useState } from "react";
import Styles from "@/styles/tasks/tasks.module.css";
import NavTool from "@/components/commonElement/NavTool";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import Modal from "@/components/commonElement/Modal";
import Selector from "@/components/commonElement/Selector";

const Dashboard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showActions, setShowActions] = useState(-1);
  const placeHolder = [
    "9090874129839",
    "Title",
    "Project",
    "Created At",
    "Created By",
    "Due Date",
    "Employee",
    "Status",
  ];
  const tableTitle = [
    "ID",
    "TITLE",
    "PROJECT",
    "CREATED AT",
    "CREATED BY",
    "DUE DATE",
    "EMPLOYEE",
    "STATUS",
    "ACTION",
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {setIsClicked(true)},
      },
    ],
    dropDownSelector: [
      {
        title: "All Project",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
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
    <div className={`${Styles.container} container`}>
          <Modal show={isClicked} setShow={setIsClicked}>
            <div style={{boxShadow:'none', padding:'1px' ,paddingRight:"0",margin:'0', marginLeft:'0'}} className={Styles.boxContainer}>
            <div className="d-flex gap-2 justify-content-between">
            <div>
              <div>Id</div>
              <input placeholder="Id" />
            </div>
            <div>
              <div>Project</div>
              <div style={{marginTop:'2px'}}>
              <Selector
                  placeholder={'Project'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"200px"}
                  height="28px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
            </div>
          </div>
          <div>Date</div>
          <input placeholder="Dec 29,2022" />
          <div>Team</div>
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
                  width={"200px"}
                  height="28px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'12px'}
                />
              </div>
          <div>Terms</div>
          <textarea placeholder="Term" />
          <div>Tags</div>
          <div style={{marginTop:'2px'}}>
              <Selector
                  placeholder={'Tags'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"200px"}
                  height="28px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
          <div>Status</div>
          <div style={{marginTop:'2px'}}>
              <Selector
                  placeholder={'Status'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"200px"}
                  height="28px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
          <button onClick={() => setIsClicked(false)}>Submit</button>
            </div>
          </Modal>
          <NavTool
            title="Dashboard"
            buttons={naveToolData?.button}
            date={true}
            dropdownSelector={naveToolData?.dropDownSelector}
          />
          <Table tableName={`Task's`} tableTitle={tableTitle}>
            <tr>
              {placeHolder.map((item: any, i: number) => (
                <td key={i}>
                  <input
                    style={{ width: "130px" }}
                    placeholder={item}
                    name={tableTitle[i]}
                  />
                </td>
              ))}
            </tr>
            {Array.from({ length: 9 }).map((item: any, i: number) => (
              <tr key={i}>
                <td>9090874129839</td>
                <td>Dash</td>
                <td>Website</td>
                <td>31/12/2022</td>
                <td>
                  <img
                    src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                    alt={item?.name}
                  />
                  <div>Random Guy</div>
                </td>
                <td>9/12/2022</td>
                <td>
                  <img
                    src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                    alt={item?.name}
                  />
                  <div>Random Guy</div>
                </td>
                <td>
                  <button>Accepted</button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowActions(i)}
                    src="/assets/3dotV.svg"
                    alt={item?.name}
                  />
                  <TableActionPopUp
                    show={showActions === i}
                    setShow={setShowActions}
                  >
                    <div style={{ cursor: "pointer" }} className="p-1">
                      <img title="edit" src="/assets/editIcon.svg" alt="" />
                      Edit
                    </div>
                    <div style={{ cursor: "pointer" }} className="p-1">
                      <img title="remove" src="/assets/deleteIcon.svg" alt="" />
                      delete
                    </div>
                  </TableActionPopUp>
                </td>
              </tr>
            ))}
          </Table>
    </div>
  );
};

export default Dashboard;
