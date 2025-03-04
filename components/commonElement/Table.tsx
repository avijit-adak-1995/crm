import React from "react";
import Styles from "@/styles/commonElement/table.module.css";

const Table = ({tableName,maxWidth, tableTitle,action ,children}: any) => {
  return (
    <div style={{maxWidth}} className={Styles.tableBox}>
        {tableName&&<p>{tableName}</p>}
      <table className={Styles.customTable}>
        <thead>
          <tr>
            {tableTitle.map((heading: any, i: number) => (
              <th key={i}>{heading}</th>
            ))}
            {action&&<th>{action}</th>}
          </tr>
        </thead>
        <tbody>

        {children}
        </tbody>
        {/* <tbody>
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
          {tableData.map((item: any, i: number) => (
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
        </tbody> */}
      </table>
    </div>
  );
};

export default Table;
