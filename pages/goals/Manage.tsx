import React, { useState } from "react";
import Styles from "@/styles/goals/goal.module.css";
import NavTool from "@/components/commonElement/NavTool";
import ProgressBar from "@/components/dashboard/ProgressBar";

const Manage = () => {
  const data = [
    {
      content: "Improve product performance",
      percentage: "60",
    },
    {
      content: "Redesign and launch our new landing page",
      percentage: "90",
    },
    {
      content: "Redesign and launch our new landing page",
      percentage: "60",
    },
    {
      content: "Redesign and launch our new landing page",
      percentage: "20",
    },
    {
      content: "Redesign and launch our new landing page",
      percentage: "40",
    },
    {
      content: "Redesign and launch our new landing page",
      percentage: "10",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const naveToolData = {
    button : [
      {
        title : 'Add',
        onClick : ()=>{}
      }
    ],
    dropDownSelector : [
      {
        title:'All Project',
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
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
    <div className="container">
      <NavTool title="Manage" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>
      <div className={Styles.boxContainer}>
        {data?.map((item, i) => (
          <span key={i}>
            <span style={{width:'320px'}}>{item?.content}</span>
            <span style={{flexWrap:'nowrap'}}>
              {item?.percentage}%
              <ProgressBar
                height={"8px"}
                backgroundColor={"#F8F9FA"}
                progressData={`${item?.percentage}%`}
                progressColor={(item?.percentage<=20)?'#AF0000':(item?.percentage<=60)?'#FFAB2D':'#48BB78'}
                width={"200px"}
              />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Manage;
