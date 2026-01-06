import { useParams } from 'react-router-dom';
import { useCountryContext } from '../context/CountryContext';
import { Navbar } from '../components/Navbar';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const CountryDetail = () => {
   
    const { code } = useParams<{ code: string }>();
    
    const { countries, loading, error } = useCountryContext();
    
    const country = countries.find(c => c.cca3 === code);
    
    if (loading) {
        return (
            <>
                <Navbar />
                <Spinner />
            </>
        );
    }
    if (error) {
        return (
            <>
                <Navbar />
                <ErrorMessage message={error} />
            </>
        );
    }
    
    if (!country) {
        return (
            <>
                <Navbar />
                <ErrorMessage message="Country not found" />
            </>
        );
    }
    const currencies = 
    const languages = 
    
    return (
        <>
            <Navbar />
            
            <div className="country-detail-container">
                {}
                
                {}
                
                {}
                
                {}
            </div>
        </>
    );
};