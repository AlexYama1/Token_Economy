import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import BrowseMasters from './pages/BrowseMasters/BrowseMasters';
import MasterProfile from './pages/MasterProfile/MasterProfile';
import MyCurriculum from './pages/MyCurriculum/MyCurriculum';
import Certification from './pages/Certification/Certification';
import MasterLayout from './layouts/MasterLayout';
import MasterDashboard from './pages/MasterDashboard/MasterDashboard';
import MyStudents from './pages/MyStudents/MyStudents';
import Royalties from './pages/Royalties/Royalties';
import Treasury from './pages/Treasury/Treasury';

import WalletDetail from './pages/WalletDetail/WalletDetail';
import Settings from './pages/Settings/Settings';


function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="masters" element={<BrowseMasters />} />
                    <Route path="masters/:id" element={<MasterProfile />} />
                    <Route path="curriculum" element={<MyCurriculum />} />
                    <Route path="/certification" element={<Certification />} />
                </Route>

                {/* Master Routes */}
                <Route element={<MasterLayout />}>
                    <Route path="/master/dashboard" element={<MasterDashboard />} />
                    <Route path="/master/wallet" element={<WalletDetail />} />
                    <Route path="/master/students" element={<MyStudents />} />
                    <Route path="/master/royalties" element={<Royalties />} />
                    <Route path="/master/settings" element={<Settings />} />
                    <Route path="/treasury" element={<Treasury />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
