import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ClipboardCheckIcon,
  TargetIcon,
  SparklesIcon as SparklesIcon2,
  TrendingUpIcon as TrendingUpIcon2,
  TrophyIcon as TrophyIcon2,
} from 'lucide-react';

const MethodologySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(null);
  const steps = [
    {
      icon: <ClipboardCheckIcon className="w-8 h-8" />,
      title: 'Diagnóstico inicial',
      description: 'Evaluamos tu nivel actual y identificamos áreas de oportunidad para crear una base sólida.',
    },
    {
      icon: <TargetIcon className="w-8 h-8" />,
      title: 'Plan personalizado',
      description: 'Diseñamos un programa de estudio adaptado a tus objetivos, ritmo y estilo de aprendizaje.',
    },
    {
      icon: <SparklesIcon2 className="w-8 h-8" />,
      title: 'Tutorías dinámicas',
      description: 'Sesiones interactivas y prácticas donde transformamos conceptos complejos en conocimiento aplicable.',
    },
    {
      icon: <TrendingUpIcon2 className="w-8 h-8" />,
      title: 'Seguimiento constante',
      description: 'Monitoreamos tu progreso continuamente y ajustamos estrategias para maximizar resultados.',
    },
    {
      icon: <TrophyIcon2 className="w-8 h-8" />,
      title: 'Resultados reales',
      description: 'Celebramos tus logros mientras construimos confianza y pasión por el aprendizaje.',
    },
  ];

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0fffe 100%)', paddingBottom: '200px' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
          >
            El Camino del Aprendizaje
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#2aa198' }}
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Nuestro método probado te guía paso a paso hacia el éxito académico
          </p>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-between max-w-6xl mx-auto px-12">
              <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2" style={{ zIndex: 0 }}>
                <motion.line
                  x1="10%"
                  y1="50%"
                  x2="90%"
                  y2="50%"
                  stroke="#2aa198"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              {inView && (
                <motion.div
                  className="absolute top-1/2 left-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#2aa198' }}
                  animate={{ x: ['10%', '90%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              )}
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="relative z-10"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <motion.div
                    className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer relative"
                    style={{
                      backgroundColor: '#2aa198',
                      boxShadow: activeStep === index ? '0 0 40px rgba(42, 161, 152, 0.6)' : '0 0 20px rgba(42, 161, 152, 0.3)',
                    }}
                    whileHover={{ scale: 1.15 }}
                    animate={activeStep === index ? { scale: 1.15 } : { scale: 1 }}
                  >
                    <div className="text-white">{step.icon}</div>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#2aa198' }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                  <p
                    className="text-center mt-4 font-semibold text-sm max-w-[120px]"
                    style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    {step.title}
                  </p>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-8 left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl p-6 shadow-2xl z-20"
                        style={{ border: '2px solid #2aa198' }}
                      >
                        <div
                          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"
                          style={{ borderTop: '2px solid #2aa198', borderLeft: '2px solid #2aa198' }}
                        />
                        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6"
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#2aa198', boxShadow: '0 0 20px rgba(42, 161, 152, 0.3)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white">{step.icon}</div>
                </motion.div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
