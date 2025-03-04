import React from "react";
import Styles from "@/styles/dashboard/projectManagement.module.css";
import ColumnChart from "./ColumnChart";
import ProgressBar from "./ProgressBar";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProjectManagement = () => {
  const dataa = [450, 100, 50, 300, 323, 200, 150, 488, 350];
  const categories = ["", "", "", "", "", ""];
  const usersData = [
    {
      icon :'/assets/dashboard/team.svg',
      title :'Users',
      data:'32,984',
      percentage:'60%'
    },
    {
      icon :'/assets/dashboard/team.svg',
      title :'Clicks',
      data:'2,2m',
      percentage:'75%'
    },{
      icon :'/assets/dashboard/team.svg',
      title :'Sales',
      data:'$2,400',
      percentage:'50%'
    },{
      icon :'/assets/dashboard/team.svg',
      title :'Items',
      data:'320',
      percentage:'85%'
    }
  ]

  const data = [
    { month: "Jan", sales2020: 30, sales2021: 50 },
    { month: "Feb", sales2020: 20, sales2021: 40 },
    { month: "Mar", sales2020: 50, sales2021: 60 },
    { month: "Apr", sales2020: 40, sales2021: 55 },
    { month: "May", sales2020: 35, sales2021: 50 },
    { month: "Jun", sales2020: 20, sales2021: 45 },
    { month: "Jul", sales2020: 25, sales2021: 50 },
    { month: "Aug", sales2020: 30, sales2021: 55 },
    { month: "Sep", sales2020: 40, sales2021: 60 },
    { month: "Oct", sales2020: 35, sales2021: 50 },
    { month: "Nov", sales2020: 25, sales2021: 45 },
    { month: "Dec", sales2020: 20, sales2021: 50 },
  ];

  return (
    <>
      <div className={`row ${Styles.container}`}>
        <div className={Styles.firstBox}>
          <div className={Styles.graph}>
            <ColumnChart
              data={dataa}
              categories={categories}
              width={500}
              height={200}
              barWidth={"5px"}
            />
          </div>
          <div>Active Users</div>
          <strong>
            (+23) <p>than the last week</p>
          </strong>
          <div className={Styles.graphBottom}>
          {usersData.map((item,i)=><div key={i}>
            <span><img src={item?.icon} alt={item?.title} /> {item?.title}</span>
            <div>{item?.data}</div>
            <ProgressBar
              width={"100px"}
              height={"4px"}
              marginTop={"3px"}
              backgroundColor={"#E2E8F0"}
              progressData={item?.percentage}
              progressColor={"#5D5FEF"}
            />
          </div>)}
          </div>
        </div>

        <div className={Styles.secondBox}>
          <div>Sales overview</div>
          <strong>
            (+5) more <p>in 2021</p>
          </strong>
          
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales2020"
          stroke="#000"
          fill="#d3d3d3"
          fillOpacity={0.5}
        />
        <Area
          type="monotone"
          dataKey="sales2021"
          stroke="#4f46e5"
          fill="#93c5fd"
          fillOpacity={0.5}
        />
      </AreaChart>
    </ResponsiveContainer>
        </div>
      </div>
      <div className={Styles.thirdBox}>
        <div>Today</div>
        <strong>In Progress:</strong>
        <p>
          Bug: [SUPER ADMIN] Accounting - Unable to view the data for income and
          expenses tab
        </p>
        <button>Add Todo</button>
      </div>
    </>
  );
};

export default ProjectManagement;
