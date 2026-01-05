import { createContext, useContext, ReactNode } from "react-router-dom";
import type { Country } from "../types/Country";



interface CountryContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
}
const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({Children}: CountryProviderProps) => {
    const {data, loading} = useFetch(url);

    const value = {
        countries: data || [],
        loading: loading,
    };

    return(
        <CountryContext.Provider value={value}>
            {Children}
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
 