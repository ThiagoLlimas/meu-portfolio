import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "Git",
    "Banco de Dados",
    "Vite/Build",
    "Responsive Design",
    "Performance Optimization",
    "UI/UX",
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
            Muito prazer, sou o THIAGO LIMA. Desenvolvedor Front-end
            especializado em transformar ideias em interfaces web modernas,
            responsivas e focadas em conversão.
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
              Minha base acadêmica me deu o alicerce sólido em algoritmos e
              arquitetura de software, mas é a prática diária no front-end que
              me faz dominar a criação de soluções modernas. Eu não construo
              apenas telas; eu aplico as melhores práticas de engenharia para
              garantir que o seu projeto seja seguro, escalável e eficiente de
              ponta a ponta.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-destaque/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-destaque mb-4">
              Foco em Resultados Reais
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Para mim, código é apenas o meio; o objetivo final é o crescimento
              do seu negócio. Como desenvolvedor freelancer, minha missão é
              traduzir a sua necessidade em uma plataforma rápida e intuitiva.
              Abordo cada projeto buscando o equilíbrio perfeito entre um design
              incrível (UI), uma navegação fluida que retém o usuário (UX) e a
              performance necessária para converter visitantes em clientes.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Abordo cada projeto com uma mentalidade de resolução de problemas,
              buscando sempre o equilíbrio perfeito entre performance,
              experiência do usuário e objetivos de negócio. Acredito que um bom
              software não é apenas funcional, mas deve ser uma ferramenta
              estratégica para o crescimento do cliente.
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
                <h4 className="text-xl font-bold text-destaque mb-3">SEO</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Estruturação semântica focada em indexação e visibilidade
                  orgânica nos motores de busca (Google).
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(var(--cor-destaque))",
                }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-destaque transition-all duration-300 cursor-default"
              >
                <h4 className="text-xl font-bold text-destaque mb-3">LGPD</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Desenvolvimento consciente e seguro, respeitando a privacidade
                  e a conformidade com a proteção de dados (com suporte do nosso
                  CookieBanner).
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
                  Métricas
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integração profissional com Google Tag Manager e Analytics
                  para monitoramento do comportamento dos usuários.
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
                  Performance
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Código otimizado com Vite e Tailwind, garantindo carregamento
                  ultra-rápido e excelente experiência de usuário (UX).
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/Curriculo-Thiago-Lima.pdf"
              download="Curriculo-Thiago-Lima.pdf"
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
