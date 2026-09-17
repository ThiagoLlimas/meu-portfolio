import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML/CSS",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "Git & GitHub",
    "PostgreSQL",
    "SQL",
    "Vite",
    "Clean Code",
    "Deployment",
    "Responsive Design",
    "Performance Optimization",
    "UI/UX",
    "Arquitetura de Software",
    "Supabase",
    "REST APIs",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Sobre <span className="text-destaque">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-destaque mx-auto rounded-full mb-12"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Muito prazer, sou o Thiago Lima. Desenvolvedor Front-end focado na
            criação de interfaces web modernas, responsivas e orientadas a
            performance, acessibilidade e experiência do usuário.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-destaque/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-destaque mb-4">
              Formação Acadêmica
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              <strong className="text-white">
                Análise e Desenvolvimento de Sistemas (ADS)
              </strong>{" "}
              - Graduado pelo Centro Universitário Internacional (Uninter).
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Minha formação em Análise e Desenvolvimento de Sistemas me deu uma
              base sólida em algoritmos, estrutura de dados e arquitetura de
              software. Aplico no dia a dia do front-end as melhores práticas de
              engenharia — como código limpo, componentização modular e
              otimização de performance — para entregar aplicações web robustas,
              escaláveis e de fácil manutenção.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-destaque/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-destaque mb-4">
              Filosofia de Desenvolvimento
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enxergo o front-end como a ponte essencial entre as regras de
              negócio de um produto e a experiência final do usuário. Abordo o
              desenvolvimento com foco em resolução de problemas, escrevendo
              código organizado e manutenível. Busco integrar design funcional
              (UI) e navegação fluida (UX) a uma arquitetura sólida, garantindo
              entregas de alto impacto técnico e facilidade de evolução para o
              time de engenharia.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-destaque/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-destaque mb-6">
              Tecnologias & Habilidades
            </h3>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(var(--cor-destaque))",
                  }}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-medium border border-slate-700 hover:border-destaque hover:text-destaque transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-destaque/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-destaque mb-6">
              Diferenciais Técnicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(var(--cor-destaque))",
                }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-destaque transition-all duration-300 cursor-default"
              >
                <h4 className="text-xl font-bold text-destaque mb-3">
                  SEO - HTML Semântico & SEO Técnico
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Estruturação semântica em HTML5, garantindo acessibilidade web
                  (A11y), boas práticas de SEO técnico e excelente indexação em
                  motores de busca.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(var(--cor-destaque))",
                }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-destaque transition-all duration-300 cursor-default"
              >
                <h4 className="text-xl font-bold text-destaque mb-3">
                  LGPD - Conformidade & LGPD
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Implementação de fluxos de gestão de consentimento (cookie
                  banners), tratamento consciente de dados no client-side e
                  adequação às diretrizes de privacidade da LGPD.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(var(--cor-destaque))",
                }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-destaque transition-all duration-300 cursor-default"
              >
                <h4 className="text-xl font-bold text-destaque mb-3">
                  Métricas - Web Analytics & Telemetria
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integração de Google Tag Manager (GTM) e Google Analytics 4
                  para rastreamento de eventos personalizados, métricas de
                  navegação e monitoramento de comportamento do usuário.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(var(--cor-destaque))",
                }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-destaque transition-all duration-300 cursor-default"
              >
                <h4 className="text-xl font-bold text-destaque mb-3">
                  Performance - Performance & Core Web Vitals
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Aplicação de técnicas de otimização de carregamento usando
                  bundlers modernos (Vite), code splitting, lazy loading de
                  assets e otimização de renderização no front-end.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/curriculo-thiago.pdf"
              download="curriculo-thiago.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-destaque text-destaque font-semibold rounded-lg hover:bg-destaque hover:text-slate-900 hover:border-destaque transition-colors duration-300"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Baixar Currículo (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
