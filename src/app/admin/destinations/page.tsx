import React from "react";
import { glassPanel, glassCard } from "@/utils/glass";
import { Plus, Search, Edit2, Trash2, MapPin, Eye, Star } from "lucide-react";
import Link from "next/link";
import { getAllDestinations } from "@/services/destination.service";
import { IDestination } from "@/types/destination.interface";

export default async function AdminDestinationsPage() {
  let destinations: IDestination[] = [];

  try {
    destinations = await getAllDestinations();
  } catch (error) {
    console.error("Failed to fetch destinations for admin", error);
  }

  return (
    <>
      <header className="flex justify-between items-end mb-10 w-full">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Destinations Management</h1>
          <p className="text-slate-400 mt-1 font-medium">Add, edit, or delete travel destinations.</p>
        </div>
        <Link href="/admin/destinations/create" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold transition-all shadow-md">
           <Plus size={20} /> Add Destination
        </Link>
      </header>

      <div className={`${glassPanel} p-6 border-white/10 border mb-8 flex items-center justify-between`}>
          <div className="relative w-full max-w-md border-b border-white/20 pb-2 flex items-center">
             <Search size={20} className="text-teal-400 mr-2" />
             <input type="text" placeholder="Search destinations..." className="bg-transparent border-none outline-none text-white w-full placeholder-slate-400" />
          </div>
          <div className="text-sm font-bold text-slate-400">
              Total: <span className="text-white">{destinations.length}</span>
          </div>
      </div>

      <div className={`${glassPanel} flex-1 border-white/10 border overflow-hidden`}>
          <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10">
                      <tr>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Destination</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Location</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Price (Min)</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                          <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {destinations.length > 0 ? destinations.map((dest) => (
                          <tr key={dest._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="py-4 px-6">
                                  <div className="flex items-center gap-4">
                                      <img src={dest.thumbnail || dest.images?.[0]} alt={dest.name} className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                                      <div>
                                          <p className="text-sm font-bold text-white">{dest.name}</p>
                                          <p className="text-xs text-teal-400 font-medium flex items-center mt-0.5"><Star className="w-3 h-3 fill-current mr-1" /> {dest.rating}</p>
                                      </div>
                                  </div>
                              </td>
                              <td className="py-4 px-6">
                                  <p className="text-sm font-medium text-slate-300 flex items-center"><MapPin className="w-4 h-4 mr-1 text-slate-500" /> {dest.city}, {dest.country}</p>
                              </td>
                              <td className="py-4 px-6 text-sm font-bold text-white">
                                  ${dest.priceRange?.min?.toLocaleString() || "N/A"}
                              </td>
                              <td className="py-4 px-6">
                                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-300 border border-white/10">
                                      {dest.category}
                                  </span>
                              </td>
                              <td className="py-4 px-6 text-right">
                                  <div className="flex items-center justify-end gap-2">
                                      <button className="p-2 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors" title="View">
                                          <Eye size={18} />
                                      </button>
                                      <button className="p-2 hover:bg-sky-500/10 rounded-md text-slate-400 hover:text-sky-400 transition-colors" title="Edit">
                                          <Edit2 size={18} />
                                      </button>
                                      <button className="p-2 hover:bg-red-500/10 rounded-md text-slate-400 hover:text-red-400 transition-colors" title="Delete">
                                          <Trash2 size={18} />
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      )) : (
                          <tr>
                              <td colSpan={5} className="py-10 text-center text-slate-400 font-medium">No destinations found.</td>
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>
      </div>
    </>
  );
}
