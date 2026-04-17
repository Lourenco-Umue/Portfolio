import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { Mail, Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  setErrorMessage('');

  try {
    await emailjs.send(
      "service_1vh2joj",
      "template_7kx0x1t",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      "5HHNYr3cx3KksNRrx"
    );

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

  } catch (error: any) {
  console.error("ERRO REAL:", error);
  setStatus('error');
  setErrorMessage(error?.text || 'Erro ao enviar mensagem.');
};
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl mb-6">Vamos conversar?</h3>
            <p className="text-text-main mb-8 leading-relaxed">
              Estou disponível para novos projetos e colaborações freelance. 
              Sinta-se à vontade para entrar em contacto comigo.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-text-main">Email</p>
                  <p className="text-text-bright">lourencoumue01@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-text-main">Telefone</p>
                  <p className="text-text-bright">+244 925 279 426</p>
                </div>
              </div>
            </div>
            <a 
              href="https://wa.me/244925279426" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-12 inline-flex items-center gap-3 bg-[#25d366] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-lg shadow-green-500/20"
            >
              <MessageSquare size={20} /> WhatsApp Direto
            </a>
          </div>
          <div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-surface border border-primary/30 rounded-xl animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={64} className="text-primary mb-4" />
                <h3 className="text-2xl mb-2 text-text-bright">Mensagem Enviada!</h3>
                <p className="text-text-main mb-6">Obrigado pelo contacto. Responderei o mais brevemente possível.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-text-main tracking-wider ml-1">Nome Completo</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border p-4 text-text-bright rounded-lg text-sm outline-none focus:border-primary transition-all disabled:opacity-50" 
                    placeholder="Ex: Lourenço Umue" 
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-text-main tracking-wider ml-1">Endereço de E-mail</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border p-4 text-text-bright rounded-lg text-sm outline-none focus:border-primary transition-all disabled:opacity-50" 
                    placeholder="seu@email.com" 
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-text-main tracking-wider ml-1">Mensagem</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border p-4 text-text-bright rounded-lg text-sm outline-none focus:border-primary transition-all resize-none disabled:opacity-50" 
                    placeholder="Descreva brevemente sua ideia..." 
                    rows={4} 
                    disabled={status === 'loading'}
                  />
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Enviando...
                    </>
                  ) : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
