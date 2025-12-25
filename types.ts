
export enum Material {
  NeonFlex = 'Neón Flex',
  Acryclic = 'Acrílico',
  Wood = 'Madera',
  Other = 'Otro'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  material: Material;
  width: number;
  height: number;
  depth: number;
  cost: number;
  price: number;
  image?: string;
}

export interface Movement {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  type: 'VENTA' | 'GASTO';
  amount: number;
  cost?: number; // Only for sales
  gain?: number; // Only for sales
  category: string;
}

export interface QuoteItem {
  id: string;
  name: string;
  width: number;
  height: number;
  quantity: number;
  unitPrice: number;
}

export interface Quote {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  description: string;
  items: QuoteItem[];
  additionalCosts: number;
  margin: number;
}
