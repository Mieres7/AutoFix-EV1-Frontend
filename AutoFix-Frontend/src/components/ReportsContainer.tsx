import React, { useState } from "react";
import CostReport from "./CostsReport";
import AverageTimeReport from "./AverateTimeReport";
import SummaryMotorReport from "./SummaryMotorReport";
import SummryTypeReport from "./SummryTypeReport";

export function ReportsContainer() {
  const [activeComponent, setActiveComponent] = useState<React.FC>(
    () => CostReport
  );

  const handleClick = (Component: React.FC) => {
    setActiveComponent(() => Component);
  };

  const ActiveComponent = activeComponent;

  return (
    <div className="reports-container">
      <div className="report-filters flex-row">
        <button className="input-form " onClick={() => handleClick(CostReport)}>
          Costs Reports
        </button>
        <button
          className="input-form"
          onClick={() => handleClick(SummryTypeReport)}
        >
          Summary Type Report
        </button>
        <button
          className="input-form"
          onClick={() => handleClick(AverageTimeReport)}
        >
          Average Time Report
        </button>
        <button
          className="input-form"
          onClick={() => handleClick(SummaryMotorReport)}
        >
          Summary Motor Report
        </button>
      </div>
      <div className="report-tables">
        <ActiveComponent />
      </div>
    </div>
  );
}
