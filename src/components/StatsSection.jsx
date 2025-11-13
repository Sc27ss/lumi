import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UsersIcon, BookOpenIcon, TrophyIcon, ClockIcon } from 'lucide-react';
import CountUpAnimation from './CountUpAnimation';

const StatsSection = () => {
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
};

export default StatsSection;
