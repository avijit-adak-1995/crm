import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Manage.module.css";
import Table from "@/components/employees/Table";
import { useDeleteEmployeeManageMutation, useEmployeeManageDetailsMutation, useSeeAllEmployeeManageQuery } from "@/store/services/EmployeesApi";
import AddEmployee from "@/components/employees/AddEmployee";
import InviteEmployee from "@/components/employees/InviteEmployee";
import {
  useGetAllDepartmentsQuery,
  useGetAllTeamsQuery,
} from "@/store/services/organizationsApi";
import {useAddPositionMutation} from '@/store/services/EmployeesApi'

import Styles from "@/styles/dashboard/dashboard.module.css";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import Swal from 'sweetalert2';


interface Employee {
  userId: string;
  fullName: string;
  approval_policy: string;
  date: string;
  employee: string;
  team: string;
  status: string;
  _id: string;
}

const tableTitle = [
  "FULL NAME",
  "EMAIL",
  "JOINING DATE",
  "Position",
  "Team",
  "STATUS",
];

const placeHolder = ["Full Name", "Email", "Joining Date"];



const Manage = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openInvite, setOpenInvite] = useState<boolean>(false);
  const { data: getEmplyee }: any = useSeeAllEmployeeManageQuery("");
  const [getEmployeeId, setEmployeeId] = useState<any>();
  const [employeeDelete] = useDeleteEmployeeManageMutation();



  
  const [showActions, setShowActions] = useState(-1);
  const getEmplyeeData = getEmplyee?.data;
  console.log({ getEmplyeeData });

  const [editEmployee] = useEmployeeManageDetailsMutation();

const selectedEmployeeForEdit = async (employee: Employee) => {
  setEmployeeId(employee?._id)
  setOpenAdd(true)
  // try {
  //   const response:any = await editEmployee(employee?._id).unwrap();
  //   console.log("Edited Employee", response);
  //   setEmployeeDetails(response?.data)

  // } catch (error) {
  //   console.error("Failed to edit employee:", error);
  // }
};

const handleDelete = async (employee: Employee) => {
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
      let deleteEmp:any= await employeeDelete(employee?._id);
      console.log('deleteEmp', deleteEmp?.data)
      Swal.fire(
        'Deleted!',
        'The user has been deleted.',
        'success'
      );
      employeeDelete("")

    
  }
};

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Manage</h5>

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
                  setOpenAdd(false);
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
                  setOpenAdd(!openAdd);
                  setOpenInvite(false);
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

      <Table tableName={`Employees`} tableTitle={tableTitle}>
        <tbody>
          {/* <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr> */}
          {getEmplyeeData?.map((item: any, i: number) => (
            <>
            {console.log('items', item?.fullName)}
            <tr key={i}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.joiningDate}</td>
              <td>{item.position}</td>
              <td>{item.team}</td>
              <td>
                <button>{item.status ? "Active" : "De-Active"}</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <img
                  onClick={() => setShowActions(i)}
                  src="/assets/3dotV.svg"
                  style={{ cursor: "pointer" }}
                  alt={item?.name}
                />
                <TableActionPopUp
                  show={showActions === i}
                  setShow={setShowActions}
                >
                  <div style={{ cursor: "pointer" }} className="p-1" onClick={() => selectedEmployeeForEdit(item)}>
                    <img title="edit" src="/assets/editIcon.svg" alt=""  />
                    Edit
                  </div>
                  <div style={{ cursor: "pointer" }} className="p-1" onClick={()=> handleDelete(item)}>
                    <img title="remove" src="/assets/deleteIcon.svg" alt=""  />
                    delete
                  </div>
                </TableActionPopUp>
              </td>
            </tr>
            </>
          ))}
        </tbody>
      </Table>
      {openAdd && <AddEmployee setOpenAdd={setOpenAdd} openAdd={openAdd} getEmployeeId={getEmployeeId}/>}
      {openInvite && (
        <InviteEmployee setOpenInvite={setOpenInvite} openInvite={openInvite} />
      )}
    </div>
  );
};

export default Manage;
