import React from 'react';
import './FiltersBar.css';

const FiltersBar = ({
    filters,
    categories,
    countries,
    sortOptions,
    onFilterChange,
    showMap,
    onToggleMap,
    resultCount
}) => {
    return (
        <div className="filters-bar">
            <div className="filters-header">
                <h1 className="page-title">Browse Masters</h1>
                <p className="page-subtitle">Find your perfect mentor from our global network of certified craftspeople</p>
            </div>

            <div className="filters-row">
                <div className="filters-controls">
                    <div className="filter-group">
                        <label className="filter-label">Craft Type</label>
                        <select
                            className="filter-select"
                            value={filters.category}
                            onChange={(e) => onFilterChange('category', e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Country</label>
                        <select
                            className="filter-select"
                            value={filters.country}
                            onChange={(e) => onFilterChange('country', e.target.value)}
                        >
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Availability</label>
                        <select
                            className="filter-select"
                            value={filters.availability}
                            onChange={(e) => onFilterChange('availability', e.target.value)}
                        >
                            <option value="All">All Masters</option>
                            <option value="accepting">Accepting Students</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Sort By</label>
                        <select
                            className="filter-select"
                            value={filters.sortBy}
                            onChange={(e) => onFilterChange('sortBy', e.target.value)}
                        >
                            {sortOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="filters-actions">
                    <button
                        className={`map-toggle-btn ${showMap ? 'active' : ''}`}
                        onClick={onToggleMap}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                            <line x1="8" y1="2" x2="8" y2="18"></line>
                            <line x1="16" y1="6" x2="16" y2="22"></line>
                        </svg>
                        {showMap ? 'Hide Map' : 'Show Map'}
                    </button>
                </div>
            </div>

            <div className="results-info">
                <span className="results-count">Showing {resultCount} masters</span>
                {filters.sortBy === 'distance' && (
                    <span className="location-note">📍 Sorted by distance from Tokyo, Japan</span>
                )}
            </div>
        </div>
    );
};

export default FiltersBar;
