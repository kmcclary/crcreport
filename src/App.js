import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerNavBar from './components/ui/BannerNavBar';
import Settings from './components/ui/Settings';
import MicrobiomeCRCReport from './components/ui/MicrobiomeCRCReport';

// Define reportData if needed by your components
const reportData = {
  user_name: "Jane Smith",
  report_date: "November 10, 2024",
  level: {
    current: 3,
    title: "Health Challenger",
    points_to_next: 16
  },
  scores: {
    total: 54.5,
    base: 18.5,
    action_points: 26,
    streak_bonus: 10
  },
  current_profile: {
    ETF: 0.6,
    ETB: 0.2,
    ETP: 0.1,
    ETX: 0.1,
    date: "November 10, 2024"
  },
  previous_profile: {
    ETF: 0.7,
    ETB: 0.15,
    ETP: 0.1,
    ETX: 0.05,
    date: "October 10, 2024"
  },
  streak: {
    days: 14,
    message: "🔥 Maximum bonus achieved!"
  },
  enterotype_profile: {
    ETF: 0.6,
    ETB: 0.2,
    ETP: 0.1,
    ETX: 0.1
  }
};

const App = () => (
  <BrowserRouter >
    <BannerNavBar />
    <div className="bg-transparent min-h-screen pt-16 md:pt-16 w-full max-w-4xl mx-auto bg-white p-4 md:p-8 space-y-6 md:space-y-8">
      <Routes>
        <Route path="/" element={<MicrobiomeCRCReport />} />
        <Route path="*" element={<MicrobiomeCRCReport />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </div>
  </BrowserRouter>
);

export default App;