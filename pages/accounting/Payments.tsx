import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import React, { useState } from "react";
import DashboardStyles from "@/styles/tasks/tasks.module.css";
import Selector from "@/components/commonElement/Selector";

const Payments = () => {
  const [showActions, setShowActions] = useState(-1);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  


  const tableTitle = [
    "INVOICE NUMBER",
    "PAYMENT DATE",
    "PAYMENT METHOD",
    "AMOUNT",
    "RECORDED BY",
    "PROJECT",
    "NOTE",
    "CONTACT",
    "STATUS",
    "Action",
  ];
 
  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {
          setShowAdd(true);
        },
      },
    ],
    dropDownSelector: [
      {
        title: "All Project",
      },
      {
        title: "All Employees",
      },
    ],
  };
  return (
    <div className="container">
          {!showAdd && (
            <>
              <NavTool
                title="Payment"
                date={true}
                buttons={naveToolData?.button}
                dropdownSelector={naveToolData?.dropDownSelector}
              />
              <Table
                tableName={"Payment"}
                tableTitle={tableTitle}
              >
                {Array.from({ length: 8 })?.map((item: any, i: number) => (
                  <tr
                    style={{ borderBottom: "1px solid #E2E8F0" }}
                    key={i}
                  >
                    <td>
                      <div>9090874129839</div>
                    </td>
                    <td>32/12/2022</td>
                    <td>Bank Transfer</td>
                    <td>INR 1,00,000</td>
                    <td>Admin</td>
                    <td>Website</td>
                    <td>Done</td>
                    <td>
                      <div
                        className="d-flex justify-content-center gap-1 align-items-center px-1"
                        style={{
                          maxWidth: "fit-content",
                          height: "35px",
                          backgroundColor: "#3BCBBE80",
                          borderRadius: "50px",
                        }}
                      >
                        <h5>M</h5>
                        <span style={{ whiteSpace: "nowrap" }}>CLient M</span>
                      </div>
                    </td>
                    <td>
                      <button>Accepted</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowActions(i)}
                        src="/assets/3dotV.svg"
                        alt={item?.name}
                      />
                      <TableActionPopUp
                        show={showActions === i}
                        setShow={setShowActions}
                      >
                        <div style={{ cursor: "pointer" }} className="p-1">
                          <img title="edit" src="/assets/editIcon.svg" alt="" />
                          Edit
                        </div>
                        <div style={{ cursor: "pointer" }} className="p-1">
                          <img
                            title="remove"
                            src="/assets/deleteIcon.svg"
                            alt=""
                          />
                          delete
                        </div>
                      </TableActionPopUp>
                    </td>
                  </tr>
                ))}
              </Table>
            </>
          )}
          {showAdd && (
            <div className={DashboardStyles.boxContainer}>
              <div className="d-flex justify-content-between">
                <div>
                  <div>Invoice Number</div>
                  <input placeholder="Invoice Number" />
                </div>
                <div>
                  <div>Contact</div>
                  <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Client M"}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      isSearchable={false}
                      width={"200px"}
                      height="28px"
                      borderRadius={"8px"}
                      placeholderColor={"#A0AEC0"}
                      fontSize={"13px"}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="mt-0">Invoice Date</div>
                  <input placeholder="Dec 29, 2022" />
                </div>
                <div>
                  <div className="mt-0">Due Date</div>
                  <input placeholder="Dec 29, 2022" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="mt-0">Total Amount</div>
                  <input placeholder="Total Amount" />
                </div>
                <div>
                  <div className="mt-0">Payment Method</div>
                  <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Bank Transfer"}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      isSearchable={false}
                      width={"200px"}
                      height="28px"
                      borderRadius={"8px"}
                      placeholderColor={"#A0AEC0"}
                      fontSize={"13px"}
                    />
                  </div>
                </div>
              </div>
              <div>Note</div>
              <textarea placeholder="Note" />
              <div className="d-flex justify-content-between">
                <div className="mt-0">
                  <div className="mt-0">Project</div>
                  <input placeholder="Project" />
                </div>
                <div className="mt-0">
                  <div className="mt-0">Recorded By</div>
                  <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Client"}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      isSearchable={false}
                      width={"200px"}
                      height="28px"
                      borderRadius={"8px"}
                      placeholderColor={"#A0AEC0"}
                      fontSize={"13px"}
                    />
                  </div>
                </div>
              </div>
              <div>Tags</div>
              <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Important"}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      isSearchable={false}
                      width={"200px"}
                      height="28px"
                      borderRadius={"8px"}
                      placeholderColor={"#A0AEC0"}
                      fontSize={"13px"}
                    />
                  </div>
              <div>Status</div>
              <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Accepted"}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      isSearchable={false}
                      width={"200px"}
                      height="28px"
                      borderRadius={"8px"}
                      placeholderColor={"#A0AEC0"}
                      fontSize={"13px"}
                    />
                  </div>
              <button onClick={() => setShowAdd(false)}>Submit</button>
            </div>
          )}
       
    </div>
  );
};


export default Payments