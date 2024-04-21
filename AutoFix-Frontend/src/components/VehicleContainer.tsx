export function VehicleContainer() {
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

  return (
    <div className="vehicle-container">
      <div className="vehicles">
        {vehicles.map((vehicle) => (
          <div className="vehicle-item">
            Registration: {vehicle.registration} <br />
            Model: {vehicle.model} <br />
            Type: {vehicle.vehicleType} <br />
            Motor: {vehicle.motorType} <br />
            Mileage: {vehicle.mileage}
          </div>
        ))}
      </div>
      <div className="vehicle-registration">
        <section className="vehicle-registration-text">
          <span>Vehicle Data</span>
        </section>
        <div className="vehicle-form flex-column">
          Registration
          <input type="text" className="input-form" />
          Model
          <input type="text" className="input-form" />
          <div className="flex-row gap-10">
            <div className="flex-column gap-5">
              Vehicle Type
              <select name="VehicleType" id="" className="input-form-double">
                <option value="SEDAN">Sedan</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="SUV">Suv</option>
                <option value="PICKUP">Pickup</option>
                <option value="VAN">Van</option>
              </select>
            </div>
            <div className="flex-column gap-5">
              Motor Type
              <select name="MotorType" id="" className="input-form-double">
                <option value="GASOLINE">Gasoline</option>
                <option value="DIESEL">Diesel</option>
                <option value="HYBRID">Hybrid</option>
                <option value="ELECTRIC">Electric</option>
              </select>
            </div>
          </div>
          <div className="flex-row gap-10">
            <div className="flex-column gap-5">
              Fab. Year
              <input type="text" className="input-form-triple" />
            </div>
            <div className="flex-column gap-5">
              Seats
              <input type="number" className="input-form-triple" />
            </div>
            <div className="flex-column gap-5">
              Mileage
              <input type="number" className="input-form-triple" />
            </div>
          </div>
          Brand
          <select name="MotorType" id="" className="input-form">
            <option value="GASOLINE">Gasoline</option>
            <option value="DIESEL">Diesel</option>
            <option value="HYBRID">Hybrid</option>
            <option value="ELECTRIC">Electric</option>
          </select>
          <button className="input-form">Save Vehicle</button>
        </div>
      </div>
    </div>
  );
}
