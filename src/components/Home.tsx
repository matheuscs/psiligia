import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import './Home.css'

const MapaConsultorio = () => {
  return (
    <div className="mapa-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.39796274232282!2d-47.20513738101647!3d-23.08364266012798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b532af2af24b%3A0x6ee7b5e032a6e3af!2sPsic%C3%B3loga%20L%C3%ADgia%20Rangel!5e0!3m2!1spt-BR!2sbr!4v1768247646110!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: '12px' }} // Adicionei um arredondamento para ficar mais moderno
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export function Home() {
  return(
    <div>
      <div className='header'>
        <img src="./ligiarangel.png" alt="Lígia's Photo" />
        <p className='name'>Lígia Rangel</p>
        <p className="profession">Psicóloga</p>
        <p className='license'>CRP 06/207405</p>
        <div className='social'>
          <div className='whats'>
            <a href="https://wa.me/551999421996?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank">
            <WhatsappLogo size={32} />(19)99942-1996 
            </a>
          </div>
          <div className='insta'>
            <a href="https://www.instagram.com/psi.ligiarangel/" target="_blank">
              <InstagramLogo size={32} />psi.ligiarangel
            </a>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='introduction'>
          <p>Olá! Eu sou a Lígia Rangel, psicóloga, e estou pronta para te ajudar! </p>
          <p>Vamos marcar uma consulta?</p>
          <p>Entre em contato pelas minhas redes sociais clicando nos links acima!</p>
        </div>
        <MapaConsultorio />
      </div>
      <footer>
        <p>© 2025 Lígia Rangel</p>
      </footer>
    </div>
  )
}