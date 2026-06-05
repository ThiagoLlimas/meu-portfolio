import { motion } from "framer-motion";
import heroImg from "../assets/perfil.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="block text-destaque font-medium tracking-wider mb-2"
          >
            👋 Olá, eu sou o Thiago
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-slate-100 mb-6"
          >
            Desenvolvedor Front-end
            <span className="block text-destaque mt-2">
              Criando Experiências Digitais
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Mais do que escrever código, eu transformo as ideias do seu negócio
            em interfaces web rápidas, modernas e desenhadas estrategicamente
            para converter visitantes em clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-8 flex justify-center md:hidden"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-destaque rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-destaque shadow-[0_0_60px_-10px_rgba(var(--cor-destaque),0.3)]">
                <img
                  src={heroImg}
                  alt="Thiago - Desenvolvedor Front-end"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-destaque text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-destaque transition-colors duration-300 text-center"
            >
              Ver Meus Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-destaque text-destaque px-8 py-3 rounded-lg font-semibold hover:bg-destaque hover:text-slate-900 transition-all duration-300 text-center"
            >
              Vamos Conversar
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-destaque rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-destaque shadow-[0_0_60px_-10px_rgba(var(--cor-destaque),0.3)]">
              <img
                src={heroImg}
                alt="Thiago - Desenvolvedor Front-end"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
