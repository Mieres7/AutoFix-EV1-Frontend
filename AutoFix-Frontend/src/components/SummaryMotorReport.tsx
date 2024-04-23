import { useEffect, useState } from "react";
import repairService from "../services/repair.service";

export default function SummaryMotorReport() {
  const [motors, setMotors] = useState<any>([]);

  const init = () => {
    repairService
      .getMotor()
      .then((response) => {
        console.log("hols");

        console.log(response.data);

        setMotors(response.data);
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
      <table className="motor-table">
        <thead>
          <tr>
            <th>Repair Type</th>
            <th>Gasoline</th>
            <th>Diesel</th>
            <th>Hybrid</th>
            <th>Electric</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {motors.map((m: any) => (
            <tr key={m.gasoline}>
              <td>{m.repairType}</td>
              <td>{m.gasoline}</td>
              <td>{m.diesel}</td>
              <td>{m.hybrid}</td>
              <td>{m.electric}</td>
              <td>{m.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
