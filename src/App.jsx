import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// ... imports ...

function App() {
    return (
        <HashRouter>
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
        </HashRouter>
    );
}

export default App;
