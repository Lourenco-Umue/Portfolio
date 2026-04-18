import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Monitor, 
  Palette, 
  Wrench,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      desc: 'Criação de sites modernos, responsivos e sistemas web completos.',
      techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
      icon: <Globe size={24} />,
      color: 'blue'
    },
    {
      title: 'Desenvolvimento Mobile',
      desc: 'Criação de aplicações móveis para Android e iOS com performance otimizada.',
      techs: ['React Native', 'Expo'],
      icon: <Smartphone size={24} />,
      color: 'purple'
    },
    {
      title: 'Backend & APIs',
      desc: 'Desenvolvimento de sistemas backend e APIs seguras e escaláveis.',
      techs: ['Node.js', 'PHP', 'Python'],
      icon: <Database size={24} />,
      color: 'indigo'
    },
    {
      title: 'Aplicações Desktop',
      desc: 'Criação de aplicações desktop modernas e multiplataforma.',
      techs: ['Electron.js'],
      icon: <Monitor size={24} />,
      color: 'cyan'
    },
    {
      title: 'UI/UX Design',
      desc: 'Criação de interfaces modernas, limpas e responsivas.',
      techs: ['Bootstrap', 'Tailwind', 'SASS'],
      icon: <Palette size={24} />,
      color: 'pink'
    },
    {
      title: 'Manutenção de Sistemas',
      desc: 'Atualização, correção de bugs e melhoria de sistemas existentes.',
      techs: ['Git', 'GitHub'],
      icon: <Wrench size={24} />,
      color: 'orange'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
          >
            Especialidades
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            Serviços <span className="text-primary italic">Digitais</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-main max-w-2xl mx-auto text-lg"
          >
            Soluções completas e personalizadas para transformar ideias em experiências digitais de alto impacto.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group relative bg-surface border border-border p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,123,255,0.15)] flex flex-col h-full"
            >
              {/* Card Aura on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
              
              <div className="inline-flex items-center justify-center p-4 bg-bg border border-border text-primary rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-text-main/80 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-bg border border-border rounded-md text-text-main/60 group-hover:border-primary/20 group-hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border group-hover:border-primary/20 transition-colors">
                  <a 
                    href="https://wa.me/244925279426?text=Olá Lourenço, gostaria de solicitar um orçamento para o serviço de: "
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-xs group/link"
                  >
                    SOLICITAR ORÇAMENTO
                    <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-surface/50 border border-border p-8 md:p-12 rounded-3xl inline-block max-w-4xl relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-bold mb-4 italic">Procura algo mais específico?</h4>
              <p className="text-text-main mb-8 max-w-xl mx-auto">
                Estou aberto a novos desafios e colaborações. Entre em contacto para discutirmos o seu projeto detalhadamente.
              </p>
              <a 
                href="https://wa.me/244925279426" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary flex items-center gap-3 mx-auto w-fit"
              >
                Conversar no WhatsApp
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
