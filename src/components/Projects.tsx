import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'E-commerce Moderno',
      desc: 'Plataforma de vendas completa com carrinho e pagamentos.',
      tech: ['React', 'Tailwind', 'Node.js'],
      link: 'https://github.com/Lourenco-Umue/Lourenco-Umue'
    },
    {
      name: 'Sistema de Gestão',
      desc: 'Dashboard administrativo para controle de estoque e vendas.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      link: 'https://github.com/Lourenco-Umue/Lourenco-Umue'
    },
    {
      name: 'App de Portfólio',
      desc: 'Este site pessoal desenvolvido com foco em performance.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://github.com/Lourenco-Umue/Lourenco-Umue'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="card group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Github size={20} />
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-text-main hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-text-main mb-6">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-border rounded text-text-main">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Lourenco-Umue/Lourenco-Umue" 
            target="_blank" 
            rel="noreferrer" 
            className="text-text-main hover:text-primary font-bold transition-colors inline-flex items-center gap-2"
          >
            Ver mais no GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
