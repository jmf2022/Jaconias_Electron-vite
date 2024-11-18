
export interface Customer {
  _id: string;
  _rev?: string;
  name: string;
  email: string;
  role: string;
  status: boolean;
  address?: string;
  phone?: string;
}

export interface NewCustomer{
  name: string;
  address?: string;
  email: string;
  role: string;
  phone?: string;
  status: boolean;
}