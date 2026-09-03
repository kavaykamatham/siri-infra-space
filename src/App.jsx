import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PropertyGrid from './components/PropertyGrid';
import PropertyModal from './components/PropertyModal';
import ServicesSection from './components/ServicesSection';
import EmiCalculator from './components/EmiCalculator';
import AboutUs from './components/AboutUs';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import SiteVisitModal from './components/SiteVisitModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import { properties } from './data/properties';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const [filters, setFilters] = useState({
    category: 'All',
    locality: 'All Localities',
    bhk: 'Any BHK',
    budget: 'all',
    possession: 'Any Possession'
  });

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [siteVisitProperty, setSiteVisitProperty] = useState(null);

  const handleOpenSiteVisit = (property = null) => {
    setSiteVisitProperty(property);
    setSiteVisitModalOpen(true);
  };

  const handleCloseSiteVisit = () => {
    setSiteVisitModalOpen(false);
    setSiteVisitProperty(null);
  };

  const handleNavigateToProperties = () => {
    setCurrentTab('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLocalitySelect = (localityName) => {
    let filterVal = 'All Localities';
    if (localityName.includes('Kukatpally') || localityName.includes('KPHB')) filterVal = 'Kukatpally / KPHB';
    else if (localityName.includes('Hafeezpet') || localityName.includes('Miyapur')) filterVal = 'Hafeezpet';
    else if (localityName.includes('Kokapet') || localityName.includes('Neopolis')) filterVal = 'Kokapet / Neopolis';
    else if (localityName.includes('Financial') || localityName.includes('Gachibowli')) filterVal = 'Financial District';
    else if (localityName.includes('Tellapur') || localityName.includes('Nallagandla')) filterVal = 'Tellapur';
    else if (localityName.includes('Bachupally') || localityName.includes('Bowrampet')) filterVal = 'Bachupally';

    setFilters(prev => ({
      ...prev,
      locality: filterVal,
      category: 'All'
    }));

    setCurrentTab('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Sleek Top Navbar */}
      <Navbar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenSiteVisit={() => handleOpenSiteVisit(null)}
      />

      {/* Main Content Rendered Cleanly by Tab */}
      <main className="flex-grow pt-16">
        
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <HomePage
            filters={filters}
            setFilters={setFilters}
            onNavigateToProperties={handleNavigateToProperties}
            onNavigateToServices={() => {
              setCurrentTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToReviews={() => {
              setCurrentTab('reviews');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToContact={() => {
              setCurrentTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenSiteVisit={handleOpenSiteVisit}
          />
        )}

        {/* TAB 2: PROPERTIES */}
        {currentTab === 'properties' && (
          <div className="animate-in fade-in duration-200">
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                All Verified Properties in Hyderabad
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
                Explore luxury apartments, gated villas, commercial spaces, and HMDA-sanctioned open plots with direct developer pricing and complete title clarity.
              </p>
            </div>
            <PropertyGrid
              properties={properties}
              filters={filters}
              setFilters={setFilters}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenSiteVisit={handleOpenSiteVisit}
            />
          </div>
        )}

        {/* TAB 3: SERVICES */}
        {currentTab === 'services' && (
          <div className="animate-in fade-in duration-200">
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Real Estate Advisory & Construction Services
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
                End-to-end guidance from property acquisition and RERA legal checks to home loans and turnkey interiors.
              </p>
            </div>
            <ServicesSection
              onOpenSiteVisit={() => handleOpenSiteVisit(null)}
            />
          </div>
        )}

        {/* TAB 4: EMI CALCULATOR */}
        {currentTab === 'emi-calculator' && (
          <div className="animate-in fade-in duration-200 pt-6">
            <EmiCalculator />
          </div>
        )}

        {/* TAB 5: ABOUT US */}
        {currentTab === 'about-us' && (
          <div className="animate-in fade-in duration-200">
            <AboutUs
              onOpenSiteVisit={() => handleOpenSiteVisit(null)}
            />
          </div>
        )}

        {/* TAB 6: REVIEWS */}
        {currentTab === 'reviews' && (
          <div className="animate-in fade-in duration-200 pt-6">
            <ReviewsSection />
          </div>
        )}

        {/* TAB 7: CONTACT */}
        {currentTab === 'contact' && (
          <div className="animate-in fade-in duration-200 pt-6">
            <ContactSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer 
        setCurrentTab={setCurrentTab}
        onLocalitySelect={handleLocalitySelect}
      />

      {/* Floating Action Buttons */}
      <FloatingActions 
        onOpenSiteVisit={() => handleOpenSiteVisit(null)}
      />

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenSiteVisit={handleOpenSiteVisit}
        />
      )}

      {/* Site Visit Booking Modal */}
      {siteVisitModalOpen && (
        <SiteVisitModal
          property={siteVisitProperty}
          onClose={handleCloseSiteVisit}
        />
      )}
    </div>
  );
}
