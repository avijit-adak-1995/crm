import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import ColumnChart from "@/components/dashboard/ColumnChart";
import Styles from "@/styles/reports/timeAndActivity.module.css";
import React, { useState } from "react";

const Payments = () => {
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

  const tableTitle = ["CLIENT NAME", "PROJECT", "DATE", "CURRENCY", "AMOUNT"];
  const placeHolder = ["Name"];

  return (
    <>
      <div className="container">
        <NavTool
          title="Payment"
          buttons={naveToolData?.button}
          dropdownSelector={naveToolData?.dropDownSelector}
          date={true}
        />
        <div style={{ height: "10px" }}></div>
        <NavTool
          title="Payment"
          subTitle="Monday, January 2, 2023 - Sunday, January 8, 2023"
          dropdownSelector={naveDataSec?.dropDownSelector}
          clearButton={true}
        />
        <div className={`row mt-4 mx-4 ${Styles.boxContainer}`}>
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

              <td style={{ width: "200px", paddingRight: "20px" }}>
                <div>Website</div>
              </td>

              <td style={{ width: "250px" }}>
                <div>01/02/2023</div>
              </td>
              <td style={{ width: "250px" }}>
                <div>INR</div>
              </td>
              <td style={{ width: "120px" }}>
                <div>-</div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Payments;
