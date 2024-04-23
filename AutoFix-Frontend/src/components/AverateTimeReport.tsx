import { useEffect, useState } from "react";
import repairService from "../services/repair.service";

export default function AverageTimeReport() {
  const [averageTime, setAverageTime] = useState<any>([]);

  // const averageTime = [{ brandName: "aa", averageRepairTime: 1 }];

  const init = () => {
    repairService
      .getAverage()
      .then((response) => {
        // console.log(response.data);

        setAverageTime(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="query-container flex-row">
      {averageTime.map((at: any) => (
        <div className="at-item flex-column">
          {at.brandName} average repair time: {at.averageRepairTime}
        </div>
      ))}
    </div>
  );
}
