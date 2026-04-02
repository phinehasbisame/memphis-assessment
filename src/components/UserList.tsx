"use client";

import Button from "./common/ui/Button";
import Table from "./table/Table";
import useUserSize from "@/hooks/use-user-size";
import SelectInput from "./common/ui/SelectInput";
import { options } from "@/constants/dataset";
import useFilter from "@/hooks/use-filter";

const UserList = () => {
  const { filter, filterUsers, handleReset, handleChange } = useFilter();
  const { maxSize, handleLoadFull, handleLoadLess } = useUserSize();

  return (
    <section className="w-full md:py-5 px-5 md:px-[10%]">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[#D9B899] my-5">Users</h2>
        <div className="space-x-5">
          <SelectInput
            name="filter"
            value={filter}
            onChange={handleChange}
            options={options}
          />
          <Button
            label="Reset"
            className="bg-[#D9B899] px-5 py-2 text-xs text-white cursor-pointer"
            onClick={handleReset}
          />
        </div>
      </div>

      <Table users={filterUsers} maxSize={maxSize} />
      <div className="flex justify-end my-5">
        {maxSize == Infinity && (
          <Button
            label="Load less"
            className="bg-[#D9B899] px-5 py-2 text-xs text-white cursor-pointer"
            onClick={handleLoadLess}
          />
        )}
        {maxSize !== Infinity && (
          <Button
            label="Load all"
            className="bg-[#D9B899] px-5 py-2 text-xs text-white cursor-pointer"
            onClick={handleLoadFull}
          />
        )}
      </div>
    </section>
  );
};

export default UserList;
