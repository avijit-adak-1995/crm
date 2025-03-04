
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/employees/TimeAndActivity.module.css";
import Styles from "@/styles/dashboard/dashboard.module.css";
import {Chart} from "chart.js/auto";

interface Employee {
  id: string;
  fullName: string;
  email: string;
  joiningDate: string;
  income: number;
  bonus: string;
  status: string;
}
interface ChartProps {
  data: number[]; // Y-axis data
}

interface ChartProps {
  data: number[]; // Y-axis data
}

const TimeAndActivity = () => {
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
      status: Math.random() < 0.5 ? "Active" : "Inactive",
    }));

    setEmployees(dummyData);
  }, []);

  const ProgressBar = () => {
    return (
      <div style={{backgroundColor:"white", borderRadius:"10px", height:"8.5px"}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: " 25%",
            backgroundColor: "skyblue",
            border: "1px solid black",
            height: "8px",
            marginTop: "12px",
            borderRadius:"10px",
          }}
          aria-valuenow={90}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    );
  };

  const Charts = ({ data }: ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#1C2137");
          gradient.addColorStop(1, "#1C2137");

          // Destroy the previous chart instance if it exists
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          // Create a new chart instance
          chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: Array.from(
                { length: 10 },
                (_, index) => (index + 1) * 10
              ),
              datasets: [
                {
                  data,
                  borderColor: "white",
                  borderWidth: 1,
                  backgroundColor: "white", // Set the background color to white
                },
              ],
            },
            options: {
              maintainAspectRatio: true,
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  type: "linear",
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "white",
                    lineWidth: 0.5,
                  },
                },
              },
              elements: {
                bar: {
                  barThickness: 2, // Adjust the thickness of the lines as needed
                } as any,
              },
            },
          });
        }
      }

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, [data]);

    return <canvas ref={chartRef} width={400} height={185}></canvas>;
  };

  const MyGraph = ({ data }:ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#ACE9E3");
          gradient.addColorStop(1, "#1C2137");

          // Destroy the previous chart instance if it exists
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          // Create a new chart instance
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: Array.from(
                { length: 10 },
                (_, index) => (index + 1) * 10
              ),
              datasets: [
                {
                  data,
                  borderColor: "white",
                  borderWidth: 1,
                  fill: true,
                  backgroundColor: gradient,
                  cubicInterpolationMode: "monotone", // Set to "monotone" for smooth curves
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)", // Set color for horizontal grid lines
                    lineWidth: 1,
                  },
                },
                y: {
                  type: "linear",
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)", // Set color for vertical grid lines
                    lineWidth: 1,
                  },
                },
              },
            },
          });
        }
      }

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, [data]);

    return <canvas ref={chartRef} width={640} height={185}></canvas>;
  };
 
  const Table = () => {
    const [employeesData, setEmployeesData] = useState<Employee[]>(employees);

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>PORJECT</th>
                <th>TIME</th>
                <th>TEAM</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((employee: Employee) => (
                <tr key={employee.id}>
                  <td>{employee.fullName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.joiningDate}</td>
                  <td>{employee.income}</td>
                  <td>
                    <div
                      className={`${styles.statusButton} ${
                        employee.status === "Active"
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
      <h6 className={styles.headerText}>Time & Activity</h6>
      <div className="row">
        <div className="col-12">
          <div className={Styles.date}>
            <div style={{ gap: "20px" }}>
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  background: "#237DD8",
                  cursor: "pointer",
                }}
                onClick={() => {

                }}
              >
                Invite
              </span>
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  background: "#F56D58",
                  cursor: "pointer",
                }}
                onClick={() => {

                }}
              >
                Add
              </span>
              {/* <span>
                All Project <img src="/assets/down.svg" alt="" />
              </span>
              <span>
                All Employees <img src="/assets/down.svg" alt="" />
              </span> */}
              <span>
                01.01.2023 - 31.01.2023{" "}
                <img src="/assets/sidebar/date.svg" alt="" />
              </span>
            </div>
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

      <div className={styles.cardSection}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Projected Work</div>
          <div className={styles.cardContent}>
            <div>6/9</div>
          </div>
          <ProgressBar />
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Activity</div>
          <div className={styles.cardContent}>
            <div>60%</div>
            <ProgressBar />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Total Working Hour</div>
          <div className={styles.cardContent}>
            <div>00:00:00</div>
            <ProgressBar />
          </div>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <div className={styles.chartContainerone}>
          <div>
            <h6 className={styles.chartText}>Employess Activity</h6>
            <div className={styles.chartSection}>
              <Charts data={employees.map((employee) => employee.income)} />
            </div>
          </div>
        </div>
        <div className={styles.chartContainertwo}>
          <div>
            <h6 className={styles.chartText}>Employess Time</h6>
            <div className={styles.graphtSection}>
              <MyGraph data={employees.map((employee) => employee.income)} />
            </div>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default TimeAndActivity;
