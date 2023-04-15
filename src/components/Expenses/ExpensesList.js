import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../style/css/ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = (
    <p style={{ color: "white", textAlign: "center" }}> No Expense Found </p>
  );
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item, index) => {
        return <ExpenseItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default ExpensesList;
