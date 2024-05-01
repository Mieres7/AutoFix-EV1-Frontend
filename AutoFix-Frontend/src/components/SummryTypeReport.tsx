import { useEffect, useState } from "react";
import repairService from "../services/repair.service";

export default function SummaryTypeReport() {
  const [types, setTypes] = useState<any>([]);

  const init = () => {
    repairService
      .getType()
      .then((response) => {
        setTypes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="query-container">
      <table className="motor-table content-table">
        <thead>
          <tr>
            <th>Repair Type</th>
            <th>Sedan</th>
            <th>Hatchback</th>
            <th>Suv</th>
            <th>Pickup</th>
            <th>Van</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {types.map((t: any) => (
            <tr key={t.sedans}>
              <td>{t.repairType}</td>
              <td>{t.sedans}</td>
              <td>{t.hatchbacks}</td>
              <td>{t.suvs}</td>
              <td>{t.pickups}</td>
              <td>{t.vans}</td>
              <td>{t.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
