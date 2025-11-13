import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AwardIcon, HeartIcon, BookOpenIcon, StarIcon, UsersIcon, TrophyIcon } from 'lucide-react';

const AboutSection = () => {
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
};

export default AboutSection;
