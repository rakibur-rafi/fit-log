import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Workout } from '../../types/Workout';
import { FaFireAlt} from 'react-icons/fa';
import { FiClock, FiStar } from 'react-icons/fi';

const WorkoutCard = ({workout }: {workout: Workout}) => {
    return (
        <Link href={`/workouts/${workout.id}`}>
            <div
                key={workout.id}
                className="card border border-[#222630] bg-[#15171D] shadow-sm transition hover:-translate-y-1 hover:border-[#C2F800]"
                >
                <figure className="aspect-[2/1] overflow-hidden">
                    <Image src={workout.image} alt={workout.name} width={500} height={400} loading='eager'/>
                </figure>

                <div className="card-body">
                    <div className="flex gap-2 mb-2">
                        {
                            workout.muscleGroups.map((muscleGroup) => (
                                <span key={muscleGroup} className="badge rounded-full text-xs font-bold uppercase bg-[#c2f800] text-black">{muscleGroup}</span>
                            ))
                        }
                    </div>
                    <h2 className="card-title font-oswald uppercase text-white">
                    {workout.name}
                    </h2>

                    <p className="line-clamp-2 text-sm  text-[#9CA3AF]">
                    {workout.equipment}
                    </p>

                    <div className="card-actions mt-2 w-full flex-col">
                        <div className="w-full border-t border-[#20242E]" />

                            <div className="flex w-full items-center justify-start gap-4 pt-2">
                                
                                <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                                <FiClock className="text-[#9CA3AF]" />
                                <span>{workout.duration} min</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                                <FaFireAlt   className="text-[#9CA3AF]" />
                                <span>{workout.caloriesBurned} kcal</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                                <FiStar className="text-[#9CA3AF]" />
                                <span>{workout.rating}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default WorkoutCard;