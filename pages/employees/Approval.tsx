// Manage.tsx
import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Approval.module.css";

interface Employee {
  id: string;
  fullName: string;
  approval_policy: string;
  date: string;
  employee: string;
  team: string;
  status: string;
}

const Approval: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [project, setProject] = useState<string>("All Project");
  const [allEmployees, setAllEmployees] = useState<string>("All Employees");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // Generate 50 random dummy records
    const dummyData: Employee[] = Array.from({ length: 50 }, (_, index) => ({
      id: index.toString(),
      fullName: `Domain Name`,
      approval_policy: `Default`,
      date: new Date(2022, index % 12, (index % 28) + 1).toLocaleDateString(),
      employee: "Random Guy",
      team: "",
      status: Math.random() < 0.5 ? "Viewed" : "Not Viewed",
    }));

    setEmployees(dummyData);
  }, []);
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Approval</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton}>Add</button>
            <select
              className={styles.dropdown}
              value={allEmployees}
              onChange={(e) => setAllEmployees(e.target.value)}
            >
              <option value="All Employees">All Employees</option>
              {/* Add more options if needed */}
            </select>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <h4 className={styles.tableHeading}>Approval</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>APPROVAL POLICY</th>
              <th>DATE</th>
              <th>EMPLOYEE</th>
              <th>TEAM</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => (
              <tr key={employee.id}>
                <td>{employee.fullName}</td>
                <td>{employee.approval_policy}</td>
                <td>{employee.date}</td>
                <td>{employee.employee}</td>
                <td>{employee.team}</td>
                <td>
                  <div
                    className={`${styles.statusButton} ${
                      employee.status === "Viewed"
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

export default Approval;
