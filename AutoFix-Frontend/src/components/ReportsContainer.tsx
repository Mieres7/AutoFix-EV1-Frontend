import { useState } from "react";
import { FirstReport } from "./FirstReport";
import { SecondReport } from "./SecondReport";

export function ReportsContainer() {
  const [reportType, setReportType] = useState<string>("costs");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false);

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <div className="reports-container">
      <div className="report-filters flex-row">
        <select
          value={reportType}
          id="Report"
          className="input-form"
          onChange={(e) => {
            setReportType(e.target.value);
          }}
        >
          <option value="costs">Costs</option>
          <option value="variation">Variation</option>
        </select>
        <input
          type="text"
          name="Month"
          placeholder="Month"
          value={selectedMonth}
          onChange={(e) => {
            setSelectedMonth(e.target.value);
          }}
          className="input-form-triple"
        />
        <input
          type="text"
          name="Year"
          placeholder="Year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="input-form-triple"
        />
        <button className="input-form-triple" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="report-tables">
        {searchTriggered && (
          <>
            {reportType === "costs" && (
              <FirstReport month={selectedMonth} year={selectedYear} />
            )}
            {reportType === "variation" && (
              <SecondReport month={selectedMonth} year={selectedYear} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
