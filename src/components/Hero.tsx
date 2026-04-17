import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-6">
            Lourenço Umue
          </h1>
          <p className="text-xl md:text-2xl text-text-main mb-10 leading-relaxed">
            Desenvolvedor Web apaixonado por <span className="text-primary">tecnologia</span> e inovação.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>
            <a href="#contact" className="btn-outline">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
