"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiClock, FiStar, FiX } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";
import { Workout } from "@/app/types/Workout";

interface WorkoutCardProps {
  workout: Workout;
  activeTab: "plan" | "saved";
  onRemove: (id: number) => void;
  markWorkout: (id: number) => void;
  completedWorkouts: number[];
}

const WorkoutCard = ({
  workout,
  activeTab,
  onRemove,
  markWorkout,
  completedWorkouts
}: WorkoutCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#232732] bg-[#14171E]">
      <div className="flex flex-col border-b border-[#232732] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center sm:p-6">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl sm:w-36 sm:shrink-0">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 640px) 100vw, 144px"
              loading="eager"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="font-oswald text-2xl font-bold uppercase text-white">
              {workout.name}
            </h2>

            <p className="mt-1 text-sm text-[#9CA3AF]">
              {workout.equipment}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#D1D5DB]">
              <span className="flex items-center gap-2">
                <FiClock size={16} className="text-[#CCFF00]" />
                {workout.duration} min
              </span>

              <span className="flex items-center gap-2">
                <FaFireAlt size={16} className="text-[#CCFF00]" />
                {workout.caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-2">
                <FiStar size={16} className="text-[#CCFF00]" />
                {workout.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex max-md:flex-col max-md:items-start items-center gap-3 p-5 pt-0 sm:p-6 sm:pt-6">
          <Link
            href={`/workouts/${workout.id}`}
            className="flex h-[46px] items-center justify-center rounded-full border border-[#374151] px-6 text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            View Details
          </Link>

          {activeTab === "plan" && (
            <button
              onClick={() => markWorkout(workout.id)}
              className={`flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold ${
                completedWorkouts.includes(workout.id)
                  ? "border border-[#C2F800] bg-transparent text-[#C2F800]"
                  : "bg-[#C2F800] text-black"
              }`}
            >
              <FiCheck size={20} />

              <span>
                {completedWorkouts.includes(workout.id)
                  ? "Marked as Done"
                  : "Mark as Done"}
              </span>
            </button>
          )}

          <button
            onClick={() => onRemove(workout.id)}
            className="flex h-[46px] items-center justify-center gap-2 rounded-full text-[#6B7280] transition hover:text-red-400 md:w-[46px] max-md:border max-md:border-[#374151] max-md:px-6"
          >
            <FiX size={20} />

            <span className="text-sm font-semibold md:hidden">
              Remove
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;