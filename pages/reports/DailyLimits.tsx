import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";

import React, { useState } from "react";

const DailyLimits = () => {
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
    "NAME",
    "LIMITS",
    "SPEND HOURS",
    "REMAINING HOURS",
    "ACTIVITY",
  ];
  const placeHolder = ["Name"];

  return (
    <>
      <div className="container">
        <NavTool
          title="Daily Limits"
          buttons={naveToolData?.button}
          dropdownSelector={naveToolData?.dropDownSelector}
          date={true}
        />
        <div style={{ height: "10px" }}></div>
        <NavTool
          title="Daily Limits"
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
              <td style={{ width: "290px" }}>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt="dp"
                />
                <div>Random Guy</div>
              </td>
              
              <td style={{ width: "200px" }}>
                <div>03:38:42</div>
              </td>

              <td style={{ width: "200px" }}>
                <div>03:38:42</div>
              </td>
              <td style={{ width: "200px" }}>
                <div>03:38:42</div>
              </td>
              <td style={{ width: "200px" }}>
                <button style={{backgroundColor:'#FFAB2D'}}>47.87%</button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};



export default DailyLimits