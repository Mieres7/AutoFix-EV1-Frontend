import { useEffect, useState } from "react";
import msReportService from "../services/ms-report.service";

interface FirstReportProps {
  month: string;
  year: string;
}

export function FirstReport({ month, year }: FirstReportProps) {
  const [vehicleRepairReports, setVehicleRepairReports] = useState<any[]>([]);

  useEffect(() => {
    const init = () => {
      msReportService
        .getAllReport(month, year)
        .then((response) => {
          setVehicleRepairReports(response.data);
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
          <th>Repair</th>
          <th colSpan={2}>Sedan</th>
          <th colSpan={2}>Hatchback</th>
          <th colSpan={2}>SUV</th>
          <th colSpan={2}>Pickup</th>
          <th colSpan={2}>VAN</th>
          <th colSpan={2}>Total</th>
        </tr>
      </thead>
      <tbody>
        {vehicleRepairReports.map((vr: any, index: number) => (
          <tr key={index}>
            <td>{vr.repairTypeName}</td>
            <td>{vr.sedan}</td>
            <td>{vr.sedanAmount}</td>
            <td>{vr.hatchback}</td>
            <td>{vr.hatchbackAmount}</td>
            <td>{vr.suv}</td>
            <td>{vr.suvAmount}</td>
            <td>{vr.pickup}</td>
            <td>{vr.pickupAmount}</td>
            <td>{vr.van}</td>
            <td>{vr.vanAmount}</td>
            <td>{vr.sedan + vr.hatchback + vr.suv + vr.pickup + vr.van}</td>
            <td>
              {vr.sedanAmount +
                vr.hatchbackAmount +
                vr.suvAmount +
                vr.pickupAmount +
                vr.vanAmount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
