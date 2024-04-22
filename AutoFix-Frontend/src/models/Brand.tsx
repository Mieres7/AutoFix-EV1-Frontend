export interface Brand {
  brandId: number; // TypeScript no distingue entre diferentes tipos de números
  brandName: string;
  bonus: boolean;
  bonusAmount: number;
  discount: number;
  period: string;
}
