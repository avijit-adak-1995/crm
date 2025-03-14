import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import Card from "@/components/dashboard/Card";
import ColumnChart from "@/components/dashboard/ColumnChart";
import Styles from "@/styles/reports/timeAndActivity.module.css";
import React, { useState } from "react";

const TimeActivity = () => {
  const dataa = [450, 100, 50, 300, 323, 200, 150, 488, 350];
  const categories = ["", "", "", "", "", ""];
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
        title: "Activity Level",
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
  const teamData = [
    {
      title: "Member Worked",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Project Work",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Activity",
      worked: "60%",
      progress: "60%",
    },
    {
      title: "Total Working Hour",
      worked: "00:00:00",
      progress: "100%",
    },
  ];

  const tableTitle = ["NAME", "CLIENT", "PROJECT", "TODO", "TIME", "ACTIVITY"];
  const placeHolder = ["Name", "Client", "Date"];

  return (
    <>
      <div className="container">
        <NavTool
          title="Time And Activity"
          buttons={naveToolData?.button}
          dropdownSelector={naveToolData?.dropDownSelector}
          date={true}
        />
        <div style={{ height: "10px" }}></div>
        <NavTool
          title="Time and Activity Report"
          subTitle="Monday, January 2, 2023 - Sunday, January 8, 2023"
          dropdownSelector={naveDataSec?.dropDownSelector}
          clearButton={true}
        />
        <div className="d-flex flex-wrap gap-3 mx-4 my-4">
          {teamData.map((item, i) => (
            <Card
              key={i}
              title={item?.title}
              subTitle={item?.worked}
              progress={item?.progress}
              progressBar={true}
            />
          ))}
        </div>
        <div className={`row mx-4 ${Styles.boxContainer}`}>
          <div className={Styles.firstBox}>
            <div className="mt-3 mb-1">Active Users</div>

            <div className={Styles.graph}>
              <ColumnChart
                data={dataa}
                categories={categories}
                width={500}
                height={200}
                barWidth={"5px"}
              />
            </div>
          </div>
          <div className={Styles.firstBox}>
            <div className="mt-3 mb-2">Active Time</div>
            <div className={Styles.graph}></div>
          </div>
        </div>
        <Table tableName={"01/02/2023"} tableTitle={tableTitle}>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {Array.from({ length: 6 })?.map((item: any, i: number) => (
            <tr key={i}>
              <td>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt="dp"
                />
                <div>Random Guy</div>
              </td>
              <td>
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
              <td>29/12/2022</td>
              <td className="pe-4" style={{ width: "180px" }}>
                Fix/ Desktop App | Timer - Create projects and select them RIGHT
                tableFix/ Desktop App | Timer - Create projects and select them
                RIGHT table
              </td>
              <td style={{ width: "180px" }}>
                <div>03:38:42</div>
              </td>
              <td>
                <button style={{ backgroundColor: "#FFAB2D" }}>47.87%</button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};

export default TimeActivity;
