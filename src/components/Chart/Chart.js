import React from "react";
import ChartBar from "./ChartBar";
import "../style/css/ChartBar.css";
import "../style/css/Chart.css";

const Chart = (props) => {
  const filteredValues = props.dataPoints.map(
    (filteredValue) => filteredValue.value
  );
  const maxValue = Math.max(...filteredValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
