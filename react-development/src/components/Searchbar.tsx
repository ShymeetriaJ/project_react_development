import {} from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    };

    return (
        <input 
        type="text"

        />
    );
}

