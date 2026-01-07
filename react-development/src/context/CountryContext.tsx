import { createContext, useContext, useState, type ReactNode } from "react";
import type { Country } from "../types/Country";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { BASE_URL, ENDPOINTS, FIELDS } from "../utils/api";


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
    const url = `${BASE_URL}${ENDPOINTS.ALL}?fields=${FIELDS}`;

    const { data, loading, error } = useFetch(url);

    const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const value: CountryContextType = {
        countries: data || [],
        loading,
        error,
        theme,
        setTheme,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion,
        
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
 