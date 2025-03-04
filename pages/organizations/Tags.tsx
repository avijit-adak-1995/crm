import React, { useState, useEffect } from "react";
import styles from "../../styles/organization/Tags.module.css";

interface DataOne {
  id: string;
  name: string;
  counter: number;
}
interface DataTwo {
  id: string;
  nameone: string;
  nametwo: string;
  namethree: string;
}

const Tags = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [tagName, setTagName] = useState("");
  const [description, setDescription] = useState("");
  const [dataone, setDatOne] = useState<DataOne[]>([
    { id: "0", name: "priority: highest", counter: 20 },
    { id: "1", name: "type: enhancement", counter: 30 },
    { id: "2", name: "In Progress", counter: 90 },
  ]);
  const [datatwo, setDataTwo] = useState<DataTwo[]>([
    {
      id: "0",
      nameone: "priority: highest",
      nametwo: "type: enhancement",
      namethree: "In Progress",
    },
    {
      id: "0",
      nameone: "priority: highest",
      nametwo: "type: enhancement",
      namethree: "In Progress",
    },
    {
      id: "0",
      nameone: "priority: highest",
      nametwo: "type: enhancement",
      namethree: "In Progress",
    },
  ]);
  const colour = ["#DC3958", "#92B3E2", "#89BD69"];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Tags</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton}>Add</button>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLevel} htmlFor="tagName">
            Tag Name
          </label>
          <input
            className={styles.inputTagName}
            id="tagName"
            type="text"
            placeholder="Tag Name"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLevel} htmlFor="description">
            Description
          </label>
          <input
            className={styles.inputDescription}
            id="description"
            type="text"
            placeholder="Client M"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
      <div className={styles.tableContainer}>
        <h4 className={styles.tableHeading}>Tags</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>COUNTER</th>
            </tr>
          </thead>
          <tbody>
            {dataone.map((ele: DataOne, index: number) => (
              <tr key={ele.id}>
                <td>
                  <div
                    className={styles.tdDiv}
                    style={{ backgroundColor: colour[index] }}
                  >
                    {ele.name}
                  </div>
                </td>
                <td>{ele.counter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.tableboxcontainer}>
        <div className={styles.search}>
          <input
            className="form-control"
            type="search"
            placeholder="Type Here..."
          />
          <img src="/assets/sidebar/search.svg" alt="" />
        </div>
        <table className={styles.tablebox}>
          <tbody>
            {datatwo.map((ele: DataTwo, index: number) => (
              <tr key={ele.id}>
                <td>
                  <div
                    className={styles.tdDiv}
                    style={{ backgroundColor: colour[0] }}
                  >
                    {ele.nameone}
                  </div>
                </td>
                <td>
                  <div
                    className={styles.tdDiv}
                    style={{ backgroundColor: colour[1] }}
                  >
                    {ele.nametwo}
                  </div>
                </td>
                <td>
                  <div
                    className={styles.tdDiv}
                    style={{ backgroundColor: colour[2] }}
                  >
                    {ele.namethree}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tags;
