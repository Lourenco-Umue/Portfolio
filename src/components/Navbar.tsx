import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-text-bright tracking-tight">
          Lourenço <span className="text-primary">Umue</span>
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
