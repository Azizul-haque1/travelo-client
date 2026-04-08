import React from "react";
import { glassPanel } from "@/utils/glass";
import { Search, MoreVertical, CheckCircle, Clock, XCircle, Filter } from "lucide-react";

export default function AdminBookingsPage() {
  const bookings = [
    { id: "BK-1023", user: "Alice Walker", email: "alice.w@example.com", destination: "Santorini, Greece", amount: "$1,400", status: "Confirmed", date: "Oct 24, 2026", guests: 2 },
    { id: "BK-1024", user: "John Doe", email: "john.doe@example.com", destination: "Kyoto, Japan", amount: "$1,850", status: "Pending", date: "Oct 25, 2026", guests: 1 },
    { id: "BK-1025", user: "Sarah Smith", email: "sarahs_travel@example.com", destination: "Maldives", amount: "$2,200", status: "Cancelled", date: "Oct 25, 2026", guests: 2 },
    { id: "BK-1026", user: "James Bond", email: "j.bond@007.com", destination: "Swiss Alps, Switzerland", amount: "$2,100", status: "Confirmed", date: "Oct 26, 2026", guests: 4 },
    { id: "BK-1027", user: "Emma Watson", email: "emma.w@example.com", destination: "Bora Bora, French Polynesia", amount: "$3,100", status: "Waitlist", date: "Oct 28, 2026", guests: 2 },
    { id: "BK-1028", user: "Liam Neeson", email: "liam@example.com", destination: "New York City, USA", amount: "$1,500", status: "Confirmed", date: "Oct 29, 2026", guests: 3 },
  ];

  return (
    <>
      <header className="flex justify-between items-end mb-10 w-full">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Bookings & Reservations</h1>
          <p className="text-slate-400 mt-1 font-medium">Monitor and manage all user travel bookings.</p>
        </div>
      </header>

      <div className={`${glassPanel} p-6 border-white/10 border mb-8 flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="relative w-full md:max-w-md border-b border-white/20 pb-2 flex items-center">
             <Search size={20} className="text-teal-400 mr-2" />
             <input type="text" placeholder="Search by booking ID, user name, or email..." className="bg-transparent border-none outline-none text-white w-full placeholder-slate-400" />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2">
                 <Filter size={16} /> Filters
              </button>
              <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 font-medium hover:bg-white/10 transition-colors w-full md:w-auto outline-none appearance-none cursor-pointer">
                  <option>All Statuses</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
              </select>
          </div>
      </div>

      <div className={`${glassPanel} flex-1 border-white/10 border overflow-hidden`}>
          <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10">
                      <tr>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Booking ID</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">User details</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Destination</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Booking Info</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {bookings.map((booking, idx) => (
                          <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                              <td className="py-4 px-6">
                                  <span className="text-sm font-extrabold text-teal-400">{booking.id}</span>
                                  <p className="text-xs text-slate-500 font-medium mt-1">{booking.date}</p>
                              </td>
                              <td className="py-4 px-6">
                                  <p className="text-sm font-bold text-white mb-0.5">{booking.user}</p>
                                  <p className="text-xs text-slate-400 font-medium">{booking.email}</p>
                              </td>
                              <td className="py-4 px-6">
                                  <p className="text-sm font-medium text-slate-300">{booking.destination}</p>
                              </td>
                              <td className="py-4 px-6">
                                  <p className="text-sm font-bold text-white">{booking.amount}</p>
                                  <span className="text-xs font-medium text-slate-500">{booking.guests} Guests</span>
                              </td>
                              <td className="py-4 px-6">
                                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                                      booking.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                                      booking.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                                      booking.status === 'Waitlist' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                      'bg-red-500/20 text-red-400 border-red-500/30'
                                  }`}>
                                      {booking.status === 'Confirmed' && <CheckCircle size={12} />}
                                      {booking.status === 'Pending' && <Clock size={12} />}
                                      {booking.status === 'Cancelled' && <XCircle size={12} />}
                                      {booking.status}
                                  </div>
                              </td>
                              <td className="py-4 px-6 text-right">
                                  <button className="p-2 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors">
                                      <MoreVertical size={18} />
                                  </button>
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
