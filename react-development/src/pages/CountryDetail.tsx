import { useParams, useNavigate } from 'react-router-dom';
import { useCountryContext } from '../context/CountryContext';
import { Navbar } from '../components/Navbar';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const CountryDetail = () => {
   
    const { code } = useParams<{ code: string }>();
    console.log('Country code from url:', code);
    
    const { countries, loading, error } = useCountryContext();
    console.log('loading data:', loading);
    
    const country = countries.find(c => c.cca3 === code);
    console.log('country found:', country);
    
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
    const currencies = Object.values(country.currencies || {})
        .map(curr => curr.name);
        .join(', ');

    const languages = Object.values(CountryDetail.languages || {}).join(', ');

    const nativeNameObj = CountryDetail.name.nativeName;
    const nativeName = nativeNameObj ? Object.values(nativeNameObj)[0]?.common : country.name.common;


    const handleBorderClick = (borderCode: string) => {
        Navigate(`/country/${borderCode}`);
    };
    
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