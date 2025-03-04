import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import React, { useState } from "react";
import DashboardStyles from "@/styles/tasks/tasks.module.css";
import Selector from "@/components/commonElement/Selector";

const EstimatedReceived = () => {
  const [showActions, setShowActions] = useState(-1);
  const [showAdd, setShowAdd] = useState(false);
  /// showbuttons initially should be false , I made it true for showing buttons
  const [showButtons, setShowButtons] = useState(true);
  const [browseItem, setBrowseItem] = useState("Browse");
  const [estimateHistory, setEstimateHistory] = useState(false);

  const tableTitle = [
    "ESTIMATE NUMBER",
    "ESTIMATE DATE",
    "DUE DATE",
    "TOTAL VALUE",
    "TAX",
    "DISCOUNT",
    "CONTACT",
    "STATUS",
    "Action",
  ];
  const placeHolder = [
    "9090874129839",
    "Estimate Date",
    "Due Date",
    "Total Value",
    "Tax",
    "Discount",
    "Contact",
    "Status",
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {
          setShowAdd(true);
        },
      },
      showButtons && {
        title: "To Invoice",
        onClick: () => {},
        bgColor: "#237DD8",
      },
      showButtons && {
        title: "Download",
        onClick: () => {},
        bgColor: "#237DD8",
      },
    ],
    dropDownSelector: [
      {
        title: "Set Status",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
      {
        title: "All Project",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
      {
        title: "All Employees",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        selectedOption,
        setSelectedOption,
      },
    ],
  };
  const browsNav = [
    {
      name: "Browse",
      icon: "/assets/tasks/browse.svg",
    },
    {
      name: "Search",
      icon: "/assets/tasks/search.svg",
    },
    {
      name: "History",
      icon: "/assets/tasks/history.svg",
    },
  ];
  return (
    <div className="container">
      {!estimateHistory && (
        <>
          {!showAdd && (
            <>
              <NavTool
                title="Estimated"
                date={true}
                buttons={naveToolData?.button}
                dropdownSelector={naveToolData?.dropDownSelector}
              />
              <div className="d-flex mt-4 px-4 gap-4">
                {browsNav?.map((item: any, i: number) => (
                  <div
                    onClick={() => setBrowseItem(item?.name)}
                    className={DashboardStyles.browse}
                  >
                    <img src={item?.icon} alt={item?.name} />
                    <span
                      style={{
                        color: item?.name !== browseItem ? "#A0AEC0" : "",
                      }}
                    >
                      {item?.name}
                    </span>
                  </div>
                ))}
              </div>

              <Table
                tableName={
                  browseItem === "History"
                    ? "Select an estimate to view it's history"
                    : "Estimated"
                }
                tableTitle={tableTitle}
              >
                {browseItem === "Search" && (
                  <tr>
                    {placeHolder.map((item: any, i: number) => (
                      <td key={i}>
                        <input
                          style={{ width: "130px" }}
                          placeholder={item}
                          name={tableTitle[i]}
                        />
                      </td>
                    ))}
                  </tr>
                )}
                {Array.from({ length: 8 })?.map((item: any, i: number) => (
                  <tr
                    onClick={() => {
                      setShowButtons(true);
                      setEstimateHistory(
                        browseItem === "History" ? true : false
                      );
                    }}
                    style={{ borderBottom: "1px solid #E2E8F0" }}
                    key={i}
                  >
                    <td>
                      <div>9090874129839</div>
                    </td>
                    <td>32/12/2022</td>
                    <td>31/12/2022</td>
                    <td>INR 1,00,000</td>
                    <td>9%</td>
                    <td>9%</td>
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
                  <div>Estimate Number</div>
                  <input placeholder="Estimate Number" />
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
                  <div className="mt-0">Estimate Date</div>
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
                  <div className="mt-0">Discount Type</div>
                  <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Discount Type"}
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
              <div>Terms</div>
              <textarea placeholder="Terms" />
              <div className="d-flex justify-content-between">
                <div className="mt-0">
                  <div className="mt-0">Tax</div>
                  <input placeholder="Tax" />
                </div>
                <div className="mt-0">
                  <div className="mt-0">Tax Type</div>
                  <div style={{ marginTop: "2px" }}>
                    <Selector
                      placeholder={"Tax Type"}
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
              <div>Estimate Type</div>
              <div style={{ marginTop: "2px" }}>
                <Selector
                  placeholder={"Estimate Type"}
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
        </>
      )}
      {estimateHistory && (
        <>
          <div className={DashboardStyles.boxContainer}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div style={{ width: "428px" }} key={i}>
                <div className="d-flex pt-3 fw-bold gap-0 align-items-center p-1">
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      margin: "0px",
                      marginLeft: "16px",
                      borderRadius: "50%",
                    }}
                    src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                    alt="dp"
                  />
                  <span style={{ fontWeight: "700", marginLeft: "-16px" }}>
                    Random Guy
                  </span>
                </div>
                <span style={{ color: "#A0AEC0", fontSize: "14px" }}>
                  12/29/2022 06:04:23 PM
                </span>
                <div style={{ fontSize: "16px", marginTop: "2px" }}>
                  Estimated Added
                </div>
              </div>
            ))}
          </div>
          <div className={DashboardStyles.boxContainer}>
            <div className="pt-4">Comment</div>
            <input className="mt-1" placeholder="Title" />
            <div></div>
            <textarea placeholder="Comment" />

            <button onClick={() => setEstimateHistory(false)}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EstimatedReceived;
