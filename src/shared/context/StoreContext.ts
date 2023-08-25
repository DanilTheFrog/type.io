import { createContext } from "react";
import { Store } from "./storage";

export const StoreContext = createContext<Store<string, boolean> | null>(null);