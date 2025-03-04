import React, { useState } from "react";
import styles from "@/styles/employees/Candidate.module.css";
import AddCandidate from "@/components/employees/AddCandidate";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "CANDIDATE NAME",
  "EMAIL",
  "APPLIED DATE",
  "HIRED DATE",
  "STATUS",
];

const placeHolder = ["Candidate Name", "Email", "Joining Date", "Hired Date","Status"];

const Candidate = () => {

  const [openAddCandidate, setOpenAddCandidate] = useState<boolean>(false);
  const [openInvite, setOpenInvite] = useState<boolean>(false);


  const AddHoliday = () => {
    return (
      <div className={`${styles.popup}`}>
        <h2 className={styles.heading}>Add Holidays</h2>

        <div className={styles.formGroup}>
          <label>Holiday Name</label>
          <input
            type="text"
            placeholder="Holiday Name"
            className={styles.input}
          />
        </div>

        <div className={`${styles.formGroup}`}>
          <div>
            <label htmlFor="employeeSelect">Select Employee</label>
            <select id="employeeSelect">
              {["Add or remove employee", "HR", "IT", "LEGAL"].map(
                (ele, index) => (
                  <option key={index}>{ele}</option>
                )
              )}
            </select>
          </div>
        </div>
        <div className={`${styles.formGroup}`}>
          <div>
            <label htmlFor="Policy">Policy</label>
            <select id="Policy">
              {["policy", "HR", "IT", "LEGAL"].map((ele, index) => (
                <option key={index}>{ele}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>From</label>
            <input
              type="text"
              placeholder="Pick a Date"
              className={styles.inputHalf}
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="text"
              placeholder="Team"
              className={styles.inputHalf}
            />
          </div>
        </div>
        {/* Save Button */}
        <div className={styles.inviteButtonDiv}>
          <button className={styles.saveButton}>Save</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    );
  };

  const InviteEmployee = () => {
    return (
      <div className={`${styles.popup}`}>
        <h2 className={styles.heading}>Invite Employee</h2>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className={styles.inputHalf}
          />
        </div>

        {/* Username and Password */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label htmlFor="departmentSelect">Department</label>
            <select id="departmentSelect">
              {["select department", "HR", "IT", "LEGAL"].map((ele, index) => (
                <option key={index}>{ele}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Team</label>
            <input
              type="text"
              placeholder="Team"
              className={styles.inputHalf}
            />
          </div>
        </div>
        {/* Joining Date */}
        <div className={styles.formGroup}>
          <label>Joining Date</label>
          <input
            type="date"
            placeholder="Joining Date"
            className={styles.input}
          />
        </div>
        {/* Position and Team */}
        <div className={`${styles.formGroup}`}>
          <label>Invition expiration</label>
          <input
            type="text"
            placeholder="Invition Expiration"
            className={styles.inputHalf}
          />
        </div>
        {/* Save Button */}
        <div className={styles.inviteButtonDiv}>
          <button className={styles.saveButton}>Invite</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    );
  };

  

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Candidate</h5>

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
                  setOpenInvite(!openInvite);
                  setOpenAddCandidate(false);
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
                  setOpenAddCandidate(!openAddCandidate);
                  setOpenInvite(false);
                }}
              >
                Add
              </span>
              <span>
                All Employees <img src="/assets/down.svg" alt="" />
              </span>
              <span>
                01.01.2023 - 31.01.2023{" "}
                <img src="/assets/sidebar/date.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableBox}>
        <p>Candidate</p>
        <table className={styles.customTable}>
          <thead>
            <tr>
              {tableTitle.map((heading: any, i: number) => (
                <th key={i}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {placeHolder.map((item: any, i: number) => (
                <td key={i}>
                  <input placeholder={item} name={tableTitle[i]} />
                </td>
              ))}
            </tr>
            {Array.from({ length: 16 }).map((item: any, i: number) => (
              <tr key={i}>
                <td>
                  <img
                    src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                    alt={item?.name}
                  />
                  <div>Random Guy</div>
                </td>
                <td>amm@gmail.com</td>
                <td>29/12/2022</td>
                <td>29/12/2022</td>
                <td>
                  <button style={{ backgroundColor: "#237DD8" }}>
                    Applied
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openAddCandidate && <AddCandidate setOpenAdd={setOpenAddCandidate} openAdd={openAddCandidate} />}
    </div>
  );
};

export default Candidate;
