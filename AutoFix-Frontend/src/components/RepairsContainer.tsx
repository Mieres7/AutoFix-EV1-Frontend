import { useEffect, useState } from "react";
import { SparkleIcon } from "../assets/Icons";
import repairService from "../services/repair.service";
import { Vehicle } from "../models/Vehicle";
import vehicleService from "../services/vehicle.service";
import { CreateRepair } from "../models/CreateRepair";
import { ReapairTypeCost } from "../models/RepairTypeCost";
import { Repair } from "../models/Repair";
import { VehicleRepair } from "../models/VehicleRepair";

export function RepairsContainer() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const [vr, setVr] = useState<VehicleRepair[]>([]);

  const [newRepair, setNewRepair] = useState<CreateRepair>({
    vehicleId: 0,
    bonus: false,
    repairType: 0,
  });

  const [typeCost, setTypeCost] = useState<ReapairTypeCost[]>([]);

  const init = () => {
    repairService
      .getTypeCost()
      .then((response) => {
        setTypeCost(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    repairService
      .getAll()
      .then((response) => {
        setRepairs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    repairService
      .getAllvr()
      .then((response) => {
        setVr(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    vehicleService
      .getAll()
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addRepair = (e: React.FormEvent): any => {
    e.preventDefault();
    console.log(newRepair);
    const { vehicleId, repairType, ...repair } = newRepair;
    const postRepair = {
      ...repair,
      vehicleId: parseInt(vehicleId as any),
      repairType: parseInt(repairType as any),
    };

    repairService
      .post(postRepair)
      .then(() => {
        init();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTotalCost = (id: number) => {
    const newid = id.toString();

    repairService.getlTotalCost(newid).then(() => {
      init();
    });
  };

  const updateRepair = (timeOption: any, repairId: number) => {
    const now = new Date();
    const LocalDateTime = now.toISOString().replace("Z", "");
    console.log(LocalDateTime);
    switch (timeOption) {
      case 1:
        const checkOutDateTime = {
          checkOutDateTime: now,
        };
        repairService.update(checkOutDateTime, repairId);
        break;
      case 2:
        const costumerDateTime = {
          costumerDateTime: now,
        };
        repairService.update(costumerDateTime, repairId);
        break;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewRepair((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    init();
  }, []);

  const bonusBrands = ["Toyota", "Ford", "Hyundai", "Honda"];

  return (
    <div className="repairs-container">
      <div className="repair-list">
        {vehicles.map((vehicle) => (
          <div className="repair-item">
            <div key={vehicle.vehicleId}>
              Vehicle: {vehicle.registration}
              <ul>
                {vr
                  .filter(
                    (vehicleRepair) =>
                      vehicleRepair.vehicleId === vehicle.vehicleId
                  )
                  .map((vehicleRepair) => {
                    const repair = repairs.find(
                      (p) => p.repairId === vehicleRepair.repairId
                    );
                    return repair ? (
                      <li key={`${repair.repairId}-${vehicle.vehicleId}`}>
                        Repair Type {repair.repairTypeCostId}
                        <span>Total Cost: {repair.totalCost}</span>
                        <button
                          className="input-form"
                          type="button"
                          onClick={() => getTotalCost(repair.repairId)}
                        >
                          Get Cost
                        </button>
                        <button
                          className="input-form"
                          type="button"
                          onClick={() => updateRepair(1, repair.repairId)}
                        >
                          CheckOut
                        </button>
                        <button
                          className="input-form"
                          type="button"
                          onClick={() => updateRepair(2, repair.repairId)}
                        >
                          Leave
                        </button>
                      </li>
                    ) : null;
                  })}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="repair-actions">
        <form className="repair-form flex-column gap-5" onSubmit={addRepair}>
          <div className="repair-form-text">Add Repair</div>
          Vehicle
          <select
            name="vehicleId"
            className="input-form"
            value={newRepair.vehicleId}
            onChange={handleChange}
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.vehicleId} value={vehicle.vehicleId}>
                {" "}
                {vehicle.registration}{" "}
              </option>
            ))}
          </select>
          Repair Type
          <select
            name="repairType"
            id=""
            className="input-form"
            value={newRepair.repairType}
            onChange={handleChange}
          >
            {typeCost.map((tc) => (
              <option key={tc.repairTypeCostId} value={tc.repairTypeCostId}>
                {tc.repairType}
              </option>
            ))}
          </select>
          Save Repair
          <div className="flex-row gap-10">
            <button type="submit" className="input-form-double">
              Save
            </button>
            <button className="input-form-double">
              <SparkleIcon />
            </button>
          </div>
        </form>
        <div className="bonus-form flex-column">
          <div className="repair-form-text ">Bonus Register</div>
          Brand
          <select name="brand" id="" className="input-form">
            {bonusBrands.map((brand) => (
              <option value="">{brand}</option>
            ))}
          </select>
          <div className="flex-row gap-10">
            <div className="flex-column">
              Amount
              <input type="number" className="input-form-triple" />
            </div>
            <div className="flex-column">
              Discount
              <input type="number" className="input-form-triple" />
            </div>
            <div className="flex-column">
              Period
              <input type="text" className="input-form-triple" />
            </div>
          </div>
          Save Bonus
          <button type="submit" className="input-form">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
