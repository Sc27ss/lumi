import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1e2a78 0%, #2d3a6e 70%, #f8f9fa 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #2aa198 0%, transparent 70%)',
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #2aa198 0%, transparent 70%)',
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #2aa198 0%, transparent 70%)',
            x: mousePosition.x * 15,
            y: mousePosition.y * 15,
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ backgroundColor: '#2aa198' }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <SparklesIcon className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-4 text-white"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
        >
          Lúmine Academy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl mb-8"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#2aa198' }}
        >
          Ilumina tu camino al conocimiento
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
        >
          Ofrecemos tutorías personalizadas que se adaptan al ritmo y objetivos
          de cada estudiante. Nuestro compromiso es ayudarte a comprender
          profundamente y disfrutar del aprendizaje.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center gap-2"
            style={{ backgroundColor: '#2aa198', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(42, 161, 152, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar tutoría
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 rounded-lg font-semibold text-white border-2 transition-all duration-300"
            style={{ borderColor: '#2aa198', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce más
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
