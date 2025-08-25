import React from 'react';

const FilterBar: React.FC<{ onFilterChange: (filter: string) => void }> = ({ onFilterChange }) => {
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="filter-bar">
            <select onChange={handleFilterChange} className="filter-select">
                <option value="top-gainers">Top Gainers</option>
                <option value="top-losers">Top Losers</option>
                <option value="most-active">Most Active</option>
            </select>
        </div>
    );
};

export default FilterBar;