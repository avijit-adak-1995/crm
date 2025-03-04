import React from "react";
import Card from "@/components/dashboard/Card";
import Styles from "@/styles/dashboard/accounting.module.css";
import ColumnChart from "./ColumnChart";

const Accounting = () => {
  const dataa = [1000, 2500, 560, 2600, 800, 3000];
  const categories = [
    "Income",
    "Expenses",
    "Profit",
    "Bonus",
    "Extra",
    "Others",
  ];
  const teamData = [
    {
      title: "Total Income",
      price: "INR .......",
    },
    {
      title: "Project Worked",
      price: "INR .......",
    },
    {
      title: "Work For The Day",
      price: "INR .......",
    },
    {
      title: "Worked Member",
      price: "INR .......",
    },
  ];
  const data = [
    {
      icon: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      totalIncome: "INR ...",
      totalExpenses: "INR ...",
      profit: "INR ...",
      bonus: "INR ...",
    },
    {
      icon: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      totalIncome: "INR ...",
      totalExpenses: "INR ...",
      profit: "INR ...",
      bonus: "INR ...",
    },
    {
      icon: "https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg",
      name: "Random Guy",
      totalIncome: "INR ...",
      totalExpenses: "INR ...",
      profit: "INR ...",
      bonus: "INR ...",
    },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.cardContainer}>
        {teamData.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            subTitle={item?.price}
            // progress={item?.progress}
            progressBar={false}
          />
        ))}
      </div>
      <div className={Styles.graphBox}>
        <div>
          <span>Cash Flow</span>
        </div>
        <ColumnChart data={dataa} categories={categories}/>
      </div>

      <div className={Styles.tableBox}>
        <table className={Styles.customTable}>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>TOTAL INCOME</th>
              <th>TOTAL EXPENSES</th>
              <th>PROFIT</th>
              <th>BONUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input placeholder="Name" />
              </td>
              <td>
                <input placeholder="Total Income" />
              </td>
              <td>
                <input placeholder="Total expenses" />
              </td>
              <td>
                <input placeholder="Profit" />
              </td>
              <td>
                <input placeholder="Bonus" />
              </td>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={item?.icon} alt={item?.name} />
                  <div>{item?.name}</div>
                </td>
                <td>{item?.totalIncome}</td>
                <td>{item?.totalExpenses}</td>
                <td>{item?.profit}</td>
                <td>{item?.bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounting;
