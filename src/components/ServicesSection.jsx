import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CalculatorIcon,
  AtomIcon,
  FlaskConicalIcon,
  LanguagesIcon,
  DnaIcon,
  XIcon,
  BrainIcon,
  RulerIcon,
  UsersIcon,
  TrendingUpIcon,
  BookIcon,
  ShapesIcon,
  BarChartIcon,
  LaptopIcon,
  ScaleIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainServices = [
    { icon: <CalculatorIcon className="w-8 h-8" />, title: 'Matemáticas', description: 'Álgebra, cálculo, geometría y más' },
    { icon: <AtomIcon className="w-8 h-8" />, title: 'Física', description: 'Mecánica, termodinámica, electromagnetismo' },
    { icon: <FlaskConicalIcon className="w-8 h-8" />, title: 'Química', description: 'Orgánica, inorgánica, bioquímica' },
    { icon: <LanguagesIcon className="w-8 h-8" />, title: 'Inglés', description: 'Gramática, conversación y comprensión' },
    { icon: <DnaIcon className="w-8 h-8" />, title: 'Biología', description: 'Celular, molecular, ecología' },
  ];

  const additionalServices = [
    { icon: <BrainIcon className="w-6 h-6" />, title: 'Filosofía' },
    { icon: <RulerIcon className="w-6 h-6" />, title: 'Dibujo técnico' },
    { icon: <UsersIcon className="w-6 h-6" />, title: 'Sociales' },
    { icon: <TrendingUpIcon className="w-6 h-6" />, title: 'Economía' },
    { icon: <BookIcon className="w-6 h-6" />, title: 'Lengua Castellana' },
    { icon: <ShapesIcon className="w-6 h-6" />, title: 'Geometría' },
    { icon: <BarChartIcon className="w-6 h-6" />, title: 'Estadística' },
    { icon: <LaptopIcon className="w-6 h-6" />, title: 'Informática' },
    { icon: <ScaleIcon className="w-6 h-6" />, title: 'Ética' },
  ];

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
          >
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#2aa198' }} />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Ofrecemos tutorías especializadas en diversas áreas del conocimiento, adaptadas a tus necesidades académicas
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50"
              style={{ borderColor: '#2aa198' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#2aa198' }}>
                <div className="text-white">{service.icon}</div>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer group"
            style={{ borderColor: '#2aa198' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform" style={{ backgroundColor: '#2aa198' }}>
              <MoreHorizontalIcon className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
            >
              Otras materias
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Haz clic para ver todas las materias disponibles
            </p>
          </motion.button>
        </div>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                style={{ boxShadow: '0 0 60px rgba(42, 161, 152, 0.3)' }}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
                  style={{ color: '#1e2a78' }}
                >
                  <XIcon className="w-6 h-6" />
                </button>
                <div className="text-center mb-10">
                  <h3
                    className="text-4xl font-bold mb-4"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
                  >
                    Todas nuestras materias
                  </h3>
                  <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    También ofrecemos tutorías especializadas en las siguientes áreas
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all border border-gray-100"
                    >
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#2aa198' }}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        {service.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <p className="text-2xl font-semibold mb-6" style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                    Y más...
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: '#2aa198', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    Solicitar ayuda
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
