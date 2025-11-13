import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareIcon } from 'lucide-react';

const FloatingWhatsAppButton = () => {
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
};

export default FloatingWhatsAppButton;
