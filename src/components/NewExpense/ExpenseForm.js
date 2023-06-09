import React, { useState } from "react";
import "../style/css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount, // şekildeki gibi başına + ekleyerek number hale getirmekteyiz
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className={"new-expense__actions"}>
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
