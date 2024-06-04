import { useEffect, useState } from "react";
import msReportService from "../services/ms-report.service";

interface SecondReportProps {
  month: string;
  year: string;
}

export function SecondReport({ month, year }: SecondReportProps) {
  const [reportList, setReportList] = useState<any[]>([]);
  const [months, setMonths] = useState<any[]>([]);

  const getPreviousThreeMonths = (month: string) => {
    const monthNames = [
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

    const monthIndex = parseInt(month, 10);

    if (monthIndex < 0 || monthIndex > 11) {
      throw new Error("Invalid month format. Please use '01' to '12'.");
    }

    const previousMonths = [];
    for (let i = 1; i <= 3; i++) {
      const prevMonthIndex = (monthIndex - i + 12) % 12;
      previousMonths.push(monthNames[prevMonthIndex]);
    }

    setMonths(previousMonths);
  };

  useEffect(() => {
    const init = () => {
      msReportService
        .getAllComparison(month, year)
        .then((response) => {
          setReportList(response.data);
          getPreviousThreeMonths(month);
        })
        .catch((e) => {
          console.error(e);
        });
    };

    if (month && year) {
      init();
    }
  }, [month, year]);

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th rowSpan={2}>Tipo de Reparación</th>
          {months.map((m) => (
            <th colSpan={2}>{m}</th>
          ))}
        </tr>
        <tr>
          <th>Repair - Cost</th>
          <th>% Variation</th>
          <th>Repair - Cost</th>
          <th>% Variation</th>
          <th>Repair - Cost</th>
          <th>% Variation</th>
        </tr>
      </thead>
      <tbody>
        {reportList.map((r: any) => (
          <tr>
            <td>{r.repairTypeName}</td>
            {r.data.map((m: any) => (
              <>
                <td>
                  <div>{m.vehiclesQuantity}</div>
                  <div>${m.cost}</div>
                </td>
                <td>
                  <div>{m.vehiclesQPercentage}%</div>
                  <div>{m.costPercentage}%</div>
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
