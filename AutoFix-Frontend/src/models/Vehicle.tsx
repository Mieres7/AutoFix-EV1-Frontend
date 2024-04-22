export interface Vehicle {
  vehicleId: number;
  registration: string;
  model: string;
  vehicleType: string;
  manufactureYear: string;
  motorType: string;
  seats: number;
  mileage: number;
  repairs: number;
  brandId: number | null;
}
