import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/organization/Equipment.module.css";
import { useDeleteEquipmentMutation, useGetAllEquipmentQuery } from "@/store/services/organizationsApi";
import AddEquipment from "@/components/organisation/AddEquipment";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import Swal from 'sweetalert2';


interface Equipment {
  id: string;
  image: string;
  name: string;
  type: string;
  cost: string;
  status: string;
  _id: string;
}


const Equipment = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [showActions, setShowActions] = useState(-1);
  const [getEquipmentId, setEqipmentId] = useState<any>();
  const [equipmentDelete] = useDeleteEquipmentMutation();
  const { data: getEquipment }: any = useGetAllEquipmentQuery("");

  
  const selectedEquipmentForEdit = async (equipment: Equipment) => {
    setEqipmentId(equipment?._id)
    setOpenAdd(true)
  };

  const handleDelete = async (equipment: Equipment) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });
  
    if (result.isConfirmed) {
        // Your delete logic here, e.g., an API call
        let deleteEmp:any= await equipmentDelete(equipment?._id);
        console.log('deleteEmp', deleteEmp?.data)
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        );
    }
  };

  const Table = () => {

    console.log("getEquipment", getEquipment)

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <h4 className={styles.tableHeading}>Equipment</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>COST</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {getEquipment?.data?.map((equipment: Equipment, i: number) => (
                <tr key={equipment.id}>
                  <td><img src={equipment.image || 'https://dummyimage.com/640x360/fff/aaa'} alt="Image" className={styles.tableImage}/></td>
                  <td>{equipment.name}</td>
                  <td>{equipment.type}</td>
                  <td>{equipment.cost}</td>
                  <td>
                    <div
                      className={`${styles.statusButton} ${
                        equipment.status === "In Progress"
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      {equipment.status}
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                <img
                  onClick={() => setShowActions(i)}
                  src="/assets/3dotV.svg"
                  style={{ cursor: "pointer" }}
                  alt={equipment?.name}
                />
                <TableActionPopUp
                  show={showActions === i}
                  setShow={setShowActions}
                >
                  <div style={{ cursor: "pointer" }} className="p-1" onClick={() => selectedEquipmentForEdit(equipment)}>
                    <img title="edit" src="/assets/editIcon.svg" alt=""  />
                    Edit
                  </div>
                  <div style={{ cursor: "pointer" }} className="p-1" onClick={()=> handleDelete(equipment)}>
                    <img title="remove" src="/assets/deleteIcon.svg" alt=""  />
                    delete
                  </div>
                </TableActionPopUp>
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
      <h6 className={styles.headerText}>Equipment</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton} onClick={() => {
                  setOpenAdd(!openAdd);
                }}>Add</button>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
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

      <Table />
      {openAdd && <AddEquipment setOpenAdd={setOpenAdd} openAdd={openAdd} getEquipmentId={getEquipmentId}/>}
    </div>
  );
};

export default Equipment;
