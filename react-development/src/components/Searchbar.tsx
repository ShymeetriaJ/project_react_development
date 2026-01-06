interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('user input:', e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <input 
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for a country...'
        />
    );
};

