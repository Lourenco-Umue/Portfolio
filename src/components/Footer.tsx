import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-surface/50">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-text-bright">
          Lourenço <span className="text-primary">Umue</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Lourenco-Umue/Lourenco-Umue" target="_blank" rel="noreferrer" className="text-text-main hover:text-primary transition-colors">
            <Github size={24} />
          </a>
        </div>
        <p className="text-sm text-text-main">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
