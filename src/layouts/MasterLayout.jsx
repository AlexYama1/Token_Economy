import React from 'react';
import { Outlet } from 'react-router-dom';
import MasterSidebar from './MasterSidebar';
import './MainLayout.css'; // Reuse main layout styles

const MasterLayout = () => {
    return (
        <div className="main-layout">
            <MasterSidebar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default MasterLayout;
