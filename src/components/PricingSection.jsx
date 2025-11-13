import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';

const PricingSection = () => {
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
};

export default PricingSection;
