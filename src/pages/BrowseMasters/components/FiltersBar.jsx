import React from 'react';
import './FiltersBar.css';

const FiltersBar = () => {
    return (
        <div className="filters-bar">
            <h1 className="page-title">Browse Masters</h1>
            <div className="filters-controls">
                <select className="filter-select"><option>Craft Type</option></select>
                <select className="filter-select"><option>Region</option></select>
                <select className="filter-select"><option>Availability</option></select>
                <select className="filter-select"><option>Sort: Rating</option></select>
            </div>
            <div className="results-count">Showing 24 masters</div>
        </div>
    );
};

export default FiltersBar;
