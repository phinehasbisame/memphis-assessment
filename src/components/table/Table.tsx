"use client"

import { TableProps } from "@/interfaces"
import { FC } from "react"

const Table: FC<TableProps> = ({users, maxSize}) => {
  return (
    <table className="w-full">
        <thead className="text-left">
          <tr className="text-sm">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, maxSize).map(({ id, name, role }, index: number) => (
            <tr key={index} className="text-sm">
              <td className="border p-2">{id}</td>
              <td className="border p-2">{name}</td>
              <td className="border p-2">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Table