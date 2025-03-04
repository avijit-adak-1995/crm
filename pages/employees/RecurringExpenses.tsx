
import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/RecurringExpenses.module.css";

interface Employee {
  id: string;
  fullName: string;
  email: string;
  joiningDate: string;
  income: number;
  bonus: string;
  status: string;
}

const RecurringExpenses: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [project, setProject] = useState<string>("All Project");
  const [allEmployees, setAllEmployees] = useState<string>("All Employees");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // Generate 50 random dummy records
    const dummyData: Employee[] = Array.from({ length: 50 }, (_, index) => ({
      id: index.toString(),
      fullName: `Employee ${index + 1}`,
      email: `employee${index + 1}@example.com`,
      joiningDate: new Date(
        2022,
        index % 12,
        (index % 28) + 1
      ).toLocaleDateString(),
      income: Math.floor(Math.random() * 10000) + 5000,
      bonus: `${Math.floor(Math.random() * 5000)}`,
      status: Math.random() < 0.5 ? "Applied" : "Not Applied",
    }));

    setEmployees(dummyData);
  }, []);
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Recurring Expenses</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.inviteButton}>Invite</button>
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
      <div className={styles.tableContainer}>
        <h4 className={styles.tableHeading}>Recurring Expenses</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>FULL NAME</th>
              <th>EMAIL</th>
              <th>JOINING DATE</th>
              <th>EXPENSE</th>
              <th>BONUS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => (
              <tr key={employee.id}>
                <td>{employee.fullName}</td>
                <td>{employee.email}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.bonus}</td>
                <td>{employee.bonus}</td>
                <td>
                  <div
                    className={`${styles.statusButton} ${
                      employee.status === "Applied"
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

export default RecurringExpenses;
