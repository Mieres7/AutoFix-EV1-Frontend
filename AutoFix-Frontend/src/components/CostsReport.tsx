import { useEffect, useState } from "react";
import repairService from "../services/repair.service";

export default function CostReport() {
  const [costReports, setCostReports] = useState<any>([]);

  const init = () => {
    repairService
      .getCost()
      .then((response) => {
        setCostReports(response.data);
        console.log(response.data);
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
      {costReports.map((cr: any) => (
        <div className="cr-item flex-column">
          Vehicle Registration: {cr.registration}
          <div className="cr-costs flex-column">
            Charges
            <div className="flex-row-between">
              <span>Repair Cost:</span>
              <span className="red">{cr.repairCostOG}</span>
            </div>
            <div className="flex-row-between">
              <span>Kilometer Charge:</span>
              <span className="red">{cr.kilometerCharge}</span>
            </div>
            <div className="flex-row-between">
              <span>Age Charge</span>
              <span className=" red">{cr.ageCharge}</span>
            </div>
            <div className="flex-row-between">
              <span>Late Charge</span>
              <span className="red">{cr.lateCharge}</span>
            </div>{" "}
            <hr />
            <div className="flex-row-between">Discounts</div>
            <div className="flex-row-between">
              <span>Repairs # Discount:</span>
              <span className="green">{cr.repairDiscount}</span>
            </div>
            <div className="flex-row-between">
              <span>Attention Day: </span>
              <span className="green">{cr.attentionDayDiscount}</span>
            </div>
            <div className="flex-row-between">
              <span>Bonus: </span>
              <span className="green">{cr.bonusDiscount}</span>
            </div>
            <hr />
            <div className="flex-row-between">
              <span>Total Cost</span>
              <span>{cr.repairCost}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
