import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const TestimonialsSection = () => {
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
};

export default TestimonialsSection;
