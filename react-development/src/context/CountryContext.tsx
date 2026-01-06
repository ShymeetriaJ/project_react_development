import { createContext, useContext, type ReactNode } from "react";
import type { Country } from "../types/Country";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import {BASE_URL, ENDPOINTS} from "../utils/api";


interface CountryContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
    theme: string;
    setTheme: (theme: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedRegion: string;
    setSelectedRegion: (region: string) => void;
}
const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
    children: ReactNode;
}

export const CountryProvider = ({ children }: CountryProviderProps) => {
    const url = `${BASE_URL}${ENDPOINTS.ALL}`;

    const { data, loading, error } = useFetch(url);

    const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

    const value = {
        countries: data || [],
        loading: loading,
        error: error,
    };

    return(
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
}; 
export const useCountryContext = () => {
    const context = useContext(CountryContext);
  
    
    if (context === undefined) {
        throw new Error('useCountryContext must be used within CountryProvider');
    }
    
    return context;              
};
 