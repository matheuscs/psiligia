import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import './Home.css'

export function Home() {
  return(
    <div>
      <div className='header'>
        <img src="./ligiarangel2.png" alt="Lígia's Photo" />
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
          <p>Entre em contato pelas minhas redes socias clicando nos links acima!</p>
        </div>
      </div>
      <footer>
        <p>© 2025 Lígia Rangel</p>
      </footer>
    </div>
  )
}