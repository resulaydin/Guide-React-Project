import React from "react";
import "../style/css/ExpenseDate.css";

const ExpenseDate = (props) => {
  // console.log(props.prpDate.toLocaleString("en-US", { month: "long" }));
  const carDate = [
    {
      month: props.prpDate.toLocaleString("en-US", { month: "long" }),
      day: props.prpDate.toLocaleString("en-US", { day: "2-digit" }),
      year: props.prpDate.getFullYear(),
    },
  ];
  return (
    <div className="expense-date">
      <div className="expense-date__month">{carDate[0].month}</div>
      <div className="expense-date__year">{carDate[0].year}</div>
      <div className="expense-date__day">{carDate[0].day}</div>
    </div>
  );
};

export default ExpenseDate;
