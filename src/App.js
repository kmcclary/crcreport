import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerNavBar from './components/ui/BannerNavBar';
import MicrobiomeCRCReport from './components/ui/MicrobiomeCRCReport';



const App = () => (
  <BrowserRouter basename="/guthealthreport">
    <BannerNavBar />
    <div className="bg-transparent min-h-screen pt-16 md:pt-16 w-full max-w-4xl mx-auto bg-white p-4 md:p-8 space-y-6 md:space-y-8">
      <Routes>
        <Route path="/" element={<MicrobiomeCRCReport />} />
        {/* Handle unmatched routes */}
        <Route path="*" element={<MicrobiomeCRCReport />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;