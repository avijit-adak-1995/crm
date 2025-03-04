import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/organization/Projects.module.css";

interface Employee {
  id: string;
  name: string;
  project: string;
  visibility:boolean;
  joiningDate: string;
  team: string;
  status: string;
}


const Teams = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [project, setProject] = useState<string>("All Project");
  const [allEmployees, setAllEmployees] = useState<string>("All Employees");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // Generate 50 random dummy records
    const dummyData: Employee[] = Array.from({ length: 50 }, (_, index) => ({
      id: index.toString(),
      name: `Admin Block ${index + 1}`,
      project: `Project`,
      visibility: Math.random() > 0.5,
      joiningDate: new Date(
        2022,
        index % 12,
        (index % 28) + 1
      ).toLocaleDateString(),
      team: "Team",
      status: Math.random() < 0.5 ? "In Progress" : "Inactive",
    }));

    setEmployees(dummyData);
  }, []);

  const ToggleIcon = ({ visibility }: { visibility: boolean }) => {
    return (
      <div className={visibility ? styles.toggleOn : styles.toggleOff}>
        <div className={styles.toggleCircle}></div>
      </div>
    );
  };

  const Table = () => {
    const [employeesData, setEmployeesData] = useState<Employee[]>(employees);

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>PROJECT NAME</th>
                <th>PROJECTS</th>
                <th>VISIBILITY</th>
                <th>CREATED DATE</th>
                <th>TEAM</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((employee: Employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.project}</td>
                  <td
                    onClick={() =>
                      setEmployees(
                        employees.map((e) =>
                          e.id === employee.id
                            ? { ...e, visibility: !e.visibility }
                            : e
                        )
                      )
                    }
                    className={styles.toggleColumn}
                  >
                    <ToggleIcon visibility={employee.visibility} />
                  </td>
                  <td>{employee.joiningDate}</td>
                  <td>{employee.team}</td>
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
  console.log(employees);
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Projects</h6>

      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton}>Add</button>
            <select
              className={styles.dropdown}
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="All Projects">All Projects</option>
              {/* Add more options if needed */}
            </select>
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
      <div className={styles.tableHeadText}>
        <h5>Projects</h5>
      </div>
      <Table />
    </div>
  );
};

export default Teams;
