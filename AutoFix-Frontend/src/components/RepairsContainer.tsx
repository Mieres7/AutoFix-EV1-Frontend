import { useEffect, useState } from "react";
import { SparkleIcon } from "../assets/Icons";
import repairService from "../services/repair.service";
import { Vehicle } from "../models/Vehicle";
import vehicleService from "../services/vehicle.service";
import { CreateRepair } from "../models/CreateRepair";
import { ReapairTypeCost } from "../models/RepairTypeCost";
import { Repair } from "../models/Repair";
import { VehicleRepair } from "../models/VehicleRepair";
import brandService from "../services/brand.service";

export function RepairsContainer() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const [vr, setVr] = useState<VehicleRepair[]>([]);
  const [brand, setBrand] = useState<any>({
    brandId: 1,
    bonus: true,
    bonusAmount: 0,
    discount: 0,
    period: "",
  });

  const [newRepair, setNewRepair] = useState<CreateRepair>({
    vehicleId: 1,
    bonus: false,
    repairType: 1,
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
        console.log(response.data);
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
      .then((response) => {
        console.log(response.data);
        init();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTotalCost = (id: any) => {
    repairService.getTotalCost(id).then(() => {
      init();
    });
  };

  const toggleBonus = () => {
    setNewRepair((prevState) => ({
      ...prevState,
      bonus: !prevState.bonus,
    }));
  };

  const updateRepair = (timeOption: any, repairId: any) => {
    const now = new Date();

    switch (timeOption) {
      case 1:
        const checkOutDate = new Date(now.getTime());
        checkOutDate.setDate(now.getDate());
        const checkOutDateTime = {
          checkOutDateTime: formatLocalISO(checkOutDate),
        };
        repairService.update(checkOutDateTime, repairId);
        break;
      case 2:
        const customerDate = new Date(now.getTime());
        customerDate.setDate(now.getDate());
        const costumerDateTime = {
          costumerDateTime: formatLocalISO(customerDate),
        };
        repairService.update(costumerDateTime, repairId);
        break;
    }
  };

  function formatLocalISO(date: any) {
    const isoDate = date.toISOString().split("T")[0];
    const isoTime = date.toTimeString().split(" ")[0];
    return isoDate + "T" + isoTime; // Retorna la fecha y hora en formato ISO local
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "vehicleId") {
      // Convertir el valor de vehicleId de string a number
      setNewRepair((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      // Manejar otros inputs normalmente
      setNewRepair((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleChange2 = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "brandId") {
      setBrand((prevBrand: any) => ({
        ...prevBrand,
        brandId: Number(value),
      }));
    } else if (name === "bonusAmount") {
      setBrand((prevBrand: any) => ({
        ...prevBrand,
        bonusAmount: Number(value),
      }));
    } else if (name === "discount") {
      setBrand((prevBrand: any) => ({
        ...prevBrand,
        discount: Number(value),
      }));
    } else if (name === "period") {
      setBrand((prevBrand: any) => ({
        ...prevBrand,
        period: value,
      }));
    }
  };

  const updateBonus = () => {
    console.log(brand);

    brandService
      .updateBrand(brand)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
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
            <button
              type="button"
              onClick={toggleBonus}
              className="input-form-double"
            >
              <SparkleIcon />
            </button>
          </div>
        </form>
        <div className="bonus-form flex-column">
          <div className="repair-form-text">Bonus Register</div>
          Brand
          <select
            name="brandId"
            className="input-form"
            value={brand.brandId}
            onChange={handleChange2}
          >
            {bonusBrands.map((brand, index) => (
              <option key={index} value={index + 1}>
                {brand}
              </option>
            ))}
          </select>
          <div className="flex-row gap-10">
            <div className="flex-column">
              Amount
              <input
                type="number"
                name="bonusAmount"
                className="input-form-triple"
                value={brand.bonusAmount}
                onChange={handleChange2}
              />
            </div>
            <div className="flex-column">
              Discount
              <input
                type="number"
                name="discount"
                className="input-form-triple"
                value={brand.discount}
                onChange={handleChange2}
              />
            </div>
            <div className="flex-column">
              Period
              <input
                name="period"
                // type="text"
                className="input-form-triple"
                value={brand.period}
                onChange={handleChange2}
              />
            </div>
          </div>
          Save Bonus
          <button type="submit" className="input-form" onClick={updateBonus}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
