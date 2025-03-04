import React, { useState, useEffect } from "react";
import styles from "../../styles/organization/EmploymentTypes.module.css";

const EmploymentTypes = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Employee Types</h6>
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
      {/* levels */}
      <div className={styles.level}>
        <div className={styles.levelWrapper}>
          <h4>Employee Types</h4>
          <p>EMPLOYEE TYPES</p>
          {["Intern", "Contract", "Provation", "Part-time", "Full-time"].map(
            (e) => (
              <div className={styles.eachLevel}>
                <h5>{e}</h5>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypes;
