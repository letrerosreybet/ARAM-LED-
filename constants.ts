
import { Movement, Material, Product } from './types';

export const INITIAL_MOVEMENTS: Movement[] = [
  {
    id: '1',
    date: '12 Oct',
    title: 'Letrero Neón "ARAM"',
    subtitle: '120x60cm • Acrílico',
    type: 'VENTA',
    amount: 2500,
    cost: 800,
    gain: 1700,
    category: 'Ventas'
  },
  {
    id: '2',
    date: '11 Oct',
    title: 'Envío Express',
    subtitle: 'Paquetería DHL • #TRK-9921',
    type: 'GASTO',
    amount: 350,
    category: 'Logística'
  },
  {
    id: '3',
    date: '10 Oct',
    title: 'Logo "Barber Shop"',
    subtitle: '80x80cm • LED Blanco',
    type: 'VENTA',
    amount: 1800,
    cost: 600,
    gain: 1200,
    category: 'Ventas'
  },
  {
    id: '4',
    date: '09 Oct',
    title: 'Placa Acrílico Negro',
    subtitle: 'Proveedor: Plásticos MX',
    type: 'GASTO',
    amount: 1200,
    category: 'Materiales'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Letrero Neón Personalizado',
    description: 'Letrero de neón flex sobre base de acrílico.',
    material: Material.NeonFlex,
    width: 120,
    height: 60,
    depth: 2,
    cost: 800,
    price: 2500,
  }
];
