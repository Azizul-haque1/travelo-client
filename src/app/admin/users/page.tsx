import React from "react";
import { glassPanel } from "@/utils/glass";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Shield,
  User,
  MoreHorizontal,
  Edit,
  Trash,
  ShieldAlert,
} from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    {
      id: "USR-007",
      name: "Robert Downey",
      email: "robert.d@example.com",
      phone: "+1 555-0442",
      role: "Admin",
      status: "Active",
      joined: "Jul 12, 2026",
      bookings: 4,
    },
    {
      id: "USR-008",
      name: "Scarlett Johansson",
      email: "scarlett.j@example.com",
      phone: "+1 555-0883",
      role: "User",
      status: "Active",
      joined: "Aug 15, 2026",
      bookings: 2,
    },
    {
      id: "USR-009",
      name: "Chris Evans",
      email: "cap@example.com",
      phone: "+1 555-0119",
      role: "User",
      status: "Inactive",
      joined: "Sep 01, 2026",
      bookings: 3,
    },
    {
      id: "USR-010",
      name: "Tom Holland",
      email: "spidey@example.com",
      phone: "+44 7700-123",
      role: "User",
      status: "Active",
      joined: "Oct 20, 2026",
      bookings: 5,
    },
    {
      id: "USR-011",
      name: "Benedict Cumberbatch",
      email: "benedict.c@example.com",
      phone: "+44 7700-456",
      role: "VIP",
      status: "Active",
      joined: "Nov 05, 2026",
      bookings: 4,
    },
    {
      id: "USR-012",
      name: "Zendaya Coleman",
      email: "z.coleman@example.com",
      phone: "+1 555-0777",
      role: "User",
      status: "Suspended",
      joined: "Dec 12, 2026",
      bookings: 2,
    },
    {
      id: "USR-013",
      name: "Idris Elba",
      email: "idris.e@example.com",
      phone: "+44 7700-999",
      role: "Admin",
      status: "Active",
      joined: "Jan 03, 2027",
      bookings: 3,
    },
    {
      id: "USR-014",
      name: "Gal Gadot",
      email: "gal.g@example.com",
      phone: "+972 50-123",
      role: "User",
      status: "Active",
      joined: "Jan 15, 2027",
      bookings: 5,
    },
    {
      id: "USR-015",
      name: "Pedro Pascal",
      email: "mando@example.com",
      phone: "+1 555-0222",
      role: "User",
      status: "Active",
      joined: "Feb 10, 2027",
      bookings: 4,
    },
    {
      id: "USR-016",
      name: "Florence Pugh",
      email: "flo.pugh@example.com",
      phone: "+44 7700-333",
      role: "User",
      status: "Inactive",
      joined: "Feb 22, 2027",
      bookings: 2,
    },
    {
      id: "USR-017",
      name: "Keanu Reeves",
      email: "wick@example.com",
      phone: "+1 555-0101",
      role: "VIP",
      status: "Active",
      joined: "Mar 11, 2027",
      bookings: 5,
    },
    {
      id: "USR-018",
      name: "Michelle Yeoh",
      email: "m.yeoh@example.com",
      phone: "+60 12-345",
      role: "Admin",
      status: "Active",
      joined: "Mar 28, 2027",
      bookings: 3,
    },
    {
      id: "USR-019",
      name: "Cillian Murphy",
      email: "c.murphy@example.com",
      phone: "+353 87-555",
      role: "User",
      status: "Active",
      joined: "Apr 05, 2027",
      bookings: 4,
    },
    {
      id: "USR-020",
      name: "Margot Robbie",
      email: "m.robbie@example.com",
      phone: "+61 411-999",
      role: "User",
      status: "Active",
      joined: "Apr 18, 2027",
      bookings: 5,
    },
    {
      id: "USR-021",
      name: "Ryan Gosling",
      email: "r.gosling@example.com",
      phone: "+1 555-0808",
      role: "User",
      status: "Suspended",
      joined: "May 02, 2027",
      bookings: 2,
    },
    {
      id: "USR-022",
      name: "Henry Cavill",
      email: "h.cavill@example.com",
      phone: "+44 7700-111",
      role: "User",
      status: "Active",
      joined: "May 20, 2027",
      bookings: 3,
    },
    {
      id: "USR-023",
      name: "Ana de Armas",
      email: "ana.d@example.com",
      phone: "+34 600-000",
      role: "User",
      status: "Active",
      joined: "Jun 08, 2027",
      bookings: 4,
    },
    {
      id: "USR-024",
      name: "Oscar Isaac",
      email: "o.isaac@example.com",
      phone: "+1 555-0606",
      role: "User",
      status: "Inactive",
      joined: "Jun 25, 2027",
      bookings: 2,
    },
    {
      id: "USR-025",
      name: "Viola Davis",
      email: "v.davis@example.com",
      phone: "+1 555-0404",
      role: "Admin",
      status: "Active",
      joined: "Jul 10, 2027",
      bookings: 5,
    },
    {
      id: "USR-026",
      name: "Denzel Washington",
      email: "d.wash@example.com",
      phone: "+1 555-0303",
      role: "VIP",
      status: "Active",
      joined: "Jul 22, 2027",
      bookings: 4,
    },
  ];

  return (
    <>
      <header className="flex justify-between items-end mb-10 w-full">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            User Management
          </h1>
          <p className="text-slate-400 mt-1 font-medium">
            Manage user accounts, roles, and access settings.
          </p>
        </div>
        <button className="px-6 py-3 border border-teal-500 text-teal-400 rounded-xl font-bold hover:bg-teal-500/10 transition-colors shadow-md hidden md:block">
          Export Users Data
        </button>
      </header>

      <div
        className={`${glassPanel} p-6 border-white/10 border mb-8 flex flex-col md:flex-row items-center justify-between gap-4`}
      >
        <div className="relative w-full md:max-w-md border-b border-white/20 pb-2 flex items-center">
          <Search size={20} className="text-teal-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name, email, or user ID..."
            className="bg-transparent border-none outline-none text-white w-full placeholder-slate-400"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2">
            <Filter size={16} /> Filters
          </button>
          <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium hover:bg-white/10 transition-colors w-full md:w-auto outline-none appearance-none cursor-pointer">
            <option>All Roles</option>
            <option>Admin</option>
            <option>VIP</option>
            <option>User</option>
          </select>
        </div>
      </div>

      <div
        className={`${glassPanel} flex-1 border-white/10 border overflow-hidden flex flex-col min-h-[500px] max-h-[80vh]`}
      >
        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-left border-collapse relative">
            <thead className="bg-slate-900/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
              <tr>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  User Details
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Role & Status
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
                  Bookings
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          Joined {user.joined}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-300 flex items-center gap-2">
                        <Mail size={12} className="text-slate-500" />{" "}
                        {user.email}
                      </p>
                      <p className="text-xs text-slate-300 flex items-center gap-2">
                        <Phone size={12} className="text-slate-500" />{" "}
                        {user.phone}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                          user.role === "Admin"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            : user.role === "VIP"
                            ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                            : "bg-slate-500/20 text-slate-300 border-slate-500/30"
                        }`}
                      >
                        {user.role === "Admin" ? (
                          <Shield size={10} />
                        ) : (
                          <User size={10} />
                        )}{" "}
                        {user.role}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1 ${
                          user.status === "Active"
                            ? "text-emerald-500"
                            : user.status === "Suspended"
                            ? "text-red-500"
                            : "text-slate-500"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === "Active"
                              ? "bg-emerald-500"
                              : user.status === "Suspended"
                              ? "bg-red-500"
                              : "bg-slate-500"
                          }`}
                        ></span>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full">
                      {user.bookings}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        className="p-2 hover:bg-sky-500/10 rounded-md text-slate-400 hover:text-sky-400 transition-colors"
                        title="Edit User"
                      >
                        <Edit size={16} />
                      </button>
                      {user.status !== "Suspended" && (
                        <button
                          className="p-2 hover:bg-yellow-500/10 rounded-md text-slate-400 hover:text-yellow-400 transition-colors"
                          title="Suspend User"
                        >
                          <ShieldAlert size={16} />
                        </button>
                      )}
                      <button
                        className="p-2 hover:bg-red-500/10 rounded-md text-slate-400 hover:text-red-400 transition-colors"
                        title="Delete User"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
