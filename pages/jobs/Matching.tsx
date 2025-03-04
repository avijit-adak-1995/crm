import NavTool from '@/components/commonElement/NavTool'
import React from 'react'
import Styles from "@/styles/jobs/matching.module.css";
import Selector from '@/components/commonElement/Selector';


const Matching = () => {
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
     <NavTool title="Matching" date={true}  buttons={naveToolData?.button} dropdownSelector={naveToolData?.dropDownSelector}/>
     <div className={Styles.boxContainer}>
            <div>Source</div>
            <div style={{marginTop:'4px'}}>
              <Selector
                  placeholder={'Source'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"200px"}
                  height="32px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
            <div>Preset</div>
            <div style={{marginTop:'4px'}}>
              <Selector
                  placeholder={'Preset'}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isSearchable={false}
                  width={"200px"}
                  height="32px"
                  borderRadius={'8px'}
                  placeholderColor={'#A0AEC0'}
                  fontSize={'14px'}
                />
              </div>
            <button onClick={() =>{}}>Submit</button>
          </div>
     </div>
    </>
  )
}

export default Matching