import Table from "@/components/commonElement/Table";
import React, { useState } from "react";
import Styles from "@/styles/tasks/tasks.module.css";
import Modal from "@/components/commonElement/Modal";
import NavTool from "@/components/commonElement/NavTool";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";

const TeamTasks = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showActions, setShowActions] = useState(-1);

  const tableTitle = [
    "ID",
    "TITLE",
    "PROJECT",
    "CREATED AT",
    "CREATED BY",
    "DUE DATE",
    "TEAM",
    "STATUS",
    "ACTION",
  ];
  const placeHolder = [
    "9090874129839",
    "Title",
    "Project",
    "Created At",
    "Created By",
    "Due Date",
    "Team",
    "Status",
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
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
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
    <>
      <Modal show={isClicked} setShow={setIsClicked}>
        <div className={Styles.popup}>
          <h5>Add Candidates</h5>
          <div>Task no.</div>
          <input placeholder="Task no." />
          <span className="d-flex justify-content-between gap-4">
            <span>
              <div>Project</div>
              <input placeholder="Project" />
            </span>
            <span>
              <div>Status</div>
              <input placeholder="Status" />
            </span>
          </span>
          <div>Add Employee</div>
          <input placeholder="Add Employee" />
          <div>Task title</div>
          <input placeholder="Add Task" />
          <span className="d-flex justify-content-between gap-4">
            <span>
              <div>Priority</div>
              <input placeholder="Task Priority" />
            </span>
            <span>
              <div>Task Size</div>
              <input placeholder="Task Size" />
            </span>
          </span>
          <div>Due Date</div>
          <input placeholder="Due Date" />
          <div>Description</div>
          <textarea placeholder="Description" />
          <div className={Styles.popupButton}>
            <button
              style={{
                backgroundColor: "#fff",
                color: "red",
                borderColor: "red",
              }}
              onClick={() => setIsClicked(false)}
            >
              Cancel
            </button>
            <button onClick={() => setIsClicked(false)}>Save</button>
          </div>
        </div>
      </Modal>
      <div className={`${Styles.container} container`}>
        <NavTool
          title="Team Task"
          date={true}
          buttons={naveToolData?.button}
          dropdownSelector={naveToolData?.dropDownSelector}
        />
        <div className="d-flex px-4 gap-4">
          <div className={Styles.browse}>
            <img src="/assets/tasks/browse.svg" alt="" />
            <span>Browse</span>
          </div>
          <div className={Styles.browse}>
            <img src="/assets/tasks/search.svg" alt="" />
            <span style={{ color: "#A0AEC0" }}>Search</span>
          </div>
        </div>
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
                <div style={{ marginLeft: "15px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      style={{
                        border: "2px solid #fff",
                        marginLeft: "-15px",
                      }}
                      key={i}
                      src="https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg"
                      alt={"img"}
                    />
                  ))}
                </div>
              </td>
              <td>
                <button>Accepted</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <img
                  onClick={() => setShowActions(i)}
                  src="/assets/3dotV.svg"
                  style={{ cursor: "pointer" }}
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
    </>
  );
};

export default TeamTasks;
