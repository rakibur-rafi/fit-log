"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Workout } from "../types/Workout";

interface WorkoutContextType {
  plan: Workout[];
  setPlan: Dispatch<SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: Dispatch<SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        setPlan,
        saved,
        setSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;