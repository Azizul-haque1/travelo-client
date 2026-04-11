"use client";

import React, { useState } from "react";
import { glassCard, glassPanel } from "@/utils/glass";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createDestination } from "@/services/destination.service";
import { CreateDestinationFormValues } from "@/types/destination.interface";
import toast from "react-hot-toast";

export default function CreateDestinationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDestinationFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: CreateDestinationFormValues) => {
    setIsSubmitting(true);
    // Mimic API call
    try {
      const destinationPayload = {
        name: data.name,
        country: data.country,
        city: data.city,
        shortDescription: data.shortDescription,
        description: data.description,
        category: data.category,
        tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
        popularActivities: data.popularActivities
          ? data.popularActivities.split(",").map((a) => a.trim())
          : [],
        priceRange: { min: Number(data.minPrice), max: Number(data.maxPrice) },
        location: {
          lat: Number(data.lat),
          lng: Number(data.lng),
        },
        bestTimeToVisit: data.bestTimeToVisit,
        images: [data.imageUrl],
        thumbnail: data.imageUrl,
        rating: 5.0, // Default rating for new
        totalReviews: 0,
        isFeatured: false,
      };

      const result = await createDestination(destinationPayload);

      if (!result?.success) {
        throw new Error(
          result?.message || toast.error("Failed to create destination")
        );
      }

      console.log("Submitting:", result);

      // In reality, this would be an API POST to /api/destinations

      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
      }, 1500);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20">
      <header className="flex justify-between items-center mb-10 w-full border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              Create Destination
            </h1>
            <p className="text-slate-400 mt-1 font-medium">
              Add a new travel package to the platform.
            </p>
          </div>
        </div>
      </header>

      {success ? (
        <div
          className={`${glassPanel} p-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto`}
        >
          <CheckCircle className="text-emerald-400 w-20 h-20 mb-6" />
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Successfully Created!
          </h2>
          <p className="text-slate-400 mb-8">
            The new destination has been published and is now available for
            users to explore.
          </p>
          <Link
            href="/admin/destinations"
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold rounded-xl shadow-md transition-all"
          >
            Back to Destinations
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className={`${glassPanel} p-6 border border-white/10`}>
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-3">
                Basic Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Destination Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="e.g. Santorini"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Country
                    </label>
                    <input
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. Greece"
                    />
                    {errors.country && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      City / Region
                    </label>
                    <input
                      {...register("city", { required: "City is required" })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. Thira"
                    />
                    {errors.city && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Latitude
                    </label>
                    <input
                      type="number"
                      step="any"
                      {...register("lat")}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. 36.3932"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Longitude
                    </label>
                    <input
                      type="number"
                      step="any"
                      {...register("lng")}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. 25.4615"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Short Description
                  </label>
                  <input
                    {...register("shortDescription")}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="A brief 1-sentence hook for the card."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Full Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors h-32 resize-none"
                    placeholder="Detailed overview of what visitors will experience..."
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.description.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={`${glassPanel} p-6 border border-white/10`}>
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-3">
                Pricing & Attributes
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Minimum Price (USD)
                  </label>
                  <input
                    type="number"
                    {...register("minPrice", {
                      required: "Min price required",
                    })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="1000"
                  />
                  {errors.minPrice && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.minPrice.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Maximum Price (USD)
                  </label>
                  <input
                    type="number"
                    {...register("maxPrice", {
                      required: "Max price required",
                    })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="2500"
                  />
                  {errors.maxPrice && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.maxPrice.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors appearance-none"
                  >
                    <option value="Beach">Beach</option>
                    <option value="Mountain">Mountain</option>
                    <option value="City">City</option>
                    <option value="Island">Island</option>
                    <option value="Forest">Forest</option>
                    <option value="Historical">Historical</option>
                    <option value="Culture">Culture</option>
                    <option value="Nature">Nature</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Adventure">Adventure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Best Time To Visit
                  </label>
                  <input
                    {...register("bestTimeToVisit")}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="e.g. May to September"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Tags (Comma Separated)
                  </label>
                  <input
                    {...register("tags")}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="Romantic, Beach, Nature"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Popular Activities
                  </label>
                  <input
                    {...register("popularActivities")}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                    placeholder="Snorkeling, Hiking"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <div className={`${glassCard} p-6 border border-white/10`}>
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-3">
                Media
              </h3>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Cover Image URL
                </label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors group cursor-pointer mb-4 text-center">
                  <Upload
                    className="text-teal-500 group-hover:-translate-y-1 transition-transform duration-300"
                    size={32}
                  />
                  <p className="font-bold text-white mt-4">Upload Asset</p>
                  <p className="text-xs text-slate-400 mt-1">
                    or provide a URL below
                  </p>
                </div>
                <input
                  {...register("imageUrl", {
                    required: "Image URL is required",
                  })}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-500 transition-colors"
                  placeholder="https://images.unsplash..."
                />
                {errors.imageUrl && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.imageUrl.message}
                  </span>
                )}
              </div>
            </div>

            <div className={`${glassPanel} p-6 border border-white/10`}>
              <h3 className="text-lg font-bold text-white mb-4">
                Publish Destination
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                By publishing, this destination will immediately be visible to
                all app users.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 disabled:opacity-50 text-white font-bold transition-all shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.23)]"
              >
                {isSubmitting ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                ) : (
                  "Publish Destination"
                )}
              </button>
              <button
                type="button"
                className="w-full mt-3 px-6 py-4 border border-white/10 text-slate-300 rounded-xl font-bold hover:bg-white/5 transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
