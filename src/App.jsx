import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MethodologySection from './components/MethodologySection';
import ModalitiesSection from './components/ModalitiesSection';
import WhyLumineSection from './components/WhyLumineSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <ModalitiesSection />
      <WhyLumineSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingWhatsAppButton />
    </div>
  );
}