import React from 'react';
import FiltersBar from './components/FiltersBar';
import BrowseMasterCard from './components/BrowseMasterCard';
import './BrowseMasters.css';

const DUMMY_MASTERS = [
    {
        id: 1,
        name: "Yamamoto Kenji",
        specialty: "Urushi Lacquer",
        location: "Kanazawa",
        rating: 4.9,
        reviews: 31,
        certified: 58,
        accepting: true,
        avatar: "https://placehold.co/120x120?text=YK"
    },
    {
        id: 2,
        name: "Suzuki Akiko",
        specialty: "Washi Paper",
        location: "Echizen",
        rating: 4.7,
        reviews: 18,
        certified: 24,
        accepting: false,
        avatar: "https://placehold.co/120x120?text=SA"
    },
    {
        id: 3,
        name: "Nakamura Yuki",
        specialty: "Ceramic Glazing",
        location: "Arita",
        rating: 4.6,
        reviews: 42,
        certified: 89,
        accepting: true,
        avatar: "https://placehold.co/120x120?text=NY"
    }
];

const BrowseMasters = () => {
    return (
        <div className="browse-masters-container">
            <FiltersBar />

            <div className="masters-grid">
                {DUMMY_MASTERS.map(master => (
                    <BrowseMasterCard key={master.id} master={master} />
                ))}
                {/* Repeating dummy data to fill grid for demo */}
                {DUMMY_MASTERS.map(master => (
                    <BrowseMasterCard key={`repeat-${master.id}`} master={{ ...master, id: `repeat-${master.id}` }} />
                ))}
            </div>
        </div>
    );
};

export default BrowseMasters;
