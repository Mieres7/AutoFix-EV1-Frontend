import { useEffect, useState } from "react";
import msVehicleService from "../services/ms-vehicle.service";
import msRepairService from "../services/ms-repair.service";
import { Vehicle } from "../models/Vehicle";
import { Repair } from "../models/Repair";

export function HistoryContainer() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const [vehicleRepairs, setVehicleRepairs] = useState<any[]>([]);

  const brands: { [key: number]: string } = {
    1: "TOYOTA",
    2: "FORD",
    3: "HYUNDAI",
    4: "HONDA",
    5: "CHEVROLET",
    6: "NISSAN",
    7: "VOLKSWAGEN",
    8: "MAZDA",
    9: "SUBARU",
    10: "KIA",
    11: "MITSUBISHI",
    12: "BMW",
    13: "MERCEDES-BENZ",
    14: "AUDI",
  };

  useEffect(() => {
    const init = async () => {
      try {
        const vehicleResponse = await msVehicleService.getAllVehicles();
        const repairResponse = await msRepairService.getAll();

        setVehicles(vehicleResponse.data);
        setRepairs(repairResponse.data);
      } catch (e) {
        console.log(e);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (vehicles.length > 0 && repairs.length > 0) {
      const combinedData = mapRepairsToVehicles(vehicles, repairs);
      setVehicleRepairs(combinedData);
    }
  }, [vehicles, repairs]);

  const mapRepairsToVehicles = (
    vehicles: Vehicle[],
    repairs: Repair[]
  ): any[] => {
    return repairs.map((repair) => {
      const vehicle = vehicles.find(
        (vehicle) => vehicle.registration === repair.registration
      );
      return {
        vehicle: vehicle!,
        repair: repair,
      };
    });
  };

  return (
    <div className="history-container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Registration</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Type</th>
            <th>Fab. Year</th>
            <th>Motor</th>
            <th>CheckIn</th>
            <th>Repairs</th>
            <th>Charges</th>
            <th>Discounts</th>
            <th>Sub</th>
            <th>IVA</th>
            <th>Total</th>
            <th>CheckOut</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {vehicleRepairs.map((vr, index) => (
            <tr key={index}>
              <td>{vr.vehicle.registration}</td>
              <td>{brands[vr.vehicle.brand_id]}</td>
              <td>{vr.vehicle.model}</td>
              <td>{vr.vehicle.vehicleType}</td>
              <td>{vr.vehicle.manufactureYear}</td>
              <td>{vr.vehicle.motorType}</td>
              <td>{vr.repair.checkIn}</td>
              <td>{vr.repair.repairs}</td>
              <td>{vr.repair.charges}</td>
              <td>{vr.repair.discount}</td>
              <td>{vr.repair.totalCostBeforeIva}</td>
              <td>{vr.repair.iva}</td>
              <td>{vr.repair.totalCost}</td>
              <td>{vr.repair.checkOut}</td>
              <td>{vr.repair.clientCheckOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
