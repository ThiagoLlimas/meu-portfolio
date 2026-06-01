import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const bannerVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50 p-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">
                    Política de Cookies:
                  </span>{" "}
                  Este site utiliza cookies para analisar o tráfego e melhorar
                  sua experiência de navegação. Ao continuar, você concorda com
                  nossa política de privacidade em conformidade com a LGPD.
                </p>
              </div>
              <motion.button
                onClick={handleAccept}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-destaque text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-destaque transition-colors duration-300 whitespace-nowrap"
              >
                Aceitar
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
