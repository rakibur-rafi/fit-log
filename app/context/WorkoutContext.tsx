"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
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
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedPlan = localStorage.getItem("fitlog-plan");

    return storedPlan ? JSON.parse(storedPlan) : [];
  });

  const [saved, setSaved] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedSaved = localStorage.getItem("fitlog-saved");

    return storedSaved ? JSON.parse(storedSaved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

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