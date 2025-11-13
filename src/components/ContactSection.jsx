import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, MessageSquareIcon } from 'lucide-react';

const ContactSection = () => {
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
};

export default ContactSection;
