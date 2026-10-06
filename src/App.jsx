import { useState } from 'react'
import { INFO, wa, MAPS, HERO_IMAGE, MENU } from './config.js'

const LINKS = [['Início', 'inicio'], ['Cardápio', 'cardapio'], ['Sobre', 'sobre'], ['Localização', 'localizacao'], ['Contato', 'contato']]

function Burger() {
  return (
    <svg viewBox="0 0 200 180" className="burger" aria-hidden="true">
      <path d="M20 80 Q20 20 100 20 Q180 20 180 80Z" fill="#e8892b" />
      <g fill="#f6d9a0"><circle cx="70" cy="45" r="3" /><circle cx="105" cy="35" r="3" /><circle cx="135" cy="52" r="3" /></g>
      <path d="M15 88 q12 14 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t15 0 v6H15Z" fill="#5fa24a" />
      <rect x="22" y="94" width="156" height="24" rx="12" fill="#4a2a1b" />
      <path d="M25 118 h150 l-18 18 -14 -10 -14 10 -14 -10 -14 10 -14 -10 -14 10 -14 -10 -14 10Z" fill="#f2b705" />
      <path d="M20 138 h160 q0 28 -30 28 h-100 q-30 0 -30 -28Z" fill="#d9731a" />
    </svg>
  )
}

function Img({ src, label, className = '' }) {
  return src
    ? <img src={src} alt={label} className={`img ${className}`} loading="lazy" />
    : <div className={`img ph ${className}`}><Burger /><span>{label}</span></div>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap bar">
        <a href="#inicio" className="logo">PIT STOP <b>LANCHES</b></a>
        <nav className={open ? 'nav open' : 'nav'}>
          {LINKS.map(([t, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn sm" href={wa()} target="_blank" rel="noreferrer">PEDIR PELO WHATSAPP</a>
        </nav>
        <button className="burger-btn" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="tag">Hambúrguer Artesanal · Delivery · Retirada</span>
          <h1>SEU PRÓXIMO HAMBÚRGUER <em>FAVORITO.</em></h1>
          <p className="lead">Hambúrguer artesanal, delivery e retirada em São Paulo.</p>
          <div className="actions">
            <a className="btn" href={wa()} target="_blank" rel="noreferrer">🍔 PEDIR PELO WHATSAPP</a>
            <a className="btn ghost" href={MAPS} target="_blank" rel="noreferrer">📍 COMO CHEGAR</a>
          </div>
        </div>
        <Img src={HERO_IMAGE} label="[Foto do hambúrguer — substituir em config.js]" className="hero-img" />
      </div>
    </section>
  )
}

const CARDS = [
  ['🍔', 'Hambúrguer Artesanal', 'Preparado para quem leva sabor a sério.'],
  ['🛵', 'Delivery', 'Receba seu pedido onde estiver.'],
  ['🥡', 'Retirada', 'Peça pelo WhatsApp e retire no local.'],
  ['📍', 'São Paulo', `Estamos na ${INFO.street}.`],
]

function Highlights() {
  return (
    <section className="sec alt">
      <div className="wrap cards">
        {CARDS.map(([i, t, d]) => (
          <article key={t} className="card"><span className="ico">{i}</span><h3>{t}</h3><p>{d}</p></article>
        ))}
      </div>
    </section>
  )
}

function Menu() {
  const cats = Object.keys(MENU)
  const [cat, setCat] = useState(cats[0])
  return (
    <section id="cardapio" className="sec">
      <div className="wrap">
        <h2>NOSSO <em>CARDÁPIO</em></h2>
        <p className="note">⚠️ Cardápio demonstrativo: produtos, fotos e preços serão preenchidos com os dados oficiais.</p>
        <div className="tabs">
          {cats.map(c => <button key={c} className={c === cat ? 'tab on' : 'tab'} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="grid">
          {MENU[cat].map((p, i) => (
            <article key={i} className="prod">
              <Img src={p.img} label="[Foto do produto]" className="prod-img" />
              <div className="prod-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="price">{p.price}</div>
                <a className="btn full" href={wa(`Olá, Pit Stop Lanches! Quero pedir: ${p.name} (${cat}).`)} target="_blank" rel="noreferrer">PEDIR PELO WHATSAPP</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="sec alt">
      <div className="wrap narrow">
        <h2>SOBRE A <em>PIT STOP</em></h2>
        <p>A Pit Stop Lanches é uma hamburgueria de hambúrguer artesanal com delivery e retirada em São Paulo. Aqui o foco é simples: sabor de verdade, do pedido até a sua mesa.</p>
        <p className="ph-text">[Texto da história da empresa — preencher com o cliente]</p>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="localizacao" className="sec">
      <div className="wrap split">
        <div>
          <h2>ONDE <em>ESTAMOS</em></h2>
          <p>📍 {INFO.street}<br />{INFO.city} · CEP {INFO.cep}</p>
          <p>🕒 {INFO.hours}</p>
          <a className="btn" href={MAPS} target="_blank" rel="noreferrer">📍 COMO CHEGAR</a>
        </div>
        <iframe title="Mapa" loading="lazy" className="map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${INFO.street}, ${INFO.city}`)}&output=embed`} />
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="sec cta">
      <div className="wrap narrow center">
        <h2>BATEU A <em>FOME?</em></h2>
        <p className="lead">Faça seu pedido direto pelo WhatsApp.</p>
        <a className="btn big" href={wa()} target="_blank" rel="noreferrer">🍔 PEDIR PELO WHATSAPP</a>
        <p className="small">{INFO.whatsappDisplay} · <a href={INFO.instagram} target="_blank" rel="noreferrer">@pitstoplanche</a></p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header /><main><Hero /><Highlights /><Menu /><About /><Location /><Contact /></main>
      <footer className="footer">© {new Date().getFullYear()} {INFO.name} · {INFO.street}, {INFO.city}</footer>
      <a className="fab" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
    </>
  )
}
