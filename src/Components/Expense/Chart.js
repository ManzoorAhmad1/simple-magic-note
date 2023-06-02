import React from "react";
import ChartBar from "./Components/Expense/chartBar"
import "./Chart.css";
const Chart = () => {
  return (
    <div className="Chart">
      {props.dataPoint.map((dataPoint) => {
        <chartBar
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={null}
          key={dataPoint.label}
        />;
      })}
    </div>
  );
};
export default Chart;
