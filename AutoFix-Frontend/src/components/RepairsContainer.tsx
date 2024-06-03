import { useEffect, useState } from "react";
import { SparkleIcon } from "../assets/Icons";
import { Vehicle } from "../models/Vehicle";
import { CreateRepair } from "../models/CreateRepair";
import { Repair } from "../models/Repair";
import Select from "react-select";
import msRepairlistService from "../services/ms-repairlist.service";
import msVehicleService from "../services/ms-vehicle.service";
import msRepairService from "../services/ms-repair.service";

export function RepairsContainer() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [repairss, setRepairss] = useState<Repair[]>([]);
  const [brand, setBrand] = useState<any>({
    brandId: 1,
    bonus: true,
    bonusAmount: 0,
    discount: 0,
    period: "",
  });

  const [newRepair, setNewRepair] = useState<CreateRepair>({
    registration: "",
    bonus: false,
    repairs: [],
  });

  const [typeCost, setTypeCost] = useState<any>([]);

  const init = () => {
    msRepairlistService
      .getAllNames()
      .then((response) => {
        setTypeCost(transformToOptions(response.data));
      })
      .catch((e) => {
        console.log(e);
      });

    msRepairService
      .getAll()
      .then((response) => {
        setRepairss(response.data);
        console.log(repairss);
      })
      .catch((e) => {
        console.log(e);
      });

    msVehicleService
      .getAllVehicles()
      .then((response) => {
        setVehicles(response.data);
        console.log(vehicles);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addRepair = (e: React.FormEvent): any => {
    e.preventDefault();

    msRepairService
      .saveRepair(newRepair)
      .then((response) => {
        console.log(response.data);
        init();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTotalCost = (id: any) => {
    msRepairService.getTotalCost(id).then(() => {
      init();
    });
  };

  const checkOutWorkshop = (id: any) => {
    msRepairService.checkOutWorkshop(id).then(() => {
      init();
    });
  };

  const toggleBonus = () => {
    setNewRepair((prevState) => ({
      ...prevState,
      bonus: !prevState.bonus,
    }));
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

  // this function is for the repairName select
  const handleSelectChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : [];
    setNewRepair((prev) => ({
      ...prev,
      repairs: selectedValues,
    }));
    console.log(newRepair);
  };

  useEffect(() => {
    console.log(newRepair);
  }, [newRepair]);

  const transformToOptions = (list: any) => {
    return list.map((item: any) => ({ value: item, label: item }));
  };

  useEffect(() => {
    init();
  }, []);

  const bonusBrands = ["Toyota", "Ford", "Hyundai", "Honda"];

  return (
    <div className="repairs-container">
      <div className="repair-list">
        {repairss.map((r) => (
          <div className="repair-item">
            Vehicle: {r.registration}
            <span>Total Cost: {r.totalCost}</span>
            <button
              className="input-form"
              type="button"
              onClick={() => checkOutWorkshop(r.repairId)}
            >
              CheckOut
            </button>
            <button
              className="input-form"
              type="button"
              onClick={() => getTotalCost(r.repairId)}
            >
              Get Cost
            </button>
          </div>
        ))}
      </div>
      <div className="repair-actions">
        <form className="repair-form flex-column gap-5" onSubmit={addRepair}>
          <div className="repair-form-text">Repair Register</div>
          Vehicle
          <select
            name="registration"
            className="input-form"
            value={newRepair.registration}
            onChange={handleChange}
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.registration} value={vehicle.registration}>
                {" "}
                {vehicle.registration}{" "}
              </option>
            ))}
          </select>
          Repair Type
          <Select
            isMulti
            name="repairs"
            options={typeCost}
            onChange={handleSelectChange}
            className="basic-multi-select"
            classNamePrefix="select"
            value={typeCost.filter((option: any) =>
              newRepair.repairs.includes(option.value)
            )}
          />
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
          <select name="brandId" className="input-form" value={brand.brandId}>
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
              />
            </div>
            <div className="flex-column">
              Discount
              <input
                type="number"
                name="discount"
                className="input-form-triple"
                value={brand.discount}
              />
            </div>
            <div className="flex-column">
              Period
              <input
                name="period"
                // type="text"
                className="input-form-triple"
                value={brand.period}
              />
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
