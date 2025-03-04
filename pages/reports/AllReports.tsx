import NavTool from "@/components/commonElement/NavTool";
import React, { useState } from "react";
import Styles from "@/styles/reports/allReports.module.css";

const AllReports = () => {
  const [check, setCheck] = useState(true);
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
  return (
    <>
      <div className="container">
        <NavTool
          title="All Report"
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
        <div className={Styles.containerBox}>
          <div className="d-flex gap-2 align-items-center mb-2">
          <img src="/assets/reports/clock.svg" alt="" height={18} width={18}/>
          <div>Time Tracking</div>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_,i) => (
              <div key={i} className={Styles.containerSubBox}>
                <div className="d-flex justify-content-between">
                  <h6>Time & Activity</h6>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input ms-3"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={check}
                      onChange={() => setCheck(!check)}
                    />
                  </div>
                </div>
                <p>
                See team members' time worked, activity levels, and amounts earned per project or task
                </p>
                <img
                  className="p-1"
                  width={245}
                  height={180}
                  src="../../assets/dashboard/recentwork.png"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.containerBox}>
          <div className="d-flex gap-2 align-items-center mb-2">
          <img src="/assets/reports/paymentCard.svg" alt="" height={18} width={18}/>
          <div>Payment</div>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_,i) => (
              <div key={i} className={Styles.containerSubBox}>
                <div className="d-flex justify-content-between">
                  <h6>Payment</h6>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input ms-3"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={check}
                      onChange={() => setCheck(!check)}
                    />
                  </div>
                </div>
                <p>
                See team members' time worked, activity levels, and amounts earned per project or task
                </p>
                <img
                  className="p-1"
                  width={245}
                  height={180}
                  src="../../assets/dashboard/recentwork.png"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.containerBox}>
          <div className="d-flex gap-2 align-items-center mb-2">
          <img src="/assets/reports/clock.svg" alt="" height={18} width={18}/>
          <div>Time Off</div>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_,i) => (
              <div key={i} className={Styles.containerSubBox}>
                <div className="d-flex justify-content-between">
                  <h6>Daily Limits</h6>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input ms-3"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={check}
                      onChange={() => setCheck(!check)}
                    />
                  </div>
                </div>
                <p>
                See team members' time worked, activity levels, and amounts earned per project or task
                </p>
                <img
                  className="p-1"
                  width={245}
                  height={180}
                  src="../../assets/dashboard/recentwork.png"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.containerBox}>
          <div className="d-flex gap-2 align-items-center mb-2">
          <img src="/assets/reports/clock.svg" alt="" height={18} width={18}/>
          <div>Invoicing</div>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_,i) => (
              <div key={i} className={Styles.containerSubBox}>
                <div className="d-flex justify-content-between">
                  <h6>Project Budgets</h6>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input ms-3"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={check}
                      onChange={() => setCheck(!check)}
                    />
                  </div>
                </div>
                <p>
                See team members' time worked, activity levels, and amounts earned per project or task
                </p>
                <img
                  className="p-1"
                  width={245}
                  height={180}
                  src="../../assets/dashboard/recentwork.png"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReports;
