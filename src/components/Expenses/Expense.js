import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../style/css/Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onSelectHandler = (enteredYear) => {
    setSelectedYear(enteredYear); // En güncel state' yi alamamaktayız.
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  // setExpenses(filteredExpense);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectItem={onSelectHandler}
        />
        <ExpensesChart filteredDataPoint={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
};

export default Expense;
