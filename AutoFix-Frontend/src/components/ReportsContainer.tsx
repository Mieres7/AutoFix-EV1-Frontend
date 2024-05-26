import React, { useState } from "react";
import { FirstReport } from "./FirstReport";
import { SecondReport } from "./SecondReport";

export function ReportsContainer() {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="reports-container">
      <div className="report-filters flex-row">
        <select value="report" id="Report" className="input-form">
          <option value="costs">Costs</option>
          <option value="variation">Variation</option>
        </select>
        <select className="input-form" name="month" id="">
          {months.map((month) => (
            <option value="">{month}</option>
          ))}
        </select>
        <input
          type="text"
          name="Year"
          placeholder="Year"
          className="input-form-triple"
        />
        <button className="input-form-triple">Search</button>
      </div>
      <div className="report-tables">
        {/* <FirstReport /> */}
        <SecondReport />
      </div>
    </div>
  );
}
