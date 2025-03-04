import React, { useState } from "react";
import Styles from "@/styles/dashboard/dashboard.module.css";
import Teams from "@/components/dashboard/Teams";
import ProjectManagement from "@/components/dashboard/ProjectManagement";
import TimeTracking from "@/components/dashboard/TimeTracking";
import Accounting from "@/components/dashboard/Accounting";
import NavTool from "@/components/commonElement/NavTool";


const Dashboard = () => {
  const [tab, setTab] = useState("Teams");
  
  const tabs = [
    { title: "Teams", icon: "/assets/dashboard/team.svg" },
    {title:"Project Management",icon :"/assets/dashboard/projectManage.svg"},
    {title:"Time Tracking",icon :"/assets/dashboard/timeTicking.svg"},
    {title:"Accounting",icon :"/assets/dashboard/accounting.svg"},
  ];
  let renderComponents;

  switch (tab) {
    case "Teams":
      renderComponents = <Teams />;
      break;
    case "Project Management":
      renderComponents = <ProjectManagement />;
      break;
    case "Time Tracking":
      renderComponents = <TimeTracking />;
      break;
    case "Accounting":
      renderComponents = <Accounting />;
      break;
    default:
      renderComponents = <Teams />;
      break;
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const naveToolData = {
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
    <>
      <div className="container">
      <NavTool
                title=''
                date={true}
                // buttons={naveToolData?.button}
                buttons={naveToolData?.dropDownSelector}
                dropdownSelector={naveToolData?.dropDownSelector}
              />
        <div className="row">
          <div className="col-12">
            <div className={Styles.first}>
              {tabs.map((item, i) => (
                <div
                  onClick={() => setTab(item?.title)}
                  key={i}
                  className={Styles.fisrtItem}
                >
                  <img src={item?.icon} alt="" />
                  <span
                    style={{
                      color: `${item.title === tab ? "#5D5FEF" : "#A0AEC0"}`,
                    }}
                  >
                    {item?.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
           
          </div>
        </div>
        <div className="row">{renderComponents}</div>
      </div>
    </>
  );
};

export default Dashboard;
