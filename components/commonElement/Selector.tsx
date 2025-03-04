import React, { useState } from "react";
import Select from "react-select";

const Selector = ({
  isSearchable,
  iconColor,
  bgColor,
  width,
  height,
  placeholder,
  options,
  selectedOption,
  setSelectedOption,
  borderRadius,
  placeholderColor,
  fontSize
}: any) => {
  const customStyles = {
    placeholder: (provided:any) => ({
      ...provided,
      whiteSpace: "nowrap",
      color:`${placeholderColor?placeholderColor:"#2D3748"}`,
      position: "absolute",
      fontWeight:'400',

    }),
    menu: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: "#fff",
      boxShadow: "0px 3.500000238418579px 5.500000476837158px 0px #00000005",
      border: "1px solid #F8F9FA",
      zIndex: 9999,
    }),
    container: (provided: any) => ({
      ...provided,
    }),
    valueContainer: (provided:any, state:any) => ({
      ...provided,
      padding: "0 0 16px 0",
    }),

    input: (provided:any, state:any) => ({
      ...provided,
      margin: "0px",
      height,
      width,
      minHeight: height,
      maxHeight: height,
      
    }),
    indicatorSeparator: (state:any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided:any, state:any) => ({
      ...provided,
      color: "blue",
      height,
      minHeight: height,
      maxHeight: height,
    }),
    control: (provided: any, { isFocused }: any) => ({
      ...provided,
      height,
      minHeight: height,
      maxHeight: height,
      borderRadius,
      borderColor: isFocused ? "none" : "none",
      border: "none",
      boxShadow: isFocused ? "0 0 0 1px #F8F9FA" : "none",
      width,
      padding: "0 0 0 16px",
      fontWeight:'400',

      backgroundColor: `${bgColor ? bgColor : "#F8F9FA"}`,
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      color: "#2D3748",
      fontWeight:'400',

      fontSize: `${fontSize?fontSize:"15px"}`,
      backgroundColor: state.isFocused ? "#F8F9FA" : "white",
      "&:hover": {
        backgroundColor: "#F8F9FA", 
      },
    }),
  };

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        placeholder={placeholder}
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        isSearchable={isSearchable}
        styles={customStyles}
      />
    </div>
  );
};

export default Selector;
