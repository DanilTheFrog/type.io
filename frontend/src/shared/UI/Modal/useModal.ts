import { create } from 'zustand';

type State = {
    isOpen: boolean;
}

type Action = {
    setIsOpen: (x: State['isOpen']) => void
    close: () => void
    open: () => void
}


export const useModal = create<State & Action>((set) => ({
        isOpen: true,
        setIsOpen: (isOpen) => set(() => ({isOpen})),
        close: () => set(() => ({isOpen: false})),
        open: () => set(() => ({isOpen: true})),
    
}))