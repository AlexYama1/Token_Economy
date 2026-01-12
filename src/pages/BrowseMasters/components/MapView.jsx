import React from 'react';
import './MapView.css';

const MapView = ({ masters, userLocation }) => {
    // Simple visual map representation
    // In production, this would use a real map library like Mapbox or Leaflet

    return (
        <div className="map-view-container">
            <div className="map-header">
                <h3 className="map-title">🗺️ Master Locations Worldwide</h3>
                <p className="map-subtitle">Click on markers to view master details</p>
            </div>

            <div className="map-visual">
                {/* Simplified world map representation */}
                <div className="world-map">
                    <svg viewBox="0 0 1000 500" className="map-svg">
                        {/* Simplified continent outlines */}
                        <defs>
                            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1a3a5c" />
                                <stop offset="100%" stopColor="#0d2137" />
                            </linearGradient>
                        </defs>
                        <rect width="1000" height="500" fill="url(#oceanGradient)" />

                        {/* Simplified land masses */}
                        <ellipse cx="180" cy="200" rx="120" ry="80" fill="#2a4a6a" opacity="0.6" /> {/* North America */}
                        <ellipse cx="220" cy="320" rx="60" ry="100" fill="#2a4a6a" opacity="0.6" /> {/* South America */}
                        <ellipse cx="480" cy="180" rx="100" ry="70" fill="#2a4a6a" opacity="0.6" /> {/* Europe */}
                        <ellipse cx="520" cy="280" rx="80" ry="100" fill="#2a4a6a" opacity="0.6" /> {/* Africa */}
                        <ellipse cx="700" cy="200" rx="150" ry="100" fill="#2a4a6a" opacity="0.6" /> {/* Asia */}
                        <ellipse cx="850" cy="380" rx="60" ry="40" fill="#2a4a6a" opacity="0.6" /> {/* Australia */}

                        {/* Master location markers */}
                        {masters.map((master, index) => {
                            // Convert coordinates to simplified map positions
                            const x = ((master.coordinates.lng + 180) / 360) * 1000;
                            const y = ((90 - master.coordinates.lat) / 180) * 500;

                            return (
                                <g key={master.id} className="map-marker">
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="8"
                                        fill={master.accepting ? "#22c55e" : "#f59e0b"}
                                        stroke="#fff"
                                        strokeWidth="2"
                                        className="marker-dot"
                                    />
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="16"
                                        fill={master.accepting ? "#22c55e" : "#f59e0b"}
                                        opacity="0.3"
                                        className="marker-pulse"
                                    />
                                    <title>{master.name} - {master.specialty} ({master.location})</title>
                                </g>
                            );
                        })}

                        {/* User location marker */}
                        <g className="user-marker">
                            <circle
                                cx={((userLocation.lng + 180) / 360) * 1000}
                                cy={((90 - userLocation.lat) / 180) * 500}
                                r="10"
                                fill="#60a5fa"
                                stroke="#fff"
                                strokeWidth="3"
                            />
                            <circle
                                cx={((userLocation.lng + 180) / 360) * 1000}
                                cy={((90 - userLocation.lat) / 180) * 500}
                                r="20"
                                fill="#60a5fa"
                                opacity="0.3"
                                className="pulse-ring"
                            />
                        </g>
                    </svg>
                </div>

                {/* Map Legend */}
                <div className="map-legend">
                    <div className="legend-item">
                        <span className="legend-dot accepting"></span>
                        <span>Accepting Students</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-dot not-accepting"></span>
                        <span>Not Accepting</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-dot user"></span>
                        <span>Your Location</span>
                    </div>
                </div>
            </div>

            {/* Distance list */}
            <div className="distance-list">
                <h4 className="distance-title">Masters by Distance</h4>
                <div className="distance-items">
                    {masters.slice(0, 5).map(master => (
                        <div key={master.id} className="distance-item">
                            <img src={master.avatar} alt={master.name} className="distance-avatar" />
                            <div className="distance-info">
                                <span className="distance-name">{master.name}</span>
                                <span className="distance-location">{master.location}</span>
                            </div>
                            <span className="distance-value">
                                {master.distance < 1000
                                    ? `${Math.round(master.distance)} km`
                                    : `${(master.distance / 1000).toFixed(1)}k km`
                                }
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MapView;
