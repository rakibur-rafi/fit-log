

import { Workout } from "../../types/Workout";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {cache: "no-store"})

  if (!res.ok) {
    throw new Error("Failed to fetch workouts")
  }

  const workouts : Workout[] = await res.json()

  return (
    <section id="library" className="container scroll-mt-24 mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="font-oswald text-3xl font-bold uppercase text-white">
          THE LIBRARY
        </h2>
        <p className="mt-2 text-sm  text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>

        
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {workouts.map((workout ) => (
            <WorkoutCard key={workout.id} workout={workout} />
        ))}
        </div>
    </section>
  );
};

export default WorkoutLibrary;