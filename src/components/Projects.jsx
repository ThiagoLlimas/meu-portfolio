import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import imgCulinaria from "../assets/culinaria2.webp";
import imgServicos from "../assets/servicos2.webp";
import imgSaude from "../assets/saude2.webp";
import imgViagens from "../assets/viagens2.webp";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Cumaru",
      description:
        "Plataforma de e-commerce gastronômico construída com JavaScript e Vite. O principal foco técnico consistiu em criar um ecossistema de componentes escaláveis, integrar fluxos dinâmicos de reserva/pedidos via API e garantir renderização eficiente na interface. Conta com navegação responsiva, estado centralizado e boas práticas de acessibilidade e performance web.",
      tech: ["Vite", "JavaScript", "REST API"],
      image: imgCulinaria,
      demoUrl: "https://cumaru-receitas.netlify.app/",
      codeUrl: "https://github.com/ThiagoLlimas/projeto-culinaria",
    },
    {
      title: "Serviços Locais",
      description:
        "Aplicação web interativa para busca e filtragem de serviços em tempo real. O foco técnico esteve no consumo de API REST para renderização dinâmica de listas, manipulação de estado do client-side e estilização performática utilizando Tailwind CSS. Conta com lógica de busca por parâmetros, tratamento de estados de carregamento (loading/error) e interface totalmente responsiva.",
      tech: ["JavaScript", "Tailwind CSS", "REST API"],
      image: imgServicos,
      demoUrl: "https://thiagollimas.github.io/servicos-locais/",
      codeUrl: "https://github.com/ThiagoLlimas/servicos-locais",
    },
    {
      title: "Portal Saúde",
      description:
        "Plataforma médica para agendamento e consulta de especialidades construída em React e Tailwind CSS. Implementa formulários dinâmicos com validações no front-end, proteção contra envio automatizado e integração com backend via Google Apps Script / API. Destaca-se pela otimização de assets com SVGs leves e componentes reutilizáveis.",
      tech: ["React", "Tailwind CSS", "Google Apps Script", "REST API"],
      image: imgSaude,
      demoUrl: "https://portal-saude-page.vercel.app/",
      codeUrl: "https://github.com/ThiagoLlimas/portal-saude",
    },
    {
      title: "Serviços de Viagens",
      description:
        "Aplicação de turismo estruturada com arquitetura modular e navegação entre múltiplas visões. O projeto aborda roteamento de páginas, formulários interativos com validação de dados de reserva e requisições assíncronas para carregamento de destinos. Conta com técnicas de otimização de imagens (lazy loading) para manter o tempo de carregamento reduzido.",
      tech: ["JavaScript", "HTML / CSS", "REST API"],
      image: imgViagens,
      demoUrl: "https://servicos-viagens.vercel.app/",
      codeUrl: "https://github.com/ThiagoLlimas/servicos-viagens",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevProject();
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Projetos em <span className="text-destaque">Destaque</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Projetos focados em boas práticas de código, componentização
            eficiente e consumo de APIs.
          </p>
        </motion.div>

        <div className="relative mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.title}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="h-auto md:h-[500px] lg:h-[550px] bg-slate-900 rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row shadow-2xl"
            >
              {/* Lado Esquerdo - Conteúdo (40%) */}
              <div className="w-full md:w-[45%] py-8 px-16 lg:px-20 flex flex-col items-center justify-center text-center gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    {currentProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {currentProject.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium text-slate-900 bg-destaque rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 w-full mt-2">
                    <motion.a
                      href={currentProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-destaque text-slate-900 px-8 py-3 text-lg font-semibold w-full sm:w-auto rounded-lg hover:bg-destaque transition-colors duration-300 text-center"
                    >
                      Ver Projeto
                    </motion.a>
                    <motion.a
                      href={currentProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-destaque text-destaque px-8 py-3 text-lg font-semibold w-full sm:w-auto rounded-lg hover:bg-destaque hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Ver Código
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Imagem (60%) */}
              <a
                href={currentProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[60%] relative h-64 md:h-full block overflow-hidden group cursor-pointer"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Botões de Navegação */}
          <button
            onClick={handlePrev}
            className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-700/80 transition-all duration-300 z-10"
            aria-label="Projeto anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-700/80 transition-all duration-300 z-10"
            aria-label="Próximo projeto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicadores de Projeto */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-destaque w-8"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-destaque text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-destaque transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Quer saber mais sobre minha trajetória tech?
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
