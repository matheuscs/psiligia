import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import './Home.css'

const MapaConsultorio = () => {
  return (
    <section className="mapa-container">
      <h2 className="mapa-titulo">
        Consultório de Psicologia em Indaiatuba
      </h2>
      <iframe
        title="Localização do consultório de Lígia Rangel em Indaiatuba"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.39796274232282!2d-47.20513738101647!3d-23.08364266012798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b532af2af24b%3A0x6ee7b5e032a6e3af!2sPsic%C3%B3loga%20L%C3%ADgia%20Rangel!5e0!3m2!1spt-BR!2sbr!4v1768247646110!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        className="mapa-iframe"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export function Home() {
  return (
    <div className="container">
      <header className='header'>
        <img src="./ligiarangel.png" alt="Lígia Rangel - Psicóloga em Indaiatuba" />
        <h1 className='name'>Lígia Rangel</h1>
        <p className="profession">
          Psicóloga Clínica<br />
          <span className="crp-text">CRP 06/207405</span>
        </p>
        <div className='social'>
          <div className='whats'>
            <a href="https://wa.me/551999421996?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={32} />(19)99942-1996
            </a>
          </div>
          <div className='insta'>
            <a href="https://www.instagram.com/psi.ligiarangel/" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={32} />psi.ligiarangel
            </a>
          </div>
        </div>
      </header>
      <main className='content'>
        <section className='introduction'>
          <h2>Atendimento Psicológico em Indaiatuba e Online</h2>
          <p>
            Olá! Eu sou a <strong>Lígia Rangel</strong>, psicóloga graduada e dedicada a auxiliar
            pessoas em sua jornada de autoconhecimento e saúde mental.
          </p>
          <p>
            Ofereço <strong>atendimento presencial em Indaiatuba/SP</strong> e também
            <strong> consultas online</strong>, garantindo flexibilidade e acolhimento onde você estiver.
          </p>
          <p><strong>Vamos marcar uma consulta?</strong></p>
          <p>Entre em contato diretamente pelo WhatsApp ou pelas redes sociais acima!</p>
        </section>

        <MapaConsultorio />
      </main>

      <footer className='footer'>
        <p>© 2026 Lígia Rangel - Psicóloga em Indaiatuba - CRP 06/207405</p>
      </footer>
    </div>
  )
}