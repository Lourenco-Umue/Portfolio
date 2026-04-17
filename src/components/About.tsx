import React from 'react';

const About: React.FC = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 
    'React', 'React Native', 'PHP'
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Sobre Mim</h2>
            <p className="text-text-main leading-relaxed mb-6">
              Sou um desenvolvedor focado em criar soluções digitais modernas e eficientes. 
              Com base em Luanda, Angola, busco sempre as melhores práticas de desenvolvimento 
              para entregar produtos de alta qualidade.
            </p>
            <p className="text-text-main leading-relaxed">
              Minha jornada na tecnologia é movida pela curiosidade e pelo desejo de resolver 
              problemas através do código.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-bright">Minhas Habilidades</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-surface border border-border p-4 rounded-lg text-center text-sm font-medium hover:border-primary transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
