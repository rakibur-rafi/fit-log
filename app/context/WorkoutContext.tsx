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
  loading: boolean;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  loading: true,
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }

      setLoading(false);
    };

    const timer = setTimeout(loadData, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        setPlan,
        saved,
        setSaved,
        loading,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;