import React, { useState, useEffect } from "react";
import styles from "@/styles/components/employees/AddHoliday.module.css";

const AddHoliday = ({ setOpenAdd, openAdd }:any) => {
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
            placeholder="Pick a Date"
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

export default AddHoliday;
