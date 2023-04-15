import React, { useState } from "react";

import "../style/css/ExpensesFilter.css";
import ExpensesChart from "./ExpensesChart";

const ExpensesFilter = (props) => {
  
  const changeHandler = (event) => {
    props.onSelectItem(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
