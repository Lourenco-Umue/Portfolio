import React from 'react';
import { Layout, Globe, Smartphone, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Desenvolvimento de Sites',
      desc: 'Criação de sites institucionais e landing pages otimizadas.',
      icon: <Globe size={24} />
    },
    {
      title: 'Aplicações Web',
      desc: 'Sistemas complexos com foco em usabilidade e performance.',
      icon: <Layout size={24} />
    },
    {
      title: 'UI Básica',
      desc: 'Design de interfaces limpas e centradas no usuário.',
      icon: <Smartphone size={24} />
    },
    {
      title: 'Manutenção',
      desc: 'Atualização e otimização de sistemas já existentes.',
      icon: <Settings size={24} />
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Serviços</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-surface border border-border p-8 rounded-xl text-center hover:border-primary/50 transition-all">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg mb-4">{service.title}</h3>
              <p className="text-sm text-text-main line-clamp-3">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
