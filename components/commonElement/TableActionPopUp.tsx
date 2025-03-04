import React from "react";
import Styles from "@/styles/commonElement/tableActionPopUp.module.css";

const TableActionPopUp = ({ children, title, show, setShow }: any) => {
  return (
    <>
      {show && (
        <div className={Styles.relative}>

          <div className={Styles.container}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h4>{title ? title : "Actions"}</h4>
              <img style={{cursor:'pointer'}} onClick={()=>setShow(-1)} src="/assets/down.svg" />
            </div>
            {children}
          </div>
        </div>

      )}
    </>
  );
};

export default TableActionPopUp;
