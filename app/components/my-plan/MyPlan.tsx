"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import WorkoutCard from "./WorkoutCard";
import { toast } from "react-toastify";

const MyPlan = () => {
  const { plan, saved, setPlan, setSaved, loading } = useContext(WorkoutContext)

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan")

  const workouts = activeTab === "plan" ? plan : saved

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  )

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  )

  const removeWorkout = (id: number) => {
    if (activeTab === "plan") {
      setPlan(plan.filter((workout) => workout.id !== id))
      toast.success("Workout removed from plan")
    } else {
      setSaved(saved.filter((workout) => workout.id !== id))
      toast.success("Workout removed from saved")
    }
  }
  
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);  
  const markWorkout = (id: number) => {
  if (completedWorkouts.includes(id)) {
    setCompletedWorkouts(
      completedWorkouts.filter((workoutId) => workoutId !== id)
    );

    toast.info("Workout marked as incomplete");
  } else {
    setCompletedWorkouts([...completedWorkouts, id]);

    toast.success("Workout marked as completed");
  }
};

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration")

  const sortedWorkouts = [...workouts].sort((a, b) => {
  if (sortBy === "duration") {
    return a.duration - b.duration
  }

  if (sortBy === "calories") {
    return a.caloriesBurned - b.caloriesBurned;
  }

  return b.rating - a.rating;
  })

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-oswald text-3xl font-bold uppercase text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-3 max-sm:text-center rounded-2xl border border-[#232732] bg-[#111318] p-8">
        <div className="flex flex-col">
            <p className="text-xs tracking-wider text-[#8A92A0]">
              Exercises
            </p>
          <p className="mt-2 font-oswald text-4xl font-bold text-[#CCFF00]">
            {workouts.length}
          </p>
        </div>

        <div className="flex flex-col sm:border-l sm:border-[#232732] sm:pl-10">
            <p className="text-xs  tracking-wider text-[#8A92A0]">
              Minutes
            </p>
          <p className="mt-2 font-oswald text-4xl font-bold text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="flex flex-col sm:border-l sm:border-[#232732] sm:pl-10">
            <p className="text-xs  tracking-wider text-[#8A92A0]">
              Calories
            </p>

          <p className="mt-2 font-oswald text-4xl font-bold text-white">
            {totalCalories}
          </p>
        </div>
      </div>


      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="inline-flex shrink-0 rounded-2xl border border-[#232732] bg-[#151921] p-1.5">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === "plan"
                ? "bg-[#1F242D] text-white shadow-sm"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-[#1F242D] text-white shadow-sm"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-[#9CA3AF]">
          <span className="hidden sm:block">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories" | "rating"
                )
              }
              className="appearance-none rounded-xl border border-[#232732] bg-[#151921] py-2.5 pl-4 pr-10 text-sm font-semibold text-white outline-none transition hover:border-[#2B303D] focus:border-[#C2F800]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <FiChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
          </div>
        </div>
      </div>

      {loading ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-[#232732] bg-[#111317]/50 px-6 text-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#232732] border-t-[#C2F800]" />

            <p className="mt-5 text-sm font-semibold text-[#9CA3AF]">
              Loading workouts…
            </p>
          </div>
        ) : workouts.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#1C1F26] bg-[#111317]/50 px-6 text-center">
            <h2 className="font-oswald text-xl font-bold uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-md text-sm text-[#A1A1AA]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d0ff33]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
                onRemove={removeWorkout}
                markWorkout={markWorkout}
                completedWorkouts={completedWorkouts}
              />
            ))}
          </div>
        )}
        </div>
        )
};
export default MyPlan