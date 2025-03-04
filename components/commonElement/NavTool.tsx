import React from "react";
import Styles from "@/styles/commonElement/navTool.module.css";
import Selector from "./Selector";

const NavTool = ({
  title,
  subTitle,
  // onAddClick,
  // addButton,
  // onInviteClick,
  // inviteButton,
  date,
  buttons,
  clearButton,
  onClearClick,
  dropdownSelector,
}: any) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className={Styles.container}>
          {!subTitle && <h2>{title}</h2>}
          {subTitle && (
            <h5>
              {title}
              <h6>{subTitle}</h6>
            </h5>
          )}
          <div>
            {buttons?.length > 0 &&
              buttons.map(
                (item: any, i: number) =>
                  item?.title && (
                    <button
                      key={i}
                      style={{
                        backgroundColor: item?.bgColor,
                        color: item?.color,
                      }}
                      onClick={() => item?.onClick()}
                    >
                      {item?.title}
                    </button>
                  )
              )}

            {dropdownSelector?.length > 0 &&
              dropdownSelector.map((item: any, i: number) => (
                <Selector
                  key={i}
                  placeholder={item.title}
                  options={item?.options}
                  selectedOption={item?.selectedOption}
                  setSelectedOption={item?.setSelectedOption}
                  isSearchable={true}
                  width={"170px"}
                  height="34px"
                  borderRadius={'50px'}
                />
              ))}

            {date && (
              <span className={Styles.date}>
                01.01.2023 - 31.01.2023{" "}
                <img src="/assets/sidebar/date.svg" alt="" />
              </span>
            )}
            {/* <img
                      title="remove"
                      width={24}
                      height={24}
                      src="/assets/deleteIcon.svg"
                      alt=""
                    />
                    <img
                      title="edit"
                      className="ms-2"
                      width={20}
                      height={22}
                      src="/assets/editIcon.svg"
                      alt=""
                    /> */}
            {clearButton && (
              <button
                style={{ backgroundColor: "#AF0000" }}
                onClick={() => onClearClick()}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTool;
