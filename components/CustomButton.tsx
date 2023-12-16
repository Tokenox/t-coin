import React from "react";
// interface Props {
//   btnText: "string";
//   className: "string";
// }
const CustomButton = ({ btnText, className }) => {
  return (
    <button className={`outline-none rounded-[15px] px-11 py-3  ${className}`}>
      {btnText}
    </button>
  );
};

export default CustomButton;
