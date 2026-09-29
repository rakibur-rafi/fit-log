"use client";

import { WorkoutContext } from "@/app/context/WorkoutContext";
import { Workout } from "@/app/types/Workout";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { MdAddCircle } from "react-icons/md";
import { toast } from "react-toastify";

const ActionButtons = ({ workout }: { workout: Workout }) => {
  const { plan, saved, setPlan, setSaved } = useContext(WorkoutContext)
  const isPlanFull = plan.length >= 5

  const handleAddToPlan = () => {
    const alreadyInPlan = plan.some((item) => item.id === workout.id)

    if (alreadyInPlan) {
      toast.error("Already in plan")
      return
    }

    setPlan([...plan, workout])
    toast.success("Added to today's plan")
  }

   const handleAddToSaved = () => {
    const alreadyInSaved = saved.some((item) => item.id === workout.id)

    if (alreadyInSaved) {
      toast.error("Already in saved")
      return
    }

    setSaved([...saved, workout])
    toast.success("Added to saved")
  }


  return (
    <div className="mt-8 flex flex-col gap-3 pt-4 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={isPlanFull}
        className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition ${
          isPlanFull
            ? "cursor-not-allowed bg-[#2A2E38] text-[#6B7280]"
            : "bg-[#C2F800] text-black hover:bg-[#d0ff33]"
        }`}
      >
        <MdAddCircle size={20} />
        {isPlanFull ? "Plan Full" : "Add to Today&apos;s Plan"}
      </button>

      <button
        onClick={handleAddToSaved}
        className="flex items-center justify-center gap-2 rounded-xl border border-[#2A2E38] px-6 py-3.5 text-sm font-semibold text-white"
      >
        <FiBookmark size={20} />
        Save for Later
      </button>
    </div>
  );
};

export default ActionButtons;