import { SelectInputProps } from "@/interfaces";
import { FC } from "react";

const SelectInput: FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="border my-auto text-sm px-2 py-1"
    >
      <option value="">Filter</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
