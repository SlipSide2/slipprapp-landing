import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HowItWorksPage from './HowItWorksPage';
import HouseholdPage from './HouseholdPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/household" element={<HouseholdPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}
