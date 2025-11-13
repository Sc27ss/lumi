import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SparklesIcon,
  ArrowRightIcon,
  AwardIcon,
  HeartIcon,
  BookOpenIcon,
  StarIcon,
  UsersIcon,
  TrophyIcon,
  CalculatorIcon,
  AtomIcon,
  FlaskConicalIcon,
  LanguagesIcon,
  DnaIcon,
  XIcon,
  BrainIcon,
  RulerIcon,
  TrendingUpIcon,
  BookIcon,
  ShapesIcon,
  BarChartIcon,
  LaptopIcon,
  ScaleIcon,
  MoreHorizontalIcon,
  MailIcon,
  MessageSquareIcon,
  UserIcon,
  MessageCircleIcon,
  ClipboardCheckIcon,
  TargetIcon,
  SparklesIcon as SparklesIcon2,
  TrendingUpIcon as TrendingUpIcon2,
  TrophyIcon as TrophyIcon2,
  MonitorIcon,
  HomeIcon,
  RepeatIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon
} from 'lucide-react';

function HeroSection() {
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
}

function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
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
            Sobre Nosotros
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#2aa198' }}
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-full aspect-square rounded-2xl shadow-2xl overflow-hidden relative"
                style={{ backgroundColor: '#1e2a78' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                      style={{ backgroundColor: '#2aa198' }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className="text-6xl font-bold text-white"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      >
                        AV
                      </span>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#2aa198' }}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 1, duration: 0.3 }}
                      >
                        <StarIcon className="w-5 h-5 text-white fill-current" />
                      </motion.div>
                    </motion.div>
                    <p className="text-white text-xl font-semibold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Andrés Valencia Mena
                    </p>
                    <p className="text-white/80 mt-2">Fundador & Tutor</p>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>5+</p>
                        <p className="text-white/70 text-sm">Años</p>
                      </div>
                      <div className="w-px bg-white/20" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>200+</p>
                        <p className="text-white/70 text-sm">Estudiantes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: '#2aa198' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: '#1e2a78' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
            >
              Andrés Valencia Mena
            </h3>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              Fundador de Lúmine Academy, con años de experiencia en educación
              personalizada. Mi filosofía se centra en adaptar cada sesión a las
              necesidades únicas del estudiante, creando un ambiente de
              confianza donde el aprendizaje se convierte en una experiencia
              gratificante y transformadora.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              Creo firmemente que cada estudiante tiene su propio ritmo y estilo
              de aprendizaje. Mi compromiso es ayudarte a descubrir tu
              potencial, superar obstáculos académicos y desarrollar una
              verdadera pasión por el conocimiento.
            </motion.p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: AwardIcon, label: 'Excelencia' },
                { icon: HeartIcon, label: 'Dedicación' },
                { icon: BookOpenIcon, label: 'Conocimiento' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#2aa198' }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: UsersIcon, value: '200+', label: 'Estudiantes atendidos' },
            { icon: TrophyIcon, value: '95%', label: 'Tasa de éxito' },
            { icon: StarIcon, value: '5.0', label: 'Calificación promedio' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(42, 161, 152, 0.1)' }}
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className="w-7 h-7" style={{ color: '#2aa198' }} />
              </motion.div>
              <p
                className="text-3xl font-bold mb-2"
                style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                {stat.value}
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
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
}

function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'María González',
      role: 'Estudiante de Bachillerato',
      content: 'Andrés tiene una paciencia increíble y explica todo de forma muy clara. Gracias a sus tutorías, mejoré mis notas en matemáticas de un 6 a un 9. ¡Totalmente recomendado!',
      rating: 5,
    },
    {
      name: 'Carlos Ramírez',
      role: 'Padre de familia',
      content: 'Mi hijo estaba teniendo dificultades con física y química. Después de tres meses con Lúmine Academy, no solo mejoró sus calificaciones, sino que ahora realmente disfruta estas materias.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Estudiante Universitaria',
      content: 'Las sesiones personalizadas me ayudaron a entender conceptos complejos de cálculo que nunca había comprendido. Andrés adapta cada clase a mi ritmo y necesidades específicas.',
      rating: 5,
    },
    {
      name: 'Laura Sánchez',
      role: 'Madre de dos estudiantes',
      content: 'Ambos mis hijos reciben tutorías con Andrés. Su metodología es excepcional y ha transformado la manera en que ven el aprendizaje. Estamos muy agradecidos.',
      rating: 5,
    },
  ];
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#2aa198' }} />
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-6 h-6 fill-current"
                    style={{ color: '#2aa198' }}
                  />
                ))}
              </div>
              <p
                className="text-2xl text-gray-700 mb-8 leading-relaxed text-center italic"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                "{testimonials[currentIndex].content}"
              </p>
              <div className="text-center">
                <p
                  className="font-bold text-xl mb-1"
                  style={{ color: '#1e2a78', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: '#2aa198' }}
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: '#2aa198' }}
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentIndex ? '#2aa198' : '#d1d5db',
                transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const whatsappNumber = '573122644682';
  const whatsappMessage = encodeURIComponent('Hola, estoy interesado en acceder a las tutorías de Lúmine Academy');
  const email = 'lumineacademycontact@gmail.com';
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#1e2a78' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            Contáctanos
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#2aa198' }} />
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            ¿Listo para comenzar tu camino hacia el éxito académico? Estamos aquí para ayudarte
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-3xl font-bold mb-6 text-white text-center"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Formas de contacto
              </h3>
              <p className="text-white/80 text-lg mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Elige la forma que prefieras para comunicarte con nosotros. Estamos disponibles para responder todas tus dudas.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: '#2aa198' }}
              >
                <MessageSquareIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  WhatsApp
                </p>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  Chatea con nosotros
                </p>
              </div>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-6 rounded-xl bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: '#2aa198' }}
              >
                <MailIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Email
                </p>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  {email}
                </p>
              </div>
            </a>
            <div className="p-6 rounded-xl bg-white/10 border-2 border-white/20">
              <h4 className="text-white font-semibold text-lg mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Horario de atención
              </h4>
              <p className="text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Lunes a Viernes: 9:00 AM - 8:00 PM
              </p>
              <p className="text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Sábados: 10:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            © 2025 Lúmine Academy - Todos los derechos reservados
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

function WhyLumineSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const features = [
    {
      icon: <UserIcon className="w-8 h-8" />,
      title: 'Enseñanza personalizada',
      description: 'Adaptamos cada sesión a tu ritmo y estilo de aprendizaje único',
    },
    {
      icon: <MessageCircleIcon className="w-8 h-8" />,
      title: 'Comunicación constante',
      description: 'Mantente informado sobre tu progreso y áreas de mejora',
    },
    {
      icon: <AwardIcon className="w-8 h-8" />,
      title: 'Resultados reales',
      description: 'Mejora tangible en calificaciones y comprensión de conceptos',
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Acompañamiento integral',
      description: 'Apoyo continuo en todo tu proceso de aprendizaje',
    },
  ];
  return (
    <section id="why-lumine" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
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
            ¿Por qué Lúmine Academy?
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#2aa198' }}
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Nos distinguimos por nuestro compromiso con la excelencia académica y el desarrollo integral de cada estudiante.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(42, 161, 152, 0.1)' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ color: '#2aa198' }}>{feature.icon}</div>
              </motion.div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1e2a78' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsAppButton() {
  const whatsappNumber = '573122644682';
  const whatsappMessage = encodeURIComponent('Hola, estoy interesado en acceder a las tutorías de Lúmine Academy');
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#25D366' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#25D366' }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#25D366' }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
          style={{ backgroundColor: '#25D366' }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MessageSquareIcon className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </motion.a>
  );
}

function CountUpAnimation({ end, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 2000;
    const startValue = 0;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, inView]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const stats = [
    { icon: <UsersIcon className="w-8 h-8" />, value: 200, suffix: '+', label: 'Estudiantes satisfechos' },
    { icon: <BookOpenIcon className="w-8 h-8" />, value: 15, suffix: '+', label: 'Materias disponibles' },
    { icon: <TrophyIcon className="w-8 h-8" />, value: 95, suffix: '%', label: 'Tasa de éxito' },
    { icon: <ClockIcon className="w-8 h-8" />, value: 5, suffix: '+', label: 'Años de experiencia' },
  ];
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#1e2a78' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#2aa198' }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white">{stat.icon}</div>
              </motion.div>
              <motion.p
                className="text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                <CountUpAnimation end={stat.value} suffix={stat.suffix} inView={inView} />
              </motion.p>
              <p className="text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MethodologySection() {
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
}

function ModalitiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [flippedCard, setFlippedCard] = useState(null);
  const modalities = [
    {
      icon: <MonitorIcon className="w-12 h-12" />,
      title: 'Online',
      subtitle: 'Aprende desde cualquier lugar',
      features: [
        'Clases en vivo por videollamada',
        'Pizarra digital interactiva',
        'Grabación de sesiones disponible',
        'Horarios 100% flexibles',
      ],
      color: '#2aa198',
    },
    {
      icon: <HomeIcon className="w-12 h-12" />,
      title: 'Presencial',
      subtitle: 'Interacción cara a cara',
      features: [
        'Sesiones en ubicación acordada',
        'Material didáctico físico',
        'Atención personalizada directa',
        'Ambiente de estudio óptimo',
      ],
      color: '#1e2a78',
    },
    {
      icon: <RepeatIcon className="w-12 h-12" />,
      title: 'Híbrido',
      subtitle: 'Lo mejor de ambos mundos',
      features: [
        'Combina online y presencial',
        'Máxima flexibilidad',
        'Adapta según necesidades',
        'Continuidad garantizada',
      ],
      color: '#2aa198',
    },
  ];
  return (
    <section className="py-24 px-6 bg-white">
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
            Cómo puedes aprender con nosotros
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#2aa198' }}
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Elige la modalidad que mejor se adapte a tu estilo de vida y objetivos
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modalities.map((modality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-96 perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl cursor-pointer"
                  style={{
                    backgroundColor: modality.color,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-white">{modality.icon}</div>
                  </motion.div>
                  <h3
                    className="text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  >
                    {modality.title}
                  </h3>
                  <p className="text-white/90 text-lg">{modality.subtitle}</p>
                  <motion.div
                    className="absolute bottom-8"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <p className="text-white/70 text-sm">Hover para ver más</p>
                  </motion.div>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl p-8 shadow-xl"
                  style={{
                    backgroundColor: '#ffffff',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    border: `3px solid ${modality.color}`,
                  }}
                >
                  <h4
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: modality.color }}
                  >
                    Características
                  </h4>
                  <ul className="space-y-4">
                    {modality.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          flippedCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: modality.color }}
                        />
                        <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const plans = [
    {
      name: 'Plan Básico',
      subtitle: 'Tutorías puntuales',
      description: 'Ideal para preparación de exámenes específicos',
      features: [
        'Sesiones individuales flexibles',
        'Enfoque en temas específicos',
        'Material de estudio incluido',
        'Soporte por WhatsApp',
      ],
      backgroundColor: '#ffffff',
      textColor: '#1e2a78',
      accentColor: '#2aa198',
    },
    {
      name: 'Plan Progreso',
      subtitle: 'Seguimiento semanal',
      description: 'Para estudiantes que buscan mejora continua',
      features: [
        'Todo lo del Plan Básico',
        '2-3 sesiones semanales',
        'Metas claras y medibles',
        'Reportes de progreso mensuales',
        'Acceso prioritario a horarios',
      ],
      backgroundColor: '#2aa198',
      textColor: '#2aa198',
      accentColor: '#ffffff',
      recommended: true,
    },
    {
      name: 'Plan Excelencia',
      subtitle: 'Acompañamiento anual',
      description: 'Transformación académica completa',
      features: [
        'Todo lo del Plan Progreso',
        'Sesiones ilimitadas',
        'Plan de estudio personalizado',
        'Seguimiento integral continuo',
        'Comunicación directa 24/7',
        'Garantía de resultados',
      ],
      backgroundColor: '#1e2a78',
      textColor: '#1e2a78',
      accentColor: '#2aa198',
    },
  ];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}
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
            Planes adaptados a ti
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#2aa198' }}
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Selecciona el plan que mejor se ajuste a tus objetivos y presupuesto
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-3xl p-8 shadow-xl"
              style={{
                backgroundColor: plan.backgroundColor,
                border: plan.recommended ? '3px solid #2aa198' : '2px solid transparent',
              }}
            >
              {plan.recommended && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-semibold text-sm"
                  style={{ backgroundColor: '#FF6B6B', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Más popular
                </motion.div>
              )}
              <div className="text-center mb-8">
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: plan.textColor }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-lg font-semibold mb-3"
                  style={{ color: plan.accentColor, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  {plan.subtitle}
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: plan.backgroundColor === '#ffffff' ? '#6b7280' : 'rgba(255,255,255,0.8)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: plan.accentColor }}
                    >
                      <CheckIcon
                        className="w-4 h-4"
                        style={{
                          color: plan.accentColor === '#ffffff' ? '#2aa198' : '#ffffff',
                        }}
                      />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: plan.backgroundColor === '#ffffff' ? '#374151' : 'rgba(255,255,255,0.9)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={scrollToContact}
                className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  backgroundColor: plan.backgroundColor === '#ffffff' ? '#2aa198' : '#ffffff',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar ahora
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 text-gray-600"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
        >
          ¿No estás seguro qué plan elegir?{' '}
          <button
            onClick={scrollToContact}
            className="font-semibold underline"
            style={{ color: '#2aa198', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Contáctanos
          </button>{' '}
          y te ayudaremos a encontrar la mejor opción
        </motion.p>
      </div>
    </section>
  );
}

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
