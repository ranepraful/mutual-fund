import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <h1 className="text-2xl font-bold mb-10">Portfolio Co.</h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-gray-700 
        ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-gray-700
        ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`
          }
        >
          Portfolio
        </NavLink>
      </nav>
    </div>
  );
}
