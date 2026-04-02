export type Role = "Admin" | "Customer" | "Vendor";

export interface Users {
  id: number;
  name: string;
  role: Role;
}

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export interface TableProps {
  users: Users[];
  maxSize: number;
}

export interface SelectInputProps {
  name: string;
  value: string;
  onChange: (filter: string) => void;
  options: string[];
}
