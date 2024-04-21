export function VehicleContainer() {
  return (
    <div className="vehicle-container">
      <div className="vehicles">
        <div className="vehicle-item"></div>
        <div className="vehicle-item"></div>
        <div className="vehicle-item"></div>
        <div className="vehicle-item"></div>

        <div className="vehicle-item"></div>
        <div className="vehicle-item"></div>
        <div className="vehicle-item"></div>
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
