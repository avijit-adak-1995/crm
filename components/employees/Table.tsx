import React from "react";
import Styles from "@/styles/employees/Table.module.css";

const Table = ({ tableName, tableData, tableTitle, children }: any) => {
  return (
    <div className={Styles.tableBox}>
      {tableName && <p>{tableName}</p>}
      <table className={Styles.customTable}>
        <thead>
          <tr>
            {tableTitle.map((heading: any, i: number) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        {children}
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
