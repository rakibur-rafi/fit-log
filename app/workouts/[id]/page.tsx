import ActionButtons from "@/app/components/workouts/ActionButtons";
import { Workout } from "@/app/types/Workout";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
} from "react-icons/fi";

const WorkoutDetail = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,{ cache: "no-store"})

  if (!res.ok) {
    return (
      <main className="container mx-auto px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-[#222630] bg-[#15171D] p-8 text-center">
          <h1 className="font-oswald text-3xl font-bold uppercase text-white">
            Workout Not Found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold uppercase text-black"
          >
            <FiArrowLeft />
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  const workout: Workout = await res.json();

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-16">

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative h-fit overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="font-oswald text-4xl font-bold uppercase leading-tight tracking-tight text-white">
            {workout.name}
          </h1>

          <p className="mt-5 text-sm sm:text-lg leading-7 text-[#9CA3AF]">
            {workout.description}
          </p>

          <div className="flex gap-2 mt-6">
            {
                workout.muscleGroups.map((muscleGroup) => (
                    <span key={muscleGroup} className="badge badge-md rounded-full text-sm font-bold uppercase bg-[#c2f800] text-black">{muscleGroup}</span>
                ))
            }
            </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#222630] bg-[#151922]">
            

            <div className="divide-y divide-[#1E2330]">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm text-[#9CA3AF] uppercase font-bold ">Equipment</span>
                <span className="text-right text-sm font-medium text-[#E5E7EB]">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm text-[#9CA3AF] uppercase font-bold ">Difficulty</span>
                <span className="text-right text-sm font-medium text-[#E5E7EB]">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm text-[#9CA3AF] uppercase font-bold ">
                  Sets
                </span>
                <span className="text-sm font-medium text-[#E5E7EB]">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm text-[#9CA3AF] uppercase font-bold ">
                  Reps
                </span>
                <span className="text-sm font-medium text-[#E5E7EB]">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm text-[#9CA3AF] uppercase font-bold ">Duration</span>
                <span className="text-sm font-medium text-[#E5E7EB]">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="uppercase font-bold text-sm text-[#9CA3AF]">
                  Calories
                </span>
                <span className="text-sm font-medium text-[#E5E7EB]">
                  {workout.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="uppercase font-bold text-sm text-[#9CA3AF]">
                  Rating
                </span>
                <span className="text-sm font-medium text-[#E5E7EB]">
                  {workout.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-[#D1D5DB]"
                >
                  <span className="flex items-center justify-center">
                    {index + 1}. 
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <ActionButtons workout={workout}/>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetail;