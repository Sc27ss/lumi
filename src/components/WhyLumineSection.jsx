import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserIcon, MessageCircleIcon, AwardIcon, HeartIcon } from 'lucide-react';

const WhyLumineSection = () => {
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
};

export default WhyLumineSection;
