import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MonitorIcon, HomeIcon, RepeatIcon } from 'lucide-react';

const ModalitiesSection = () => {
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
};

export default ModalitiesSection;
