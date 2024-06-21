import { create } from 'zustand';

type State = {
    accessToken: string;
    name: string;
}

type Action = {
    setAccessToken: (token: State['accessToken']) => void;
    setName: (name: State['name']) => void;
}

export const useAuthContext = create<State & Action>((set) => ({
    accessToken: '',
    name: 'Guest',
    setAccessToken: (token) => set(()=>({accessToken: token})),
    setName: (name) => set(()=>({name}))
}))