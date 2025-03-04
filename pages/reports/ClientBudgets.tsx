import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import React, { useState } from "react";

const ClientBudgets = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {},
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
  const naveDataSec = {
    dropDownSelector: [
      {
        title: "Select Source",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
      {
        title: "Select Activi Level",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
      {
        title: "Select Log Type",
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
  const tableTitle = [
    "CLIENT NAME",
    "EMPLOYEE",
    "SPEND",
    "REMAINING",
    "BUDGET",
  ];
  const placeHolder = ["Name"];

  return (
    <>
      <div className="container">
        <NavTool
          title="Client Budgets"
          buttons={naveToolData?.button}
          dropdownSelector={naveToolData?.dropDownSelector}
          date={true}
        />
        <div style={{ height: "10px" }}></div>
        <NavTool
          title="Client Budgets"
          subTitle="Monday, January 2, 2023 - Sunday, January 8, 2023"
          dropdownSelector={naveDataSec?.dropDownSelector}
          clearButton={true}
        />
         
        <Table tableName={"01/02/2023"} tableTitle={tableTitle}>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {Array.from({ length: 10 })?.map((item: any, i: number) => (
            <tr key={i}>
              <td style={{ width: "250px" }}>
              <div
                  className="d-flex justify-content-center gap-1 align-items-center px-1"
                  style={{
                    maxWidth: "fit-content",
                    height: "35px",
                    backgroundColor: "#3BCBBE80",
                    borderRadius: "50px",
                  }}
                >
                  <h5>M</h5>
                  <span>CLient M</span>
                </div>
              </td>
              <td style={{ width: "250px" }}>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt="dp"
                />
                <div>Random Guy</div>
              </td>
              
              <td style={{ width: "200px" }}>
                <div>-</div>
              </td>

              <td style={{ width: "200px" }}>
                <div>-</div>
              </td>
              <td style={{ width: "200px" }}>
                <div>-</div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};



export default ClientBudgets