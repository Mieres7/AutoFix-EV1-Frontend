import { useEffect, useState } from "react";

import vehicleService from "../services/vehicle.service";
import { Vehicle } from "../models/Vehicle";
import { CreateVehicle } from "../models/CreateVehicle";
import { Brand } from "../models/Brand";
import brandService from "../services/brand.service";
import { PencilIcon, TrashIcon } from "../assets/Icons";

export function VehicleContainer() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [createVehicle, setCreateVehicle] = useState<CreateVehicle>({
    registration: "",
    model: "",
    vehicleType: "SEDAN",
    motorType: "GASOLINE",
    manufactureYear: "",
    seats: 0,
    mileage: 0,
    brandId: 1,
  });
  const [brands, setBrands] = useState<Brand[]>([]);

  const deleteVehicle = (id: any): any => {
    vehicleService
      .deleteVehicle(id)
      .then(() => {
        init();
      })
      .catch((e) => {
        console.log("aaaa");

        console.log(e);
      });
  };

  const init = () => {
    vehicleService
      .getAll()
      .then((response: any) => {
        setVehicles(response.data);
        console.log(response);
      })
      .catch((e) => console.log(e));

    brandService
      .getAll()
      .then((response) => {
        console.log(response.data);

        setBrands(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addVehicle = (e: React.FormEvent): any => {
    e.preventDefault();
    const { brandId, vehicleType, motorType, ...vehicle } = createVehicle;
    const postVehicle = {
      ...vehicle,
      brandId: parseInt(brandId as any),
      vehicleType: vehicleType.toUpperCase(),
      motorType: motorType.toUpperCase(),
    };

    vehicleService
      .post(postVehicle)
      .then((response) => {
        console.log(response.data);

        init();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCreateVehicle((prev) => ({
      ...prev,
      [name]: name === "brandId" ? parseInt(value) : value,
    }));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="vehicle-container">
      <div className="vehicles">
        {vehicles.map((vehicle) => (
          <div className="vehicle-item">
            <div className="vehicle-item-icons">
              <PencilIcon />
              <button onClick={() => deleteVehicle(vehicle.vehicleId)}>
                <TrashIcon />
              </button>
            </div>
            <div className="vehicle-item-text flex-column">
              <span>{vehicle.model.toUpperCase()}</span>
              <span className="a">
                {vehicle.motorType} - {vehicle.vehicleType}
              </span>
            </div>
            <div className="vehicle-km">
              <span>Km: {vehicle.mileage}</span>
              <span className="a">{vehicle.registration}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="vehicle-registration">
        <section className="vehicle-registration-text">
          <span>Vehicle Data</span>
        </section>
        <form className="vehicle-form flex-column" onSubmit={addVehicle}>
          Registration
          <input
            type="text"
            className="input-form"
            name="registration"
            value={createVehicle.registration}
            onChange={handleChange}
          />
          Model
          <input
            type="text"
            className="input-form"
            name="model"
            value={createVehicle.model}
            onChange={handleChange}
          />
          <div className="flex-row gap-10">
            <div className="flex-column gap-5">
              Vehicle Type
              <select
                className="input-form-double"
                name="vehicleType"
                value={createVehicle.vehicleType}
                onChange={handleChange}
              >
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Suv">Suv</option>
                <option value="Pickup">Pickup</option>
                <option value="Van">Van</option>
              </select>
            </div>
            <div className="flex-column gap-5">
              Motor Type
              <select
                name="motorType"
                className="input-form-double"
                value={createVehicle.motorType}
                onChange={handleChange}
              >
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
          </div>
          <div className="flex-row gap-10">
            <div className="flex-column gap-5">
              Fab. Year
              <input
                type="text"
                name="manufactureYear"
                className="input-form-triple"
                value={createVehicle.manufactureYear}
                onChange={handleChange}
              />
            </div>
            <div className="flex-column gap-5">
              Seats
              <input
                type="number"
                name="seats"
                className="input-form-triple"
                value={createVehicle.seats}
                onChange={handleChange}
              />
            </div>
            <div className="flex-column gap-5">
              Mileage
              <input
                type="number"
                name="mileage"
                className="input-form-triple"
                value={createVehicle.mileage}
                onChange={handleChange}
              />
            </div>
          </div>
          Brand
          <select
            name="brandId"
            className="input-form"
            value={createVehicle.brandId}
            onChange={handleChange}
          >
            {brands.map((brand) => (
              <option key={brand.brandId} value={brand.brandId}>
                {brand.brandName}
              </option>
            ))}
          </select>
          <button className="input-form" type="submit">
            Save Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}
