import { users } from "@/constants/dataset";
import { Users } from "@/interfaces";
import { useEffect, useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState<string>("");
  const [filterUsers, setFilterUsers] = useState<Users[]>(users);

  const handleChange = (filter: string) => {
    setFilter(filter);
  };

  const handleReset = () => {
    setFilter("");
    setFilterUsers(users);
  };

  useEffect(() => {
    const triggerFilter = () => {
      if (filter !== "") {
        const filteredUsers = users.filter(({ role }) => role === filter);
        setFilterUsers(filteredUsers);
      }
    };

    triggerFilter();
  }, [filter]);

  return { filter, filterUsers, handleReset, handleChange };
};

export default useFilter;
