import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const AdminMenu = () => {
  return (
    <div className="bg-[#1E0523bd] border-2 border-[#1E0523] relative rounded-3xl w-[70vh] h-[30vh] pt-10 text-purple flex justify-center">
    <div className="text-white p-4 w-1/2">
      <div>
        <h2 className="text2 text-3xl font-bold mb-4 ">ADMIN MENU</h2>
        <ul className="space-y-2 ">
          <li className="border-2 rounded">
            <NavLink
              to={"/dashboard/admin/create-category"}
              className="block hover:bg-pink-900 px-2 py-1 rounded active:bg-black"
            >
              Create Category
            </NavLink>
          </li>
          <li className="border-2 rounded">
            <NavLink
              to={"/dashboard/admin/create-product"}
              className="block hover:bg-pink-900 px-2 py-1 rounded active:bg-black"
            >
              Create Product
            </NavLink>
          </li>
          <li className="border-2 rounded">
            <NavLink
              to={"/dashboard/admin/users"}
              className="block hover:bg-pink-900 px-2 py-1 rounded active:bg-black"
            >
              Manage Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};
