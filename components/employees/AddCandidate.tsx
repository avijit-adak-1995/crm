import { useState } from "react";
import styles from "@/styles/components/employees/AddCandidate.module.css";

const AddCandidate = ({ setOpenAdd, openAdd }: any) => {
  return (
    <div className={`${styles.popup}`}>
      <h2 className={styles.heading}>Add Candidate</h2>
      <div className={styles.imageContainer}>
        {/* Image Box */}
        <div className={styles.imageBox}></div>
        {/* Image URL Input */}
        <div className={styles.imageInput}>
          <label>Image URL(optional)</label>
          <input type="text" placeholder="Image" />
        </div>
      </div>
      {/* Full Name */}
      <div className={styles.formGroup}>
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" className={styles.input} />
      </div>
      {/* Email and Phone */}
      <div className={`${styles.formGroup} ${styles.dualInput}`}>
        <div>
          <label>Usename</label>
          <input
            type="text"
            placeholder="Username"
            className={styles.inputHalf}
          />
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" placeholder="Phone" className={styles.inputHalf} />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="text" placeholder="Email" className={styles.input} />
      </div>
      {/* Username and Password */}
      <div className={`${styles.formGroup} ${styles.dualInput}`}>
        <div>
          <label>Applied Date (optional)</label>
          <input
            type="text"
            placeholder="Pick a Date"
            className={styles.inputHalf}
          />
        </div>
        <div>
          <label>Reject Date (optional)</label>
          <input
            type="text"
            placeholder="Pick a Date"
            className={styles.inputHalf}
          />
        </div>
      </div>
      {/* Joining Date */}
      <div className={styles.formGroup}>
        <label>Tags</label>
        <input
          type="text"
          placeholder="Joining Date"
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Source (optional)</label>
        <input
          type="text"
          placeholder="Sourcing"
          className={styles.input}
        />
      </div>
      {/* Save Button */}
      <button className={styles.saveButton}>Save</button>
    </div>
  );
};

export default AddCandidate;
