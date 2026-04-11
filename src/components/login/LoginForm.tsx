"use client";
import React from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { LoginFormData } from "@/types/login.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { data } from "react-router";
import { loginUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const { setUser } = useAuthStore();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log("login data", data);

    try {
      const result = await loginUser(data);
      // console.log("login user data ", result);
      if (!result.success) {
        toast.error("Login failed");
      }
      if (result.success) {
        setUser(result.data);

        const role = result.data?.role;

        toast.success(
          role === "admin" ? "Admin login successful" : "Login successful"
        );
        router.push(role === "admin" ? "/admin" : "/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative z-10 space-y-6 flex flex-col"
    >
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail size={18} className="text-slate-500" />
          </div>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between ml-1 mr-1">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Password
          </label>
          <a
            href="#"
            className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock size={18} className="text-slate-500" />
          </div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="••••••••"
            className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full py-4 mt-2 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Logging in...
          </span>
        ) : (
          <>
            Sign In <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
