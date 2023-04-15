import React, {useState } from "react";
import "../style/css/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /*
      Aynı seviyede bulunan dosyalara erişmek için ./DosyaAdi  kullanılır.
  */

  return (
    <Card className="expense-item">
      <ExpenseDate prpDate={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
