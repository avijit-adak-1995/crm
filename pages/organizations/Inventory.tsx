import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/organization/Inventory.module.css";

interface Employee {
  id: string;
  image: string;
  name: string;
  code: number;
  product_type: string;
  product_category: string;
  status: string;
}

const Inventory = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // Generate 50 random dummy records
    const dummyData: Employee[] = Array.from({ length: 25 }, (_, index) => ({
      id: index.toString(),
      image: "https://dummyimage.com/640x360/fff/aaa",
      name: `Name ${index + 1}`,
      code: Math.floor(Math.random() * 10000) + 5000,
      product_type: `Expereince`,
      product_category:`Furniture`,
      status: true ? "In Progress" : "Inactive",
    }));

    setEmployees(dummyData);
  }, []);

  const Table = () => {
    const [employeesData, setEmployeesData] = useState<Employee[]>(employees);

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <h4 className={styles.tableHeading}>Inventory</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>COST</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((employee: Employee) => (
                <tr key={employee.id}>
                  <td>
                    <img
                      src={employee.image}
                      alt="Image"
                      className={styles.tableImage}
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.code}</td>
                  <td>{employee.product_type}</td>
                  <td>{employee.product_category}</td>
                  <td>
                    <div
                      className={`${styles.statusButton} ${
                        employee.status === "In Progress"
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      {employee.status}
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

  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Inventory</h6>
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

      <div className={styles.browse}>
        <div className={styles.browseButton}>
          <div className={styles.browseButtonWrapper}>
            <button className={styles.browseButtonIcon}>🗃</button>

            <span className={styles.browseButtonText}>Browse</span>
          </div>
        </div>

        <div className={styles.browseButton}>
          <div className={styles.browseButtonWrapper}>
            <button className={styles.browseButtonIcon}>🔍</button>

            <span className={styles.browseSearchText}>Search</span>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Inventory;
