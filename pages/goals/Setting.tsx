import React, { useState } from 'react'
import ConsumerStyles from "@/styles/contact/consumer.module.css";
import Styles from "@/styles/goals/goal.module.css";
import ProgressBar from "@/components/dashboard/ProgressBar";
import Selector from '@/components/commonElement/Selector';

  const data = [
    {
      content: "Improve product performance",
      percentage: "60",
    },
  ];


const Setting = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
     <div className="container">
      <h6 className='ms-4 row fw-bold'>Setting</h6>
     <div className={ConsumerStyles.boxContainer}>
            <div>Terms</div>
            <textarea placeholder="Term" />
            <div>Percentage</div>
            <input placeholder="0%" />
            <img src="/assets/tasks/down.svg" alt="" />
            <div>Tags</div>
            <div style={{marginTop:'4px'}}>
              <Selector
                  placeholder={'Team'}
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
                  fontSize={'12px'}
                />
              </div>
            <button  onClick={() =>{}}>Submit</button>
          </div>
     </div>
     <div className={Styles.boxContainer}>
        {data?.map((item:any, i) => (
          <span key={i}>
            <span style={{width:'320px'}}>{item?.content}</span>
            <span className='lex-nowrap'>
              {item?.percentage}%
              <ProgressBar
                height={"8px"}
                backgroundColor={"#F8F9FA"}
                progressData={`${item?.percentage}%`}
                progressColor={(item?.percentage<20 || item?.percentage==20)?'#AF0000':(item?.percentage<60 || item?.percentage==60)?'#FFAB2D':'#48BB78'}
                width={"200px"}
              />
            </span>
            <span className='flex-nowrap gap-4'>
              <img src='/assets/edit_dash.svg' alt='edit'/>
              <img src='/assets/crossCircle.svg' alt='edit'/>
            </span>
          </span>
        ))}
      </div>
    </>
  )
}

export default Setting