"use client";
import { logoutUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const { logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const result = await logoutUser();

      if (result.success) {
        logout();
        toast.success(result.message);
        router.push("/login");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 px-6 py-4 font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-left border-l-4 border-transparent"
    >
      <LogOut size={20} />
      Log Out
    </button>
  );
}
