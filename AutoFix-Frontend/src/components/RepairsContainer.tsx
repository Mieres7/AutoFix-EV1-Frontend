import { SparkleIcon } from "../assets/Icons";

export function RepairsContainer() {
  const vehicles = [
    {
      vehicleId: 1,
      registration: "ABC123",
      model: "Model X",
      vehicleType: "SUV",
      manufactureYear: "2019",
      motorType: "Electric",
      seats: 5,
      mileage: 25000,
      repairs: 2,
      brand_id: 101,
    },
    {
      vehicleId: 2,
      registration: "XYZ789",
      model: "Model S",
      vehicleType: "Sedan",
      manufactureYear: "2018",
      motorType: "Hybrid",
      seats: 5,
      mileage: 15000,
      repairs: 1,
      brand_id: 102,
    },
    {
      vehicleId: 3,
      registration: "DEF456",
      model: "Model 3",
      vehicleType: "Coupe",
      manufactureYear: "2020",
      motorType: "Gasoline",
      seats: 4,
      mileage: 10000,
      repairs: 0,
      brand_id: 103,
    },
    {
      vehicleId: 4,
      registration: "DEF456",
      model: "Model 3",
      vehicleType: "Coupe",
      manufactureYear: "2020",
      motorType: "Gasoline",
      seats: 4,
      mileage: 10000,
      repairs: 0,
      brand_id: 103,
    },
    {
      vehicleId: 4,
      registration: "DEF456",
      model: "Model 3",
      vehicleType: "Coupe",
      manufactureYear: "2020",
      motorType: "Gasoline",
      seats: 4,
      mileage: 10000,
      repairs: 0,
      brand_id: 103,
    },
  ];

  const repairType = [
    { repairType: "type1", repairTypeId: 1 },
    { repairType: "type2", repairTypeId: 2 },
  ];

  const repairs = [
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
    },
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
    },
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
    },
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
    },
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
    },
    {
      repaidId: 1,
      repairType: "asdfkljdsfksd",
      registration: "ABCD12",
      totalCost: 12434,
    },
  ];

  const bonusBrands = ["Toyota", "Ford", "Hyundai", "Honda"];

  return (
    <div className="repairs-container">
      <div className="repair-list">
        {repairs.map((repair) => (
          <div className="repair-item">
            <div>
              Registration: {repair.registration} &nbsp; Repair Type:{" "}
              {repair.repairType} &nbsp; Total Cost: {repair.totalCost}
            </div>
            <button className="input-form">Get Cost</button>
          </div>
        ))}
      </div>
      <div className="repair-actions">
        <div className="repair-form flex-column gap-5">
          <div className="repair-form-text">Add Repair</div>
          Vehicle
          <select name="registration" id="" className="input-form">
            {vehicles.map((vehicle) => (
              <option> {vehicle.registration} </option>
            ))}
          </select>
          Repair Type
          <select name="repairTpye" id="" className="input-form">
            {repairType.map((repairType) => (
              <option>{repairType.repairType}</option>
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
        </div>
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
