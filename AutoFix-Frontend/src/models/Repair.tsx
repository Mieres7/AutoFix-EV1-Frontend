export interface Repair {
  repairId: number;
  totalCost: number;
  checkInDateTime: string;
  checkOutDateTime: string;
  costumerDateTime: string;
  bonus: boolean;
  repairTypeCostId: number;
  kilometerChargeId: number;
  ageChargeId: number;
  repairDiscount: number;
  costRecordId: number;
  registration: string;
}
