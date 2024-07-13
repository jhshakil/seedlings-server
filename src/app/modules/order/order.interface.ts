export type TOrder = {
  name: string;
  phone_number: string;
  address: string;
  cash_on_delivery: boolean;
  products: [TOrderProduct];
};

export type TOrderProduct = {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};
