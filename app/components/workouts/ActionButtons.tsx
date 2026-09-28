"use client";

import { WorkoutContext } from "@/app/context/WorkoutContext";
import { Workout } from "@/app/types/Workout";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { MdAddCircle } from "react-icons/md";
import { toast } from "react-toastify";

const ActionButtons = ({ workout }: { workout: Workout }) => {
  const { plan, saved, setPlan, setSaved } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    const alreadyInPlan = plan.some((item) => item.id === workout.id)

    if (alreadyInPlan) {
      toast.error("Workout already in plan")
      return
    }

    setPlan([...plan, workout])
    toast.success("Workout added to today's plan")
  };

   const handleAddToSaved = () => {
    const alreadyInSaved = saved.some((item) => item.id === workout.id)

    if (alreadyInSaved) {
      toast.error("Workout already in saved")
      return
    }

    setSaved([...saved, workout])
    toast.success("Workout added to saved")
  };


  return (
    <div className="mt-8 flex flex-col gap-3 pt-4 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3.5 text-sm font-semibold text-black"
      >
        <MdAddCircle size={20} />
        Add to Today&apos;s Plan
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