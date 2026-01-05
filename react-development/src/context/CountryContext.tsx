import { createContext, useContext, ReactNode } from "react-router-dom";
import { Country } from "../types/Country";


interface CountryContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
}
const CountryContext = createContext<CountryContextType | undefined>(undefined);
 