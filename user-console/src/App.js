// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetail from './components/events/EventDetail'; // Import trang chi tiết sự kiện

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default App;




