import React, { useState, useMemo } from 'react';
import FiltersBar from './components/FiltersBar';
import BrowseMasterCard from './components/BrowseMasterCard';
import RecommendedSection from './components/RecommendedSection';
import MapView from './components/MapView';
import './BrowseMasters.css';

// Diverse international masters from various countries and specializations
const ALL_MASTERS = [
    // Japan
    {
        id: 1,
        name: "Yamamoto Kenji",
        specialty: "Urushi Lacquer",
        category: "Lacquerwork",
        location: "Kanazawa, Japan",
        country: "Japan",
        coordinates: { lat: 36.5613, lng: 136.6562 },
        rating: 4.9,
        reviews: 31,
        certified: 58,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Suzuki Akiko",
        specialty: "Washi Paper",
        category: "Paper Arts",
        location: "Echizen, Japan",
        country: "Japan",
        coordinates: { lat: 35.9043, lng: 136.1685 },
        rating: 4.7,
        reviews: 18,
        certified: 24,
        accepting: false,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Nakamura Yuki",
        specialty: "Ceramic Glazing",
        category: "Ceramics",
        location: "Arita, Japan",
        country: "Japan",
        coordinates: { lat: 33.1833, lng: 129.8667 },
        rating: 4.6,
        reviews: 42,
        certified: 89,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "Tanaka Hiroshi",
        specialty: "Temple Carpentry",
        category: "Woodworking",
        location: "Kyoto, Japan",
        country: "Japan",
        coordinates: { lat: 35.0116, lng: 135.7681 },
        rating: 4.95,
        reviews: 67,
        certified: 47,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    // Italy
    {
        id: 5,
        name: "Marco Bianchi",
        specialty: "Venetian Glassblowing",
        category: "Glasswork",
        location: "Murano, Italy",
        country: "Italy",
        coordinates: { lat: 45.4583, lng: 12.3519 },
        rating: 4.8,
        reviews: 56,
        certified: 34,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 6,
        name: "Giulia Rossi",
        specialty: "Florentine Leather",
        category: "Leatherwork",
        location: "Florence, Italy",
        country: "Italy",
        coordinates: { lat: 43.7696, lng: 11.2558 },
        rating: 4.75,
        reviews: 29,
        certified: 21,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    // France
    {
        id: 7,
        name: "Pierre Dubois",
        specialty: "Tapestry Weaving",
        category: "Textiles",
        location: "Aubusson, France",
        country: "France",
        coordinates: { lat: 45.9572, lng: 2.1694 },
        rating: 4.85,
        reviews: 38,
        certified: 27,
        accepting: false,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 8,
        name: "Marie Laurent",
        specialty: "Porcelain Painting",
        category: "Ceramics",
        location: "Limoges, France",
        country: "France",
        coordinates: { lat: 45.8336, lng: 1.2611 },
        rating: 4.7,
        reviews: 22,
        certified: 15,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    // Germany
    {
        id: 9,
        name: "Hans Mueller",
        specialty: "Clockmaking",
        category: "Metalwork",
        location: "Black Forest, Germany",
        country: "Germany",
        coordinates: { lat: 48.0000, lng: 8.2000 },
        rating: 4.9,
        reviews: 45,
        certified: 31,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face"
    },
    // Korea
    {
        id: 10,
        name: "Kim Soo-jin",
        specialty: "Celadon Pottery",
        category: "Ceramics",
        location: "Icheon, South Korea",
        country: "South Korea",
        coordinates: { lat: 37.2792, lng: 127.4425 },
        rating: 4.8,
        reviews: 33,
        certified: 42,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    // Morocco
    {
        id: 11,
        name: "Ahmed El-Fassi",
        specialty: "Zellige Tilework",
        category: "Ceramics",
        location: "Fez, Morocco",
        country: "Morocco",
        coordinates: { lat: 34.0181, lng: -5.0078 },
        rating: 4.85,
        reviews: 28,
        certified: 19,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    // India
    {
        id: 12,
        name: "Priya Sharma",
        specialty: "Block Printing",
        category: "Textiles",
        location: "Jaipur, India",
        country: "India",
        coordinates: { lat: 26.9124, lng: 75.7873 },
        rating: 4.7,
        reviews: 41,
        certified: 56,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    // Mexico
    {
        id: 13,
        name: "Carlos Mendez",
        specialty: "Talavera Pottery",
        category: "Ceramics",
        location: "Puebla, Mexico",
        country: "Mexico",
        coordinates: { lat: 19.0414, lng: -98.2063 },
        rating: 4.65,
        reviews: 35,
        certified: 28,
        accepting: false,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=150&h=150&fit=crop&crop=face"
    },
    // Peru
    {
        id: 14,
        name: "Elena Quispe",
        specialty: "Andean Weaving",
        category: "Textiles",
        location: "Cusco, Peru",
        country: "Peru",
        coordinates: { lat: -13.5319, lng: -71.9675 },
        rating: 4.8,
        reviews: 24,
        certified: 18,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face"
    },
    // China
    {
        id: 15,
        name: "Li Wei",
        specialty: "Silk Embroidery",
        category: "Textiles",
        location: "Suzhou, China",
        country: "China",
        coordinates: { lat: 31.2990, lng: 120.5853 },
        rating: 4.9,
        reviews: 52,
        certified: 67,
        accepting: true,
        avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=face"
    }
];

const CATEGORIES = ['All', 'Ceramics', 'Textiles', 'Woodworking', 'Metalwork', 'Glasswork', 'Leatherwork', 'Lacquerwork', 'Paper Arts'];
const COUNTRIES = ['All', 'Japan', 'Italy', 'France', 'Germany', 'South Korea', 'Morocco', 'India', 'Mexico', 'Peru', 'China'];
const SORT_OPTIONS = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviews' },
    { value: 'certified', label: 'Most Certified' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'distance', label: 'Nearest First' }
];

const BrowseMasters = () => {
    const [filters, setFilters] = useState({
        category: 'All',
        country: 'All',
        availability: 'All',
        sortBy: 'rating'
    });
    const [showMap, setShowMap] = useState(false);
    const [userLocation] = useState({ lat: 35.6762, lng: 139.6503 }); // Default: Tokyo

    // Calculate distance between two coordinates (Haversine formula)
    const calculateDistance = (lat1, lng1, lat2, lng2) => {
        const R = 6371; // Earth's radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    // Filter and sort masters
    const filteredMasters = useMemo(() => {
        let result = ALL_MASTERS.map(master => ({
            ...master,
            distance: calculateDistance(
                userLocation.lat, userLocation.lng,
                master.coordinates.lat, master.coordinates.lng
            )
        }));

        // Apply filters
        if (filters.category !== 'All') {
            result = result.filter(m => m.category === filters.category);
        }
        if (filters.country !== 'All') {
            result = result.filter(m => m.country === filters.country);
        }
        if (filters.availability === 'accepting') {
            result = result.filter(m => m.accepting);
        }

        // Apply sorting
        switch (filters.sortBy) {
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'reviews':
                result.sort((a, b) => b.reviews - a.reviews);
                break;
            case 'certified':
                result.sort((a, b) => b.certified - a.certified);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'distance':
                result.sort((a, b) => a.distance - b.distance);
                break;
            default:
                break;
        }

        return result;
    }, [filters, userLocation]);

    // Get recommended masters (high rated + accepting)
    const recommendedMasters = useMemo(() => {
        return ALL_MASTERS
            .filter(m => m.accepting && m.rating >= 4.8)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4);
    }, []);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="browse-masters-container">
            <FiltersBar
                filters={filters}
                categories={CATEGORIES}
                countries={COUNTRIES}
                sortOptions={SORT_OPTIONS}
                onFilterChange={handleFilterChange}
                showMap={showMap}
                onToggleMap={() => setShowMap(!showMap)}
                resultCount={filteredMasters.length}
            />

            {/* Recommended Section */}
            <RecommendedSection masters={recommendedMasters} />

            {/* Map View Toggle */}
            {showMap && (
                <MapView
                    masters={filteredMasters}
                    userLocation={userLocation}
                />
            )}

            {/* Masters Grid */}
            <div className="masters-grid">
                {filteredMasters.map(master => (
                    <BrowseMasterCard key={master.id} master={master} />
                ))}
            </div>

            {filteredMasters.length === 0 && (
                <div className="no-results">
                    <p>No masters found matching your criteria.</p>
                    <button onClick={() => setFilters({ category: 'All', country: 'All', availability: 'All', sortBy: 'rating' })}>
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default BrowseMasters;
