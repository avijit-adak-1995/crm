import React from "react";
import Styles from "@/styles/commonElement/modal.module.css";

const Modal = ({ show, setShow ,children}: any) => {
    const onClose = ()=>{
        setShow(false)
    }
  return (
    <>
      {show && (
        <>
        <div onClick={onClose} className={Styles.outer}/>
        <div  className={Styles.inner}>{children}</div>
        </>
      )}
    </>
  );
};

export default Modal;
