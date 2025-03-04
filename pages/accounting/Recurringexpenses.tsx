import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import React, { useState } from "react";
import DashboardStyles from "@/styles/tasks/tasks.module.css";
import Selector from "@/components/commonElement/Selector";

const Recurringexpenses = () => {
  const [showActions, setShowActions] = useState(-1);
  const [showAdd, setShowAdd] = useState(false);

  const tableTitle = ["CATEGORY", "DATE", "EXPENSE", "Action"];

  const [selectedOption, setSelectedOption] = useState(null);
  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {setShowAdd(true)},
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
    <div className="container">
      {!showAdd && (
        <>
          <NavTool
            title="Recurring Expense"
            date={true}
            buttons={naveToolData?.button}
            dropdownSelector={naveToolData?.dropDownSelector}
          />
          <Table
            tableName={"Recurring Expense"}
            tableTitle={tableTitle}
            maxWidth={"800px"}
          >
            {Array.from({ length: 10 })?.map((item: any, i: number) => (
              <tr style={{ borderBottom: "1px solid #E2E8F0" }} key={i}>
                <td>
                  <div>Software</div>
                </td>
                <td>32/12/2022</td>
                <td>INR 10,000</td>

                <td style={{ textAlign: "center", width: "15px" }}>
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
        </>
      )}
      {showAdd && (
        <div className={DashboardStyles.boxContainer}>
          <div className="d-flex justify-content-between">
            <div>
              <div>Invoice Number</div>
              <input placeholder="Invoice Number" />
            </div>
            <div>
              <div>Contact</div>
              <div style={{ marginTop: "2px" }}>
                <Selector
                  placeholder={"Client M"}
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
                  borderRadius={"8px"}
                  placeholderColor={"#A0AEC0"}
                  fontSize={"13px"}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="mt-0">Invoice Date</div>
              <input placeholder="Dec 29, 2022" />
            </div>
            <div>
              <div className="mt-0">Due Date</div>
              <input placeholder="Dec 29, 2022" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="mt-0">Total Amount</div>
              <input placeholder="Total Amount" />
            </div>
            <div>
              <div className="mt-0">Payment Method</div>
              <div style={{ marginTop: "2px" }}>
                <Selector
                  placeholder={"Bank Transfer"}
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
                  borderRadius={"8px"}
                  placeholderColor={"#A0AEC0"}
                  fontSize={"13px"}
                />
              </div>
            </div>
          </div>
          <div>Note</div>
          <textarea placeholder="Note" />
          <div className="d-flex justify-content-between">
            <div className="mt-0">
              <div className="mt-0">Project</div>
              <input placeholder="Project" />
            </div>
            <div className="mt-0">
              <div className="mt-0">Recorded By</div>
              <div style={{ marginTop: "2px" }}>
                <Selector
                  placeholder={"Client"}
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
                  borderRadius={"8px"}
                  placeholderColor={"#A0AEC0"}
                  fontSize={"13px"}
                />
              </div>
            </div>
          </div>
          <div>Tags</div>
          <div style={{ marginTop: "2px" }}>
            <Selector
              placeholder={"Important"}
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
              borderRadius={"8px"}
              placeholderColor={"#A0AEC0"}
              fontSize={"13px"}
            />
          </div>
          <div>Status</div>
          <div style={{ marginTop: "2px" }}>
            <Selector
              placeholder={"Accepted"}
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
              borderRadius={"8px"}
              placeholderColor={"#A0AEC0"}
              fontSize={"13px"}
            />
          </div>
          <button onClick={() => setShowAdd(false)}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Recurringexpenses;
