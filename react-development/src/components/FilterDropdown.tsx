import { REGIONS } from "../utils/constants";

interface FilterDropdownProps {
    selectedRegion: string;
    onRegionChange: (region: string) => void
}
export const FilterDropdown = ({ selectedRegion, onRegionChange }: FilterDropdownProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onRegionChange(e.target.value);
    };
    return (
        <select value={selectedRegion} onChange={handleChange}>
            <option value="">Filter by Region</option>
            {REGIONS.map(region => (
                <option key={region} value={region}>
                    {region}
                </option>
            ))}
        </select>
    )
}