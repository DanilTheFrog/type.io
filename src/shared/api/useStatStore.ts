type State = {
    accuracy: number;
    speed: number;
}

type Acticon = {
    setAccuracy: (accuracy: State['accuracy']) => void;
    setSpeed: (speed: State['speed']) => void;
}


import { create } from 'zustand';

export const useStatsStore = create<State & Acticon>((set) => ({
    accuracy: 0,
    speed: 0,
    setAccuracy: (accuracy) => set(() => {
        if(accuracy > 100) accuracy = 100;
        return { accuracy }
    }),
    setSpeed: (speed) => set(() => {
         if(speed == Infinity) speed = 0;
         return { speed };
        }),    
}))

