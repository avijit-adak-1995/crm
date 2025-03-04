import NavTool from "@/components/commonElement/NavTool";
import Table from "@/components/commonElement/Table";
import React from "react";

const Browse = () => {
  const placeHolder = [
    "Employee",
    "Project",
    "Created Date",
    "Description",
    "Status",
  ];
  const tableTitle = [
    "EMPLOYEE",
    "TITLE",
    "CREATED DATE",
    "DESCRIPTION",
    "STATUS",
  ];
  const [selectedOption, setSelectedOption] = React.useState(null);
  const naveToolData = {
    button: [
      {
        title: "Add",
        onClick: () => {},
      },
    ],
    dropDownSelector: [
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
  return (
    <>
      <div className="container">
      <NavTool title="Browse" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>

        <Table  tableName={"Jobs"} tableTitle={tableTitle}>
            <tr>
              {placeHolder.map((item: any, i: number) => (
                <td key={i}>
                  <input placeholder={item} name={tableTitle[i]} />
                </td>
              ))}
            </tr>
            {Array.from({ length: 3 })?.map((item: any, i: number) => (
              <tr key={i}>
                <td>
                  <div style={{ marginLeft: "15px" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img
                        style={{
                          border: "2px solid #fff",
                          marginLeft: "-15px",
                        }}
                        key={i}
                        src="https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg"
                        alt={"img"}
                      />
                    ))}
                  </div>
                </td>
                <td style={{width:'15%'}}>
                  Autem tempora sit incidunt ut.
                </td>
                <td >29/12/2022</td>
                <td style={{width:'15%'}}>
                  Eum odit vel dolores officiis provident temporibus at. Est
                  quaerat quis omnis repellat vitae Et velit magni quis id.
                </td>
                <td >
                  <button>Open</button>
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </>
  );
};

export default Browse;
